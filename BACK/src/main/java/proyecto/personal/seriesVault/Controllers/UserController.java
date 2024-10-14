package proyecto.personal.seriesVault.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import proyecto.personal.seriesVault.Services.UserService;

@RestController
@RequestMapping("/seriesVault")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins ="*")
    @DeleteMapping("/deleteUser")
    public ResponseEntity<?>deleteUser(String userId){
        try{
            if(userService.deleteUser(userId)){
                return new ResponseEntity<>("User deleted successfully!", HttpStatus.OK);
            }else{
                return new ResponseEntity<>("User doesn't exist!", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
