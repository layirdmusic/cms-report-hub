import React from "react";

export default function Qoutes() {

    const currentDate = new Date()
    const currentDayNum = currentDate.getDate()

    const motivationalQuotes = [
        "Embrace the day with a smile, and let your light shine.",
        "Believe in yourself, for you are capable of amazing things.",
        "Seize the day, for it holds endless possibilities and opportunities.",
        "Every sunrise is a chance to start anew, make it count.",
        "Your journey begins with the first step, take it with purpose.",
        "Stay focused, stay determined, and success will surely follow.",
        "Rise and shine, today is your canvas, paint it boldly.",
        "Small steps lead to big achievements, keep moving forward.",
        "Chase your dreams, they know the way to a brighter future.",
        "You have the power to turn dreams into reality, believe it.",
        "Embrace challenges, they are stepping stones to your greatness.",
        "A positive mindset leads to positive outcomes, own your day.",
        "Each day is a gift, unwrap it with gratitude and purpose.",
        "You are stronger than you think, embrace your inner warrior.",
        "Face today with courage, for you are stronger than you know.",
        "Wake up with determination, go to bed with satisfaction.",
        "Embrace change, for it leads to growth and new beginnings.",
        "Today is a new chapter, write it with intention and passion.",
        "Success is the sum of small efforts repeated day in, day out.",
        "You are capable of achieving greatness, believe in yourself.",
        "Seize the day, for it holds the key to your dreams.",
        "The early bird catches the worm, and so can you.",
        "Every morning is a new chance to rewrite your story.",
        "Keep your head high, and your heart higher. You've got this.",
        "You are capable of amazing things, believe in your potential.",
        "Embrace each morning as a fresh start, it's a new canvas.",
        "Set your goals high, and don't stop until you reach them.",
        "Be the energy you want to attract. Shine bright today.",
        "You are the author of your own story, make it remarkable.",
        "The best way to predict the future is to create it.",
        "Believe in yourself, and you will be unstoppable."
      ];


      return(
        
        <p>"{motivationalQuotes[currentDayNum - 1]}"</p>
        
      )


}