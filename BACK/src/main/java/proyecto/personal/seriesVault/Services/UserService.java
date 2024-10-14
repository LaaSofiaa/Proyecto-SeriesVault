package proyecto.personal.seriesVault.Services;

import org.springframework.beans.factory.annotation.Autowired;
import proyecto.personal.seriesVault.Domain.User;
import proyecto.personal.seriesVault.Repositories.SerieRepository;
import proyecto.personal.seriesVault.Repositories.UserRepository;

public class UserService {
    private UserRepository userRepository;
    private SerieRepository serieRepository;


    @Autowired
    public UserService(SerieRepository serieRepository, UserRepository userRepository) {
        this.serieRepository = serieRepository;
        this.userRepository = userRepository;
    }

    public void createUser(User user) throws Exception {
        try{
            if(userRepository.findByUserName(user.getUserName())!=null){
                throw new Exception("The username has already been used!");
            }
            if(userRepository.findByEmail(user.getEmail())!=null) {
                throw new Exception("The email has already been used!");
            }
            this.userRepository.createUser(user);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public boolean deleteUser(String userId) throws Exception {
        try{
            User user = this.userRepository.getUser(userId);
            if(user!=null){
                this.userRepository.deleteUser(user);
                return true;
            }
            return false;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

}
