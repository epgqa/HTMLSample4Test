/*
---
description:     fancyBars

license: MIT-style

authors:
  - eskerda

requires:
  core/1.2.3:   '*'

provides:
  - fancyBars
...
*/

var fancyBars = new Class({
	Implements: [Options, Events],
	options: {
		barsMargin: 20,
		alphaBar: true
	},
	initialize: function(context, options){
		this.setOptions(options);
		this.context = $(context);
		this.width = this.context.getStyle('width').toInt()-20;
		this.height = this.context.getStyle('height').toInt()-50;
		
		
		this.container = new Element('div');
		this.container.setStyles({
			'position': 'absolute',
			'width': this.width,
			'height' : this.height,
			'bottom':25
		});
		
		this.container.inject(this.context,'top');
		
		this.barsContainer = new Element('div');
		this.barsContainer.setStyles({
			'position':'relative',
			'width':'100%',
			'height':'100%',
			'margin':'0px',
			'left':10
		});
		this.barsContainer.inject(this.container,'top');
		this.bars = new Array();
		this.maxVal = 0;
		this.total = 0;
	},
	addBar: function(val,txt,legend, options){
		this.setOptions(options);
		if (val>this.maxVal)
			this.maxVal = val;
		this.total+=val;
		var bar = new Array();
		bar['val'] = val;
		bar['txt'] = txt;
		bar['legend'] = legend;
		if (this.options.barStyle!=null){
			bar['style'] = this.options.barStyle;
			this.options.barStyle = null;
		}
		if(this.options.anim!=null){
			bar['anim'] = this.options.anim;
			this.options.anim = null;
		}
		this.bars.push(bar);
		
	},
	paint: function(){
		this.paintBars();
	},
	paintBars: function(){
		var nBars = this.bars.length;
		var barWidth = (this.width-((nBars-1)*this.options.barsMargin))/nBars;
		var left = 0;
		this.bars.each(function(bar,i){
			var barContainer = new Element('div',{'class':'fancyBar_bar'});
			var barHeight = (bar['val']*this.height)/this.maxVal;
			barContainer.setStyles({
				'position':'absolute',
				'width':barWidth,
				'height': 0,
				'left':left,
				'bottom':0,
				'z-index':9
			});
			
			if (bar['style']!=null){
				barContainer.setStyles(bar['style']);
			}
			var topLabel = new Element('div');
			topLabel.set('html',Math.round(bar['val']*100/this.total)+'%');
			topLabel.setStyles({
				'position':'absolute',
				'text-align':'center',
				'width':'100%',
				'top':-23
			});
			topLabel.inject(barContainer,'top');
			
			var bottomLabel = new Element('div');
			bottomLabel.set('html',bar['legend']);
			bottomLabel.setStyles({
				'position':'absolute',
				'text-align':'center',
				'width':'100%',
				'bottom':-25
			});
			bottomLabel.inject(barContainer,'top');
			var alpha = new Element('div');
			alpha.setStyles({
				'background-color':'rgba(255,255,255,0.45)',
				'width':'50%',
				'height':'100%',
				'z-index':10,
				'right':0,
				'position':'absolute',
			});
			
			alpha.inject(barContainer,'bottom');
			barContainer.inject(this.barsContainer,'bottom');
			alpha.setStyle('-moz-border-radius-topright',barContainer.getStyle('-moz-border-radius-topright'));
			alpha.setStyle('-webkit-border-top-right-radius',barContainer.getStyle('-webkit-border-top-right-radius'));
			alpha.setStyle('-border-top-right-radius',barContainer.getStyle('-border-top-right-radius'));
			var anim = 'cubic:in:out';
			if (bar['anim']!=null)
				anim = bar['anim']
			
			if (anim!='none'){
			var animation = new Fx.Tween(barContainer,{
				'transition':anim,
				'duration':700
			});
			animation.start('height',barHeight);
			}else{
			
				barContainer.setStyle('height',barHeight);
			}
			left+=barWidth+this.options.barsMargin;
		}.bind(this));
	
	},
	clear: function(){
		this.container.destroy();
		this.initialize(this.context);
	}

});