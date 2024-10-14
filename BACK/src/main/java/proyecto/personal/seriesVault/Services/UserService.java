package proyecto.personal.seriesVault.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    public String authentication(String email, String password) throws Exception{
        try{
            User user = userRepository.findByEmail(email);
            if(user != null && user.getPassword().equals(password) && user.getEmail().equals(email)){
                return user.getId();
            }else{
                throw new Exception("User doesn't exist or invalid credentials.");
            }
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public boolean modifyUser(User user) throws Exception {
        try{
            User oldUser = this.userRepository.getUser(user.getId());
            if(oldUser != null){
                if(!user.getName().equals(oldUser.getName())){
                    oldUser.setName(user.getName());
                }
                if(!user.getUserName().equals(oldUser.getName())){
                    oldUser.setUserName(user.getUserName());
                }
                if(!user.getEmail().equals(oldUser.getEmail())){
                    oldUser.setEmail(user.getEmail());
                }
                if(!user.getPassword().equals(oldUser.getPassword())){
                    oldUser.setPassword(user.getPassword());
                }

                this.userRepository.modifyUser(user);
                return true;
            }
            return false;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
