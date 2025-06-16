console.log("JavaScript loaded!");
 const content = {
      "1972": {
        title: "PONG",
        description: "The first commercially successful video game that started the arcade revolution."
      },
      "1974": {
        title: "MAZE WARS",
        description: "Maze Wars introduced the first-person shooter by taking players into passages made from wire-frame graphics"
      },
      "1977": {
        title: "ATARI 2600",
        description: "Atari releases the video computer system known as Atari 2600. It featured a joystick, interchangeable cartridges and games in colour."
      },
      "1991": {
        title: "Street Fighter II",
        description: "Popularized competitive fighting games."
      },
      "1995": {
        title: "PlayStation Era Begins",
        description: "Sony enters gaming with the PlayStation."
      },
      "2007": {
        title: "Mobile Gaming Rise",
        description: "Smartphones begin changing how games are played."
      }
    };

    document.querySelectorAll('.year').forEach(el => {
      el.addEventListener('click', () => {
        const year = el.getAttribute('data-year');

        // Blink effect
        el.classList.add('blink');
        setTimeout(() => el.classList.remove('blink'), 500);

        // Update content
        const game = content[year];
        document.getElementById('gameContent').innerHTML = `
          <h2>${year} - ${game.title}</h2>
          <p>${game.description}</p>
        `;
      });
    });

