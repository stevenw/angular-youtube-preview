'use strict';

(function (window, angular, undefined) {
	angular.module('angularYoutubePreview', []).directive('youtubePreview', [function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<div></div>',
			scope: {
				uid: '@',
				frameKey: '@',
				playIcon: '@',
				width: '@',
				height: '@'
			},
			link: function (scope, element, attrs) {
				var preview = 'http://img.youtube.com/vi/' + scope.uid + '/' + scope.frameKey + '.jpg';
				var playImage = angular.element('<img>');

				element.css({
					width: scope.width + 'px',
					height: scope.height + 'px',
					position: 'relative',
					background: 'url(' + preview + ') no-repeat center',
					backgroundSize: 'cover',
					cursor: 'pointer'
				});

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

				element.bind('click', function () {
					var iframe = angular.element('<iframe></iframe>').attr({
						width: '100%',
						height: '100%',
						frameborder: 0,
						allowfullscreen: true,
						src: "http://www.youtube.com/embed/" + scope.uid + "?rel=0&autoplay=1"
					});

					element.empty();
					element.append(iframe);
				});
			}
		}
	}]);
})(window, angular, undefined);