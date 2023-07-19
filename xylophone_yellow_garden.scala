import scala.collection.mutable

object SpeakUp {
  def main(args: Array[String]): Unit = {
    println("Speak Up!")
    val voices = mutable.Map[String, String]()
 
    // Add voices to the map
    voices += ("John" -> "Justice for All")
    voices += ("Sally" -> "Equal Rights for Everyone")
    voices += ("Sarah" -> "End Systemic Oppression")
    voices += ("Paul" -> "Protect Our Environment")
    voices += ("James" -> "No More Discrimination")
    
    // Loop through and print out each person's message
    voices.foreach { case (name, message) =>    
      println(s"$name says: $message")
    }
    
    // Get input from the user
    println("\nWhat do you want to say?")
    val userMessage = scala.io.StdIn.readLine()
    
    // Add the user's message to the map
    voices += ("You" -> userMessage)
    
    // Print out the voices with the user's message included
    println("\nVoices of Change:")
    voices.foreach { case (name, message) =>    
      println(s"$name says: $message")
    }   
  }
}