AmCharts.GaugeAxis=AmCharts.Class({construct:function(t){this.cname="GaugeAxis",this.radius="95%",this.startAngle=-120,this.endAngle=120,this.startValue=0,this.endValue=200,this.valueInterval=20,this.minorTickInterval=5,this.tickLength=10,this.minorTickLength=5,this.tickColor="#555555",this.labelFrequency=this.tickThickness=this.tickAlpha=1,this.inside=!0,this.labelOffset=10,this.showLastLabel=this.showFirstLabel=!0,this.axisThickness=1,this.axisColor="#000000",this.axisAlpha=1,this.gridInside=!0,this.topTextYOffset=0,this.topTextBold=!0,this.bottomTextYOffset=0,this.bottomTextBold=!0,this.centerY=this.centerX="0%",this.bandOutlineAlpha=this.bandOutlineThickness=0,this.bandOutlineColor="#000000",this.bandAlpha=1,AmCharts.applyTheme(this,t,"GaugeAxis")},value2angle:function(t){return this.startAngle+this.singleValueAngle*t},setTopText:function(t){if(void 0!==t){this.topText=t;var i=this.chart;if(this.axisCreated){this.topTF&&this.topTF.remove();var s=this.topTextFontSize;s||(s=i.fontSize);var a=this.topTextColor;a||(a=i.color),t=AmCharts.text(i.container,t,a,i.fontFamily,s,void 0,this.topTextBold),t.translate(this.centerXReal,this.centerYReal-this.radiusReal/2+this.topTextYOffset),this.chart.graphsSet.push(t),this.topTF=t}}},setBottomText:function(t){if(void 0!==t){this.bottomText=t;var i=this.chart;if(this.axisCreated){this.bottomTF&&this.bottomTF.remove();var s=this.bottomTextFontSize;s||(s=i.fontSize);var a=this.bottomTextColor;a||(a=i.color),t=AmCharts.text(i.container,t,a,i.fontFamily,s,void 0,this.bottomTextBold),t.translate(this.centerXReal,this.centerYReal+this.radiusReal/2+this.bottomTextYOffset),this.bottomTF=t,this.chart.graphsSet.push(t)}}},draw:function(){var t=this.chart,i=t.graphsSet,s=this.startValue,a=this.valueInterval,e=this.startAngle,h=this.endAngle,r=this.tickLength,o=(this.endValue-s)/a+1,n=(h-e)/(o-1),l=n/a;this.singleValueAngle=l;var u=t.container,d=this.tickColor,c=this.tickAlpha,m=this.tickThickness,A=a/this.minorTickInterval,g=n/A,f=this.minorTickLength,C=this.labelFrequency,p=this.radiusReal;this.inside||(p-=15);var v=t.centerX+AmCharts.toCoordinate(this.centerX,t.realWidth),x=t.centerY+AmCharts.toCoordinate(this.centerY,t.realHeight);this.centerXReal=v,this.centerYReal=x;var w,T,b={fill:this.axisColor,"fill-opacity":this.axisAlpha,"stroke-width":0,"stroke-opacity":0};this.gridInside?T=w=p:(w=p-r,T=w+f);var M=this.axisThickness/2,h=AmCharts.wedge(u,v,x,e,h-e,w+M,w+M,w-M,0,b);for(i.push(h),h=AmCharts.doNothing,AmCharts.isModern||(h=Math.round),b=AmCharts.getDecimals(a),w=0;o>w;w++){var N=s+w*a,M=e+w*n,k=h(v+p*Math.sin(M/180*Math.PI)),B=h(x-p*Math.cos(M/180*Math.PI)),R=h(v+(p-r)*Math.sin(M/180*Math.PI)),I=h(x-(p-r)*Math.cos(M/180*Math.PI)),k=AmCharts.line(u,[k,R],[B,I],d,c,m,0,!1,!1,!0);i.push(k),k=-1,R=this.labelOffset,this.inside||(R=-R-r,k=1);var B=Math.sin(M/180*Math.PI),I=Math.cos(M/180*Math.PI),B=v+(p-r-R)*B,R=x-(p-r-R)*I,V=this.fontSize;isNaN(V)&&(V=t.fontSize);var I=Math.sin((M-90)/180*Math.PI),F=Math.cos((M-90)/180*Math.PI);if(C>0&&w/C==Math.round(w/C)&&(this.showLastLabel||w!=o-1)&&(this.showFirstLabel||0!==w)){var N=AmCharts.formatNumber(N,t.numberFormatter,b),S=this.unit;S&&(N="left"==this.unitPosition?S+N:N+S),N=AmCharts.text(u,N,t.color,t.fontFamily,V),V=N.getBBox(),N.translate(B+k*V.width/2*F,R+k*V.height/2*I),i.push(N)}if(o-1>w)for(N=1;A>N;N++)I=M+g*N,k=h(v+T*Math.sin(I/180*Math.PI)),B=h(x-T*Math.cos(I/180*Math.PI)),R=h(v+(T-f)*Math.sin(I/180*Math.PI)),I=h(x-(T-f)*Math.cos(I/180*Math.PI)),k=AmCharts.line(u,[k,R],[B,I],d,c,m,0,!1,!1,!0),i.push(k)}if(i=this.bands)for(s=0;s<i.length;s++)(a=i[s])&&(d=a.startValue,c=a.endValue,r=AmCharts.toCoordinate(a.radius,p),isNaN(r)&&(r=T),o=AmCharts.toCoordinate(a.innerRadius,p),isNaN(o)&&(o=r-f),n=e+l*d,c=l*(c-d),m=a.outlineColor,void 0==m&&(m=this.bandOutlineColor),A=a.outlineThickness,isNaN(A)&&(A=this.bandOutlineThickness),g=a.outlineAlpha,isNaN(g)&&(g=this.bandOutlineAlpha),d=a.alpha,isNaN(d)&&(d=this.bandAlpha),a=AmCharts.wedge(u,v,x,n,c,r,r,o,0,{fill:a.color,stroke:m,"stroke-width":A,"stroke-opacity":g}),a.setAttr("opacity",d),t.gridSet.push(a));this.axisCreated=!0,this.setTopText(this.topText),this.setBottomText(this.bottomText),t=t.graphsSet.getBBox(),this.width=t.width,this.height=t.height}}),AmCharts.GaugeArrow=AmCharts.Class({construct:function(t){this.cname="GaugeArrow",this.color="#000000",this.nailAlpha=this.alpha=1,this.startWidth=this.nailRadius=8,this.endWidth=0,this.borderAlpha=1,this.radius="90%",this.nailBorderAlpha=this.innerRadius=0,this.nailBorderThickness=1,this.frame=0,AmCharts.applyTheme(this,t,"GaugeArrow")},setValue:function(t){var i=this.chart;i?i.setValue(this,t):this.previousValue=this.value=t}}),AmCharts.GaugeBand=AmCharts.Class({construct:function(){this.cname="GaugeBand"}}),AmCharts.AmAngularGauge=AmCharts.Class({inherits:AmCharts.AmChart,construct:function(t){this.cname="AmAngularGauge",AmCharts.AmAngularGauge.base.construct.call(this,t),this.theme=t,this.type="gauge",this.minRadius=this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=10,this.faceColor="#FAFAFA",this.faceAlpha=0,this.faceBorderWidth=1,this.faceBorderColor="#555555",this.faceBorderAlpha=0,this.arrows=[],this.axes=[],this.startDuration=1,this.startEffect="easeOutSine",this.adjustSize=!0,this.extraHeight=this.extraWidth=0,AmCharts.applyTheme(this,t,this.cname)},addAxis:function(t){this.axes.push(t)},formatString:function(t,i){return t=AmCharts.formatValue(t,i,["value"],this.numberFormatter,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)},initChart:function(){AmCharts.AmAngularGauge.base.initChart.call(this);var t;0===this.axes.length&&(t=new AmCharts.GaugeAxis(this.theme),this.addAxis(t));var i;for(i=0;i<this.axes.length;i++)t=this.axes[i],t=AmCharts.processObject(t,AmCharts.GaugeAxis,this.theme),t.chart=this,this.axes[i]=t;var s=this.arrows;for(i=0;i<s.length;i++){t=s[i],t=AmCharts.processObject(t,AmCharts.GaugeArrow,this.theme),t.chart=this,s[i]=t;var a=t.axis;AmCharts.isString(a)&&(t.axis=AmCharts.getObjById(this.axes,a)),t.axis||(t.axis=this.axes[0]),isNaN(t.value)&&t.setValue(t.axis.startValue),isNaN(t.previousValue)&&(t.previousValue=t.axis.startValue)}this.setLegendData(s),this.drawChart(),this.totalFrames=1e3*this.startDuration/AmCharts.updateRate},drawChart:function(){AmCharts.AmAngularGauge.base.drawChart.call(this);var t=this.container,i=this.updateWidth();this.realWidth=i;var s=this.updateHeight();this.realHeight=s;var a=AmCharts.toCoordinate,e=a(this.marginLeft,i),h=a(this.marginRight,i),r=a(this.marginTop,s)+this.getTitleHeight(),o=a(this.marginBottom,s),n=a(this.radius,i,s),a=i-e-h,l=s-r-o+this.extraHeight;n||(n=Math.min(a,l)/2),n<this.minRadius&&(n=this.minRadius),this.radiusReal=n,this.centerX=(i-e-h)/2+e,this.centerY=(s-r-o)/2+r+this.extraHeight/2,isNaN(this.gaugeX)||(this.centerX=this.gaugeX),isNaN(this.gaugeY)||(this.centerY=this.gaugeY);var u,i=this.faceAlpha,s=this.faceBorderAlpha;for((i>0||s>0)&&(u=AmCharts.circle(t,n,this.faceColor,i,this.faceBorderWidth,this.faceBorderColor,s,!1),u.translate(this.centerX,this.centerY),u.toBack(),(t=this.facePattern)&&u.pattern(t)),i=n=t=0;i<this.axes.length;i++)s=this.axes[i],s.radiusReal=AmCharts.toCoordinate(s.radius,this.radiusReal),s.draw(),s.width>t&&(t=s.width),s.height>n&&(n=s.height);(i=this.legend)&&i.invalidateSize(),this.adjustSize&&!this.chartCreated&&(u&&(u=u.getBBox(),u.width>t&&(t=u.width),u.height>n&&(n=u.height)),u=0,(l>n||a>t)&&(u=Math.min(l-n,a-t)),u>0&&(this.extraHeight=l-n,this.chartCreated=!0,this.validateNow())),this.dispDUpd(),this.chartCreated=!0},validateSize:function(){this.extraHeight=this.extraWidth=0,this.chartCreated=!1,AmCharts.AmAngularGauge.base.validateSize.call(this)},addArrow:function(t){this.arrows.push(t)},removeArrow:function(t){AmCharts.removeFromArray(this.arrows,t),this.validateNow()},removeAxis:function(t){AmCharts.removeFromArray(this.axes,t),this.validateNow()},drawArrow:function(t,i){t.set&&t.set.remove();var s=this.container;if(t.set=s.set(),!t.hidden){var a=t.axis,e=a.radiusReal,h=a.centerXReal,r=a.centerYReal,o=t.startWidth,n=t.endWidth,l=AmCharts.toCoordinate(t.innerRadius,a.radiusReal),u=AmCharts.toCoordinate(t.radius,a.radiusReal);a.inside||(u-=15);var d=t.nailColor;d||(d=t.color);var c=t.nailColor;c||(c=t.color),d=AmCharts.circle(s,t.nailRadius,d,t.nailAlpha,t.nailBorderThickness,d,t.nailBorderAlpha),t.set.push(d),d.translate(h,r),isNaN(u)&&(u=e-a.tickLength);var a=Math.sin(i/180*Math.PI),e=Math.cos(i/180*Math.PI),d=Math.sin((i+90)/180*Math.PI),m=Math.cos((i+90)/180*Math.PI),s=AmCharts.polygon(s,[h-o/2*d+l*a,h+u*a-n/2*d,h+u*a+n/2*d,h+o/2*d+l*a],[r+o/2*m-l*e,r-u*e+n/2*m,r-u*e-n/2*m,r-o/2*m-l*e],t.color,t.alpha,1,c,t.borderAlpha,void 0,!0);t.set.push(s),this.graphsSet.push(t.set)}},setValue:function(t,i){t.axis&&(t.axis.value2angle(i),t.frame=0,t.previousValue=t.value),t.value=i;var s=this.legend;s&&s.updateValues()},handleLegendEvent:function(t){var i=t.type;if(t=t.dataItem,!this.legend.data&&t)switch(i){case"hideItem":this.hideArrow(t);break;case"showItem":this.showArrow(t)}},hideArrow:function(t){t.set.hide(),t.hidden=!0},showArrow:function(t){t.set.show(),t.hidden=!1},updateAnimations:function(){AmCharts.AmAngularGauge.base.updateAnimations.call(this);for(var t,i=this.arrows.length,s=0;i>s;s++){t=this.arrows[s];var a;t.frame>=this.totalFrames?a=t.value:(t.frame++,t.clockWiseOnly&&t.value<t.previousValue&&(a=t.axis,t.previousValue-=a.endValue-a.startValue),a=AmCharts.getEffect(this.startEffect),a=AmCharts[a](0,t.frame,t.previousValue,t.value-t.previousValue,this.totalFrames),isNaN(a)&&(a=t.value)),a=t.axis.value2angle(a),this.drawArrow(t,a)}}});