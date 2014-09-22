'use strict';

(function (window, angular, undefined) {
	angular.module('angularYoutubePreview', []).directive('youtubePreview', [function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<div></div>',
			scope: {
				v: '@',
				frameKey: '@',
				playIcon: '@',
				width: '@',
				height: '@'
			},
			link: function (scope, element, attrs) {
				var preview, playImage = angular.element('<img>');

				if ( ! scope.frameKey) {
					scope.frameKey = 0;
				}

				preview = '//img.youtube.com/vi/' + scope.v + '/' + scope.frameKey + '.jpg'

				element.css({
					width: scope.width + 'px',
					height: scope.height + 'px',
					position: 'relative',
					background: 'url(' + preview + ') no-repeat center',
					backgroundSize: 'cover',
					cursor: 'pointer'
				});

				if (scope.playIcon) {
					playImage.attr({
						alt: 'play',
						src: scope.playIcon
					});

					playImage.css({
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					});

					element.append(playImage);
				}

				element.bind('click', function () {
					var iframe = angular.element('<iframe></iframe>').attr({
						width: '100%',
						height: '100%',
						frameborder: 0,
						allowfullscreen: true,
						src: "//www.youtube.com/embed/" + scope.v + "?rel=0&autoplay=1"
					});

					element.empty();
					element.append(iframe);
				});
			}
		}
	}]);
})(window, angular);
