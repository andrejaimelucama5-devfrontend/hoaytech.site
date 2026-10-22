function CliqueMenu() {
      const nav = document.getElementById('nav');
      nav.classList.toggle('ativo');
    }

    // Fecha o menu quando clica num link
    document.querySelectorAll('.a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('ativo');
      });
    });