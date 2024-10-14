package proyecto.personal.seriesVault.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyecto.personal.seriesVault.Domain.User;
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
                return new ResponseEntity<>("User doesn't exist!", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Error" + e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins ="*")
    @PutMapping("/modifyUser")
    public ResponseEntity<?>modifyUser( @RequestBody User user){
        try{
            if(userService.modifyUser(user)){
                return new ResponseEntity<>("User modified successfully!",HttpStatus.OK);
            }else{
            return new ResponseEntity<>("User doesn't exist!", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return new ResponseEntity<>("Error"+ e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}


