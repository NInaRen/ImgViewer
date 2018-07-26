(function($) {
	var ImgViewer = function (selector,options) {
		var me = this;
		var opt = me.opt = $.extend({
			id: "",
			imgList:[],
			height: "200px",
			width: "200px",
			initIndex:0,
			zIndex: 2018
		}, options || {});
		this.init(opt);
	};

	ImgViewer.prototype = {
		init: function (opt) {
			if (opt.imgList.length == 0) {
				console.error("ImgViewer's imgList length is 0");
				return
			}

			if (opt.id == "" || opt.id == undefined) {
				console.error("ImgViewer's id is null");
				return
			}

			if (opt.initIndex > opt.imgList.length - 1) {
				opt.initIndex = opt.imgList.length - 1;
			}

			if (opt.initIndex < 0) {
				opt.initIndex = 0
			}

			var template = '<div class="viewer-image-wrapper" style="height: '+ opt.height + ';width: '+ opt.width + ';position: relative">' +
				'        <span class="viewer-turn-button viewer-prev pre-button"></span>' +
				'        <ul id="viewer-images-'+ opt.id +'" class="viewer-images">';
			$(opt.imgList).each(function (index, img) {
				if (opt.initIndex == index){
					template += '<li class="viewer-selected"><img src="' + img + '"></li>';
				} else {
					template += '<li><img src="' + img + '"></li>';
				}
		});
			template += '</ul><span class="viewer-turn-button next-button viewer-next"></span></div>';

			$("#" + opt.id).append(template);

			$('#viewer-images-' + opt.id).viewer({
				zIndex: opt.zIndex
			});
			this.bind(opt);
		},
		bind: function (opt) {
			showButtons($("#" + opt.id).find(".viewer-selected"));

			$("#" + opt.id).on("click", ".pre-button", function () {
				console.log(opt.id);
				var selected = $("#" + opt.id).find(".viewer-selected").prev();
				if (selected.length > 0) {
					$("#" + opt.id).find(".viewer-selected").removeClass("viewer-selected");
					selected.addClass("viewer-selected");
					showButtons(selected);
				}
			})

			$("#" + opt.id).on("click", ".next-button", function () {
				console.log(opt.id);
				var selected = $("#" + opt.id).find(".viewer-selected").next();
				if (selected.length > 0) {
					$("#" + opt.id).find(".viewer-selected").removeClass("viewer-selected");
					selected.addClass("viewer-selected");
					showButtons(selected);
				}
			})

			function showButtons(selected) {
				if (selected.prev().length == 0) {
					$("#" + opt.id).find(".pre-button").addClass("viewer-button-hide");
				} else {
					$("#" + opt.id).find(".pre-button").removeClass("viewer-button-hide");
				}
				if (selected.next().length == 0) {
					$("#" + opt.id).find(".next-button").addClass("viewer-button-hide");
				} else {
					$("#" + opt.id).find(".next-button").removeClass("viewer-button-hide");
				}
			}
		},
	}

	$.fn.ImgViewer = function(options){
		return this.each(function(){
			$(this).data('ImgViewer',new ImgViewer(this,options));
		});
	};
})(jQuery);