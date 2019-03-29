/*
---
description: A simple Class for progress bars.

license: MIT-style

authors:
- Fabian Dillmeier <fabian at dillmeier.de>

requires:
- core/1.4.5

provides: [MooProgressBar]

*/
(function(){
    var MooProgressBar=this.MooProgressBar=new Class({
        Implements:[Options,Events], //,Class.Occlude],
        element:null,
        property:'MooProgressBar',
        
        options:{
            range:[0,100],
            start:0,
            unit:'%',
            precision:0,
            effect_duration:200,
            tween_property:'width',
            inner_class:'progressbar_inner',
            label_class:'progressbar_label',
            getLabel:function(progress, value, unit, precision){
                if (unit=='%'){
                    return progress.toFixed(parseInt(precision))+unit;
                }else{
                    return value.toFixed(parseInt(precision))+unit;
                }
            }
        },
        
        initialize:function(element,options){
            this.element=$(element);
            //if (this.occlude()) return this.occluded();
            this.setOptions(options);
            this.inner=this.element.getElement('.'+this.options.inner_class);
            this.labels=this.element.getElements('.'+this.options.label_class);
            
            this.inner.set('tween',{
                unit:'%',
                duration:this.options.effect_duration,
                link:'cancel',
                property:this.options.tween_property
            });
            if (!isNaN(this.options.range)){
                this.options.range=[0,this.options.range];
            }
            
            this.setValue(this.options.start||this.options.range[0],true);
            
            return this.element.store(this.property,this);
        },
        setValue:function(value,no_anim){
            return this.setProgress((value-this.options.range[0])*100/(this.options.range[1]-this.options.range[0]),no_anim);
        },
        getValue:function(){
            return this.value;
        },
        setProgress:function(progress,no_anim){
            progress=parseFloat(progress);
            if (isNaN(progress) || progress < 0){
                progress=0;
            }else if(progress > 100){
                progress=100;                
            }
            if (progress!=this.progress){
                this.progress=progress;
                this.value=(this.options.range[1]-this.options.range[0])/100*this.progress+this.options.range[0];
                if (this.progress>=100 || no_anim){
                    this.inner.get('tween').cancel().set(this.progress);
                }else{
                    this.inner.tween(this.progress);
                }
                this.setLabel(this.options.getLabel(this.progress,this.value,this.options.unit,this.options.precision));
                this.fireEvent('progress',[this.progress,this.value,this.options.unit,this.options.precision]);
            }
            if (this.progress>=100){
                this.fireEvent('complete',[this.value,this.options.unit,this.options.precision]);
            }
            return this;
        },
        getProgress:function(){
            return this.progress;
        },
        setLabel:function(text){
            this.labels.set('html',text);
            return this;
        }
    });
})();