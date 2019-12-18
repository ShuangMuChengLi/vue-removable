let directive = {
  // 指令的定义
  bind: function (el, binding, vnode, oldVnode) {
    let keydownBtn = binding.value && el.querySelector(binding.value) || el;
    let startPosition = {
      x: 0,
      y: 0
    };
    let movePosition = {
      x: 0,
      y: 0
    };
    let position = {
      top: 0,
      left: 0
    };
    let isMoving = false;
    function mousemoveFn(e){
      if(!isMoving)return;

      movePosition = {
        x: position.left + e.x - startPosition.x,
        y: position.top + e.y - startPosition.y,
      };
      el.style.left = movePosition.x + 'px';
      el.style.top = movePosition.y + 'px';
    }
    function mouseupFn(e){
      isMoving = false;
      document.removeEventListener('mousemove', mousemoveFn);
      document.removeEventListener('mouseup', mouseupFn);
    }
    function mousedownFn(e){
      startPosition = {
        x: e.x,
        y: e.y
      };
      position = {
        top: el.offsetTop,
        left: el.offsetLeft
      };
      let positionType = getComputedStyle(el).position;
      if(positionType === 'static'){
        el.style.position = 'absolute';
      }
      isMoving = true;
      document.addEventListener('mousemove', mousemoveFn);
      document.addEventListener('mouseup', mouseupFn);
    }
    keydownBtn.addEventListener('mousedown' ,mousedownFn );

  }
};

const plugin = {
  install: function(Vue) {
    Vue.directive('removable', directive);
  },
  directive: directive
};

export default plugin;
