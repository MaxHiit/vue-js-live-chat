import gsap from 'gsap';

const useAnimation = () => {
	// LETTER ANIMATION
	const letterAnimationBeforeOnEnter = (el) => {
		el.style.opacity = '0';
	};

	const letterAnimationOnEnter = (el, done) => {
		gsap.to(el, {
			keyframes: {
				scale: [0, 1.2, 1],
				opacity: [0, 0.5, 1],
				ease: 'Back.easeOut'
			},
			delay: el.dataset.index * 0.15,
			duration: 2.5
		});
	};

	// FORM ANIMATION
	const formAnimationBeforeEnter = (el) => {
		el.style.opacity = 0;
		el.style.transform = 'translateX(100px)';
	};

	const formAnimationEnter = (el, done) => {
		gsap.to(el, {
			opacity: 1,
			x: 0,
			duration: 0.4,
			onComplete: done
		});
	};

	return {
		letterAnimationBeforeOnEnter,
		letterAnimationOnEnter,
		formAnimationBeforeEnter,
		formAnimationEnter
	};
};

export default useAnimation;
