const createRipple = (event, color = "rgba(0, 0, 0, 0.2)") => {
  const button = event.currentTarget;

  const ripple = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.pageX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.pageY - button.offsetTop - radius}px`;
  ripple.style.backgroundColor = color;
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);

  const style = document.createElement("style");

  style.textContent = `
  .ripple-button {
    position: relative;
    overflow: hidden;
  }

  .ripple-button .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

  document.head.appendChild(style);
};

export default createRipple;
