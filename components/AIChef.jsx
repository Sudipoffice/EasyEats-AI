import React, { useState } from "react";
import axios from "axios";
import brocolli from "../src/assets/images/brocolli.png"
import burger from "../src/assets/images/burger.png"
import carrot from "../src/assets/images/carrot.png"
import chef from "../src/assets/images/chef.png"
import kebab from "../src/assets/images/kebab.png"
import ramen from "../src/assets/images/ramen.png"

const AIChef = () => {
  const [answer, setAnswer] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  // const [ingredientSuggestion, setIngredientSuggestion] = useState([]);`
  const aiApiKey = import.meta.env.VITE_AI_KEY1;
  const [isEgVisible, setIsEgVisible] = useState(true);


  async function generateAnswer() {
    setIsEgVisible(!isEgVisible)
    setIngredientInput("");
    setAnswer(
      <div className=" text-2xl sm:text-6xl h-screen font-extrabold text-white flex justify-center pt-12 font-windSong">
        Loading...
      </div>
    );
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${aiApiKey}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: ingredientInput }] }],
        },
      });
      let resultResponse =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      resultResponse = resultResponse.replace(/\*/g, "");
      setAnswer(resultResponse);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("An error occurred. Please try again.");
    }
  }

  return (
    <div id="AIChef" className="bg-orange-50 min-h-screen h-fit pt-8 sm:pt-16 " style={{
      background: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"
    }}>
      <header className="text-3xl sm:text-6xl font-lexend text-red-50 font-bold flex justify-center items-center p-12">
      <img className="aspect-square w-12 sm:w-20" src={chef} alt="chef-hat"/>
        AI-Chef  
      </header>
      <div className="flex flex-col justify-center items-center pt-2 sm:pt-12">
        <div className="relative items-center w-4/5 sm:w-2/5 ">
        <img className="aspect-square w-12 sm:w-20 absolute top-8 sm:top-10 left-20 sm:left-40 z-10" src={brocolli} alt=""/>
        <img className="aspect-square w-12 sm:w-20 absolute -top-10 sm:-top-20 left-0 z-10" src={burger} alt=""/>
        <img className="aspect-square w-12 sm:w-20 absolute top-8 right-16 sm:right-28 z-10" src={carrot} alt=""/>
        <img className="aspect-square w-12 sm:w-20 absolute -top-12 sm:-top-16 -right-6 sm:-right-12 z-10" src={kebab} alt=""/>
        <img className=" w-12 sm:w-20 absolute -top-20 sm:-top-28 left-40 sm:left-96 z-10" src={ramen} alt=""/>
          <textarea
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                generateAnswer();
              }
            }}
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            placeholder="Have a query in mind? Search it..."
            className="w-full items-center rounded-full p-3 sm:p-4 pr-0 sm:pr-32 outline-none text-xs sm:text-lg "
            rows="1"
            style={{
              resize: "none", 
              lineHeight: "1.2", 
            }}
          ></textarea>
          <button
            className=" bg-red-400 text-white px-2 sm:px-4 text-sm sm:text-lg  hover:bg-red-500 font-bold font-lexend rounded-full absolute right-1 top-1 p-1 sm:p-2.5"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                generateAnswer();
              }
            }}
            onClick={generateAnswer}
          >
            Generate
          </button>
        </div>
        {/* Example Prompts */}
        {isEgVisible && <div className="w-5/6 sm:w-2/5 h-fit my-8 sm:my-20 px-4 p-2 bg-[#2b2b2b3a] rounded-[2rem] text-sm sm:text-xl font-lexend">
        <h3 className="m-4 text-white font-bold">Example prompts:</h3>
        <div className="grid grid-cols-2 gap-2">
          <span className="bg-[#e9e9e939] rounded-3xl p-2 text-white px-4 w-fit col-span-2">Healthy recipe with Chicken, garlic and tomatoes</span>
          <span className="bg-[#e9e9e939] rounded-3xl p-2 text-white px-4 w-fit col-span-2">Eggplant, feta cheese and olives tasty recipe</span>
          <span className="bg-[#e9e9e939] rounded-3xl p-2 text-white px-4 w-fit col-span-1">High protein recipe suggestions</span>
          <span className="bg-[#e9e9e939] rounded-3xl p-2 text-white px-4 w-fit col-span-1">Pasta, mushrooms and spinach</span>
          <span className="bg-[#e9e9e939] rounded-3xl p-2 text-white px-4 w-fit col-span-2">Vegan recipes with avocados, eggs and quinoa</span>
        </div>
        </div>}

        {/* Answer */}
        <pre className=" p-4 sm:p-12 pt-10 sm:pt-14  h-fit text-wrap w-5/6 sm:w-2/5  font-lexend text-sm sm:text-xl text-center text-white">
          {answer}
        </pre>
      </div>
    </div>
  );
};

export default AIChef;
