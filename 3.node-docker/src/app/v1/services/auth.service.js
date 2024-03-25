class AuthService {
  async pub() {
    const data = {
      id: "id",
      name: "name",
    };
    return data;
  }
}

module.exports = new AuthService();
