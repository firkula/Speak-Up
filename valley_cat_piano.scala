// This program is written in Scala and is intended to speak up in a variety of ways

object SpeakUp {
  def main(args: Array[String]): Unit = {
    // Welcome users to the program
    println("Welcome to Speak Up! Let’s get started speaking out!")

    // Ask users how they would like to speak
    println("What type of speaking would you like to do today?")
    println("1. Social Media Post")
    println("2. Op-Ed")
    println("3. Speech")
    println("4. Protest Sign")

    // Get user input on speaking type
    val input = readInt()

    // Set up a switch with cases for each type of speaking
    input match {
      case 1 =>
        println("Ready to post your thoughts online? Write below!")
        val postMessage = readLine()
        println("Your post was: " + postMessage)
        println("Now hit enter to post it to your followers!")

      case 2 =>
        println("Ready to write an opinion article? Write below!")
        val opEdMessage = readLine()
        println("Your op-ed was: " + opEdMessage)
        println("Now hit enter to submit it to the newspaper!")

      case 3 =>
        println("Ready to give a speech? Write your speech below!")
        val speechMessage = readLine()
        println("Your speech was: " + speechMessage)
        println("Now hit enter to give it and make sure your voice is heard!")

      case 4 =>
        println("Ready to make a sign for your protest? Write your message below!")
        val protestMessage = readLine()
        println("Your protest sign reads: " + protestMessage)
        println("Now hit enter to make sure your message is seen!")

      case _ =>
        println("Invalid input. Please try again.")

    } // End program 
  }
}