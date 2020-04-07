var EditorWidgetTemplates = {
    SINGLE: 'single',
    XY: 'xy'
}

var WIDGETS = [{
    skew: {
        name: 'skew',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        xyFieldNames: {
          x: 'skewX',
          y: 'skewY'
        }
    },
    rotation: {
        name: 'rotation',
        templateType: EditorWidgetTemplates.SINGLE,
        customIncrement: null
    },
    offset: {
        name: 'offset',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        xyFieldNames: {
          x: 'offsetX',
          y: 'offsetY'
        }
    },
    align: {
        name: 'align',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        xyFieldNames: {
          x: 'alignX',
          y: 'alignY'
        }
    },
    
}];

var EDITOR_CONFIG = {
      defaultIncrement : 0.1,
      widgetPayload: WIDGETS
    }

export default EDITOR_CONFIG;