package proyecto.personal.seriesVault.Repositories;

import proyecto.personal.seriesVault.Domain.User;

public interface UserRepository {
    User getUser(String userId);
    void deleteUser(User user);
    User findByUserName(String userName);
    User findByEmail(String email);
    void createUser(User user);
}
