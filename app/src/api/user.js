const createUser = async (idString, password, name, email) => {
  const response = await fetch("/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idString,
      password,
      name,
      email,
    }),
  });

  return response;
};

export { createUser };
