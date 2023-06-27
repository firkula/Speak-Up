#Create a function to Speak Up 

speak_up <- function(statement= NA) {
  if(is.na(statement)){
    stop("Please provide a statement to speak up!")
  } 
  print(paste("I am speaking up! My statement is:", statement))
}

#Create a function to find and print supporters 

find_supporters <- function(supporters= NA) {
  if(is.na(supporters)){
    stop("Please provide a list of supporters!") 
  }
  for(i in supporters){
    print(paste("I am supported by:", i))
  }
}

#Create a function to Send Thank You Note

send_note <- function(recipient= NA, message="Thank you for supporting me!") {
  if(is.na(recipient)) {
    stop("Please provide the recipient of your note!")
  }
  print(paste("Thank you", recipient,"for supporting me! Your message is:", message))
}

#Create a function to Generate Promotion 

promote <- function(url=NA, message="Sign up here to join me in speaking up!") {
  if(is.na(url)) {
    stop("Please provide a valid URL!")
  }
  print(paste("Let's promote this together! Here's the link:", url, "along with the message:", message))
}

#Create a function to Set Goal 

set_goal <- function(goal = NA) {
  if(is.na(goal)){
    stop("Please provide a goal to set!")
  }
  print(paste("I am setting the goal:", goal))
}

#Create a function to Celebrate Progress 

celebrate <- function(milestone= NA) {
  if(is.na(milestone)){
    stop("Please provide the milestone achieved!")
  }
  print(paste("I am celebrating progress! My milestone is:", milestone))
}

#Create a function to Spread Awareness 

spread_awareness <- function(medium= NA, message="Join me to make a difference!") {
  if(is.na(medium)){
    stop("Please provide a medium to spread awareness!")
  }
  print(paste("I am spreading awareness on", medium,"with the message:", message))
}

#Create a function to Support Others 

support_others <- function(supportee= NA, support="We're all in this together!") {
  if(is.na(supportee)){
    stop("Please provide the supportee!")
  }
  print(paste("I am supporting", supportee, "with the message:", support))
}

#Create a function to Find a Platform 

find_platform <- function(website= NA) {
  if(is.na(website)){
    stop("Please provide a website to join!")
  }
  print(paste("I have found a platform:", website))
}

#Create a function to Share Knowledge 

share_knowledge <- function(topic= NA, information="These are the facts!") {
  if(is.na(topic)){
    stop("Please provide a topic to discuss!")
  }
  print(paste("I will share knowledge on", topic, "including:", information))
}

#Create a function to Seek Out Advice 

seek_advice <- function(role_model= NA) {
  if(is.na(role_model)){
    stop("Please provide a role model!")
  }
  print(paste("I am seeking advice from:", role_model))
}

#Create a function to Take Action 

take_action <- function(action= NA, goal="Making our voices heard!") {
  if(is.na(action)){
    stop("Please provide an action to take!")
  }
  print(paste("I am taking action:", action, "toward the goal of:", goal))
}

#Create a function to Join a Community 

join_community <- function(community= NA) {
  if(is.na(community)){
    stop("Please provide a community to join!")
  }
  print(paste("I am joining the", community, "community!"))
}

#Create a function to Lead a Movement

lead_movement <- function(movement= NA) {
  if(is.na(movement)){
    stop("Please provide a movement to lead!")
  }
  print(paste("I am leading the", movement, "movement!"))
}

#Create a function to Establish Connections 

establish_connections <- function(connection=NA) {
  if(is.na(connection)){
    stop("Please provide a connection to establish!")
  }
  print(paste("I am establishing a connection with:", connection))
}

#Create a function to Reach Out 

reach_out <- function(recipient= NA) {
  if(is.na(recipient)){
    stop("Please provide the recipient of your note!") 
  }
  print(paste("I am reaching out to:", recipient))
}

#Create a function to Sign a Petition 

sign_petition <- function(url= NA, message="Help us make a difference!") {
  if(is.na(url)) {
    stop("Please provide a valid URL!")
  }
  print(paste("I am signing the petition at:", url, "to help us make a difference!", message))
}

#Create a function to Raise Funds 

raise_funds <- function(amount= NA, purpose="To support our cause!") {
  if(is.na(amount)){
    stop("Please provide an amount to raise!")
  }
  print(paste("I am raising", amount, "with the purpose of:", purpose))
}