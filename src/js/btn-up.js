const btnUp = {
      el: document.querySelector('.btn-up'),
      scrolling: false,
      show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
          this.el.classList.remove('btn-up_hide');
          this.el.classList.add('btn-up_hiding');
          window.setTimeout(() => {
            this.el.classList.remove('btn-up_hiding');
          }, 300);
        }
      },
      hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
          this.el.classList.add('btn-up_hiding');
          window.setTimeout(() => {
            this.el.classList.add('btn-up_hide');
            this.el.classList.remove('btn-up_hiding');
          }, 300);
        }
      },
      addEventListener() {
        // при прокручувані вікна (window)
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          if (this.scrolling && scrollY > 0) {
            return;
          }
          this.scrolling = false;
          // якщо користувач прокрутив сторінку більш ніж на 400px
          if (scrollY > 400) {
            //  кнопка .btn-up видима
            this.show();
          } else {
            // іначе ховаємо кнопку .btn-up
            this.hide();
          }
        });
        // при натиснені на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
          this.scrolling = true;
          this.hide();
          // переместити в верхнюю частину сторінки
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }

    btnUp.addEventListener();