exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Alex", password: "password", department: "Engineering" },
        { username: "Marie", password: "password", department: "Finance" },
        { username: "Tom", password: "password", department: "Sales" },
        { username: "Jess", password: "password", department: "Operations" },
      ]);
    });
};
