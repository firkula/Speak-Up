// Speak up with Rust! 

// Defining the function 
fn speak_up() { 
    // print out our message 
    println!("Let your voice be heard!"); 
} 

// Making a structure 
struct SpeakUp { 
    // Declaring the properties 
    message: String, 
} 

// Implementing the structure 
impl SpeakUp { 
    // Defining a function 
    fn speak_up(&self) { 
        println!("{}", self.message); 
    } 
} 

// Main function 
fn main() { 
    // Calling the function 
    speak_up(); 

    // Initializing the structure 
    let speak_up_message = SpeakUp { 
        message: String::from("Your voice can make a difference!"), 
    }; 

    // Calling the structure function 
    speak_up_message.speak_up(); 
} 

// Defining a trait 
trait SpeakUpTrait { 
    
    // Declaring the functions 
    fn speak_up(&self); 
    fn set_message(&mut self, message: String); 
} 

// Implementing the trait 
impl SpeakUpTrait for SpeakUp { 
    fn speak_up(&self) { 
        println!("{}", self.message); 
    } 
    
    fn set_message(&mut self, message: String) { 
        self.message = message; 
    } 
} 

// Initializing the structure 
let mut speak_up_message = SpeakUp { 
    message: String::from("Speak Out!"), 
}; 

// Changing the message 
speak_up_message.set_message(String::from("Speak your truth!")); 

// Calling the function 
speak_up_message.speak_up(); 

// Defining an enum 
#[derive(Debug)] 
enum Voice { 
    Shout, 
    Whisper, 
    Speak, 
} 

// Main function 
fn main() { 
    // Calling the function 
    speak_up(); 

    // Initializing the structure 
    let speak_up_message = SpeakUp { 
        message: String::from("You have the power to make a difference!"), 
    }; 

    // Calling the structure function 
    speak_up_message.speak_up(); 

    // Initializing the enum 
    let voice = Voice::Whisper; 
    
    // Matching the enum 
    match voice { 
        // Print the message according to the enum 
        Voice::Shout => println!("Stand up and make your voice heard!"), 
        Voice::Whisper => 
            println!("Even a whisper can still be heard!"), 
        Voice::Speak => println!("Speak with courage and confidence!"), 
    } 
} 

// Making a thread 
use std::thread; 

// Main function 
fn main() { 
    // Calling the function 
    speak_up(); 

    // Initializing the structure 
    let speak_up_message = SpeakUp { 
        message: String::from("Don't be afraid to raise your voice!"), 
    }; 

    // Making a thread 
    let handle = thread::spawn(|| { 
        speak_up_message.speak_up(); 
    }); 

    // Initializing the enum 
    let voice = Voice::Speak; 
    
    // Matching the enum 
    match voice { 
        // Print the message according to the enum 
        Voice::Shout => println!("Have courage and courage will have you!"), 
        Voice::Whisper => 
            println!("Having a conversation takes two people!"), 
        Voice::Speak => println!("Speak your truth without fear!"), 
    } 
    
    // Joining the thread 
    handle.join().unwrap(); 
} 

// Making a module 
mod speak_up { 
    // Defining the function 
    pub fn speak_up() { 
        // print out our message 
        println!("Your words can create change!"); 
    } 
    
    // Making a structure 
    pub struct SpeakUp { 
        // Declaring the properties 
        message: String, 
    } 
    
    // Implementing the structure 
    impl SpeakUp { 
        // Defining a function 
        pub fn speak_up(&self) { 
            println!("{}", self.message); 
        } 
    } 
} 

// Main function 
fn main() { 
    // Calling the module function 
    speak_up::speak_up(); 

    // Initializing the structure 
    let speak_up_message = speak_up::SpeakUp { 
        message: String::from("Never be silenced!"), 
    }; 

    // Calling the structure function 
    speak_up_message.speak_up(); 

    // Initializing the enum 
    let voice = Voice::Shout; 
    
    // Matching the enum 
    match voice { 
        // Print the message according to the enum 
        Voice::Shout => println!("Shout it from the rooftops!"), 
        Voice::Whisper => 
            println!("Whispering can be powerful too!"), 
        Voice::Speak => println!("Speak with clarity and conviction!"), 
    } 
}