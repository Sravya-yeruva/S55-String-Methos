import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>String Methods</h1>
      <button
        type="button"
        onClick={() => {
          let news = "Gukesh won the Gold medal in olympics";
          console.log(news.toUpperCase());
        }}
      >
        1.String toUpperCase()
      </button>

      <button
        type="button"
        onClick={() => {
          let news = "Gukesh won the Gold medal in olympics";
          console.log(news.toLowerCase());
        }}
      >
        2.String toLowerCase()
      </button>

      <button
        type="button"
        onClick={() => {
          let name = "sravya";
          let surnames = "yeruva";
          let fullname = name.concat(" ", surnames);
          console.log(fullname);
        }}
      >
        3.String Concat()
      </button>
      <button
        type="button"
        onClick={() => {
          let fruits = "Apple and Banana";
          console.log(`..>${fruits.trim()}<..`);
        }}
      >
        4.String trim()
      </button>
      <button
        type="button"
        onClick={() => {
          let player = "MS.Dhoni";
          console.log(`..>${player.trimStart()}<..`);
        }}
      >
        5.String trimStart()
      </button>
      <button
        type="button"
        onClick={() => {
          let chocolate = "Dairy Milk";
          console.log(`..>${chocolate.trimEnd()}<..`);
        }}
      >
        6.String trimEnd()
      </button>
      <button
        type="button"
        onClick={() => {
          let name = "mamatha";
          console.log(name.padStart(20, "yeruva"));
        }}
      >
        7.String padStart()
      </button>
      <button
        type="button"
        onClick={() => {
          let surname = "reddy";
          console.log(surname.padEnd(10, "Sravi"));
        }}
      >
        8.String padEnd()
      </button>
      <button
        type="button"
        onClick={() => {
          let chocky = "five star🌟";
          console.log(chocky.repeat(5));
        }}
      >
        9.repeat()
      </button>
      <button
        type="button"
        onClick={() => {
          let prayer =
            "India is my country all indians are my brothers and sisters, India is my fav country.";
          console.log(prayer.replace("India", "Bharath"));
        }}
      >
        10.String replace()
      </button>
      <button
        type="button"
        onClick={() => {
          let prayer =
            "India is my country all indians are my brothers and sisters, India is my fav country.";
          console.log(prayer.replaceAll("India", "Bharath"));
        }}
      >
        11.String replaceAll()
      </button>

      <button
        type="button"
        onClick={() => {
          let prayer =
            "India is my country all indians are my brothers and sisters, India is my fav country.";
          console.log(prayer.split("a"));
          console.log(prayer);
        }}
      >
        12.String Split()
      </button>

      <button
        type="button"
        onClick={() => {
          let fruit = "Banana";
          console.log(fruit.length);
        }}
      >
        13.String Length
      </button>

      <button
        type="button"
        onClick={() => {
          let name = "reddy";
          console.log(name.at(1));
        }}
      >
        14.String at()
      </button>
      <button
        type="button"
        onClick={() => {
          let name = "reddy";
          console.log(name.charAt(3));
          console.log(name[0]);
        }}
      >
        15.StringCharAt()
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets);
          console.log(alphabets.slice(3, 25));
        }}
      >
        16.String Slice()
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.substring(2, 10));
        }}
      >
        17.String SubString()
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.substr(0, 5));
        }}
      >
        18.String SubStr
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(String.fromCharCode(66));
          for (let i = 3077; i < 3444; i++) {
            console.log(String.fromCharCode(i));
          }
        }}
      >
        19.String fromcharcode()
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.charCodeAt(10));
        }}
      >
        20.charcodeAt()
      </button>
      <button
        type="button"
        onClick={() => {
          let FullName = "Miss.Kalpana Chawla";
          console.log(FullName.startsWith("Miss"));
          console.log(FullName.startsWith("Kalpana"));
        }}
      >
        21.Starts with()
      </button>
      <button
        type="button"
        onClick={() => {
          let news = "Gukesh Won gold medal in olympics";
          console.log(news.endsWith("olympics"));
          console.log(news.endsWith("Gukesh"));
        }}
      >
        22.Ends with()
      </button>
      <button
        type="button"
        onClick={() => {
          let sentence = "oh my God";
          console.log(sentence.includes("God"));
          console.group(sentence.includes("arey"));
        }}
      >
        23.includes()
      </button>
      <button
        type="button"
        onClick={() => {
          let name = "Jai shri ram Jai shri ram";
          console.log(name.indexOf("ram"));
          console.log(name.indexOf("s"));
        }}
      >
        24.indexof()
      </button>
      <button
        type="button"
        onClick={() => {
          let name = "Jai shri ram Jai shri ram";
          console.log(name.lastIndexOf("ram"));
          console.log(name.lastIndexOf("i"));
        }}
      >
        25.Lastindexof()
      </button>
      <button
        type="button"
        onClick={() => {
          let name = "Jai shri ram Jai shri ram";
          console.log(name.search("Jai"));
          console.log(name.search(/shri/i));
        }}
      >
        26.Search()
      </button>
    </div>
  );
}

export default App;
