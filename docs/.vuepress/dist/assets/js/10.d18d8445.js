(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{178:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("I opted for "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Support-vector_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support Vector Machines"),n("OutboundLink")],1),e._v("\nas a good candidate algorithm, since support vectors should lead to a space efficient\nimplementation (since RAM is often the most limiting factor).\nThe basic idea is that you train a classifier in Python with "),n("a",{attrs:{href:"https://scikit-learn.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("scikit-learn"),n("OutboundLink")],1),e._v("\nand generate C code from it."),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.com/nok/sklearn-porter",target:"_blank",rel:"noopener noreferrer"}},[e._v("sklearn-porter"),n("OutboundLink")],1),e._v(" is an existing project\nthat can output C code, though it's not optimized for microcontrollers, so you'll\nhit a wall on memory because it needs to declare all the support vectors in memory\n(to have an idea, the "),n("a",{attrs:{href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_breast_cancer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("breast cancer dataset"),n("OutboundLink")],1),e._v("\nproduces a 57x30 matrix of doubles, totalling 6840 bytes just for the support vectors).")]),e._v(" "),n("p",[e._v("So my effort was to find an implementation that needed the least amount possible of\nmemory, sacrificing the program space in my case, since you will hardly ever\nfill that much space.\nAfter a whole 20 minutes of thinking, the result is a Python library that takes\na SVM classifier and produces C code you can copy-paste in your project to run ML\non microcontrollers. The C code is clearly readable, so you can even see what's going on:\nno black magic.")]),e._v(" "),n("p",[e._v("In a next series of articles I'll take the demo projects on the Tensorflow blog\nand clone them using MicroML instead, comparing the hardware requirements\nof the two. Stay tuned!")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introducing-microml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introducing-microml","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducing MicroML")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("MicroML is an attempt to bring Machine Learning algorithms to microcontrollers.\nIt originated when I first saw a blog about Tensorflow Lite for microcontrollers\nand thought it was a waste of resources (if they even fitted on the hardware)\nto run Neural Networks on such constrained devices when more efficient\nalternatives were available."),t("br"),this._v("\nQuoting from the Tensoflow blog: "),t("code",[this._v("The core runtime fits in 16 KB on an Arm Cortex M3")]),this._v("\n(that's just the runtime, without any actual operator!).\nWhat about my beloved Arduino Nano (old generation) and its 2 Kb of RAM?\n"),t("strong",[this._v("Should I give up on ML? No way!")])])}],!1,null,null,null);t.default=o.exports}}]);