window.printLog = function (message) {
    window.previousErrors = window.previousErrors || [];
    window.previousErrors.push(message);
};

window.ModulJitpub = {
    initialize: function () {
        this.cleanDettachedModuls = _.debounce(this.cleanDettachedModuls, 100);
        this.registerListeners();
        this.refreshAll();
    },
    registerListeners: function () {
        var that = this;
        $(document).on('RefrescaModul', function (e, name) {
            if (name === '*') {
                that.refreshAll();
            } else if (_.has(ModulsConstructors, name) === true) {
                that.refresh(ModulsConstructors[name], $(document));
            } else {
                throw 'El modul que es vol refrescar no existeix';
            }
            that.cleanDettachedModuls();
        });

        $(document).on('RefrescaNode', function (e, node) {
            if (node !== undefined && $(node).length === 0) {
                throw 'El node indicat no existeix a la plana pubbundles';
            }

            that.refreshFromNode($(node));
            that.cleanDettachedModuls();
        });
    },
    add: function (ModulPrototype, SuperModul) {
        var name, Modul;
        if (_.has(ModulPrototype, 'name') === false) {
            throw 'La classe no conté nom';
        }
        name = ModulPrototype.name;
        if (_.has(ModulsConstructors, name) === true) {
            throw "S'està important més d'una vegada la classe " + name;
        }
        SuperModul = SuperModul || BaseModul;
        ModulPrototype.BaseModul = SuperModul;
        Modul = SuperModul.extend(ModulPrototype);
        ModulsConstructors[name] = Modul;
    },
    get: function (name) {
        if (_.has(ModulsConstructors, name) === false) {
            throw 'El mòdul ' + name + ' no està registrat';
        }
        return ModulsConstructors[name];
    },
    refreshAll: function () {
        this.refreshFromNode($(document));
    },
    refreshFromNode: function (node) {
        var modulInstance,
            elements,
            that = this;
        _.each(ModulsConstructors, function (ModulConstructor) {
            that.refresh(ModulConstructor, node);
        });
    },
    refresh: function (ModulConstructor, node) {
        var that = this;
        if (ModulConstructor.prototype.className) {
            elements = node.find('.' + ModulConstructor.prototype.className);
        } else if (ModulConstructor.prototype.tagName) {
            elements = node.find(ModulConstructor.prototype.tagName);
        } else {
            throw 'La classe ' + ModulConstructor.prototype.name + ' necessita la propietat className o tagName';
        }
        elements.each(function (i, element) {
            try {
                that.refreshElement($(this), ModulConstructor);
            } catch (e) {
                if (console && console.log) {
                    console.log('Error refrescant el mòdul ' + ModulConstructor.prototype.name, e);
                }
            }
        });
    },
    refreshElement: function (element, ModulConstructor) {
        var node = $(element),
            modulInstance,
            dataModul = node.data().modul;
        if (dataModul === undefined || dataModul[ModulConstructor.prototype.name] === undefined) {
            modulInstance = new ModulConstructor({
                el: element
            });
            dataModul = dataModul || {};
            dataModul[ModulConstructor.prototype.name] = modulInstance;
            ModulsInstances.push(modulInstance);
            node.data('modul', dataModul);
        } else {
            element.trigger('refresca');
        }
    },
    cleanDettachedModuls: function () {
        var isDetached;
        ModulsInstances = _.compact(
            _.map(ModulsInstances, function (modul) {
                isDetached = modul.$el.parents('.prerendering').length === 0 && modul.$el.parents('html').length === 0;
                if (isDetached) {
                    modul.destroy();
                    return null;
                }
                return modul;
            })
        );
    }
};
