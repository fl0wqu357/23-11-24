const users = [
    { nombre: "Leanne Graham", usuario: "Bret", email: "Sincere@april.biz" },
    { nombre: "Ervin Howell", usuario: "Antonette", email: "Shanna@melissa.tv" },
    { nombre: "Clementine Bauch", usuario: "Samantha", email: "Nathan@yesenia.net" },
    { nombre: "Patricia Lebsack", usuario: "Karianne", email: "Julianne.OConner@kory.org" },
    { nombre: "Chelsey Dietrich", usuario: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { nombre: "Mrs. Dennis Schulist", usuario: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { nombre: "Kurtis Weissnat", usuario: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { nombre: "Nicholas Runolfsdottir V", usuario: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { nombre: "Glenna Reichert", usuario: "Delphine", email: "Chaim_McDermott@dana.io" },
    { nombre: "Clementina DuBuque", usuario: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
  ];
  
  const userList = document.getElementById("user-list");
  
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <h3>nombre: ${user.nombre}</h3>
      <p>usuario: ${user.usuario}</p>
      <p>email: ${user.email}</p>
    `;
  
    userList.appendChild(card);
  });
  