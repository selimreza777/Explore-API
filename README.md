
### Learning
- How Internet work  
- HTTP, HTTPS  
- DNS  
- IP, IPV4, IPV6
- API
- JSON
- Fetch
- Conditional Rendering
- Network Debugger
- Async Await

**Explore-API**  
**Topic covered: JSON**  

**1 ---> JSON.stringify()**  
**2 ---> JSON.parse()**  


API শব্দটার ফুলফর্ম হলো Application Programming Interface।

👉 মানে হলো – একটা সফটওয়্যার বা ওয়েবসাইট আরেকটা সফটওয়্যার বা ওয়েবসাইটের সাথে কথা বলার জন্য যেই নিয়ম-কানুন বা “medium” ব্যবহার করে, সেটাকেই API বলে।

টেকনিক্যালি:

Client (তুমি/তোমার ওয়েবসাইট/app) একটা request পাঠায় API-তে।

API server-এর সাথে যোগাযোগ করে।

Server থেকে ডেটা এনে JSON / XML আকারে ফেরত দেয়।

Client সেই ডেটা ইউজারকে সুন্দর করে দেখায়।

কেন দরকার?

ডেটা শেয়ার করার জন্য

আলাদা সিস্টেমকে কানেক্ট করার জন্য

একবার বানানো backend কে অনেক app/website এ ব্যবহার করার জন্য

👉 সংক্ষেপে:
API হলো সেতু (bridge), যেটা Client আর Server এর মধ্যে যোগাযোগ করায়।

<!----- ----------------------------------- -->

JSON কী?

JSON = JavaScript Object Notation
👉 এটা হলো ডেটা আদান-প্রদানের ফরম্যাট (format for data exchange)।

অর্থাৎ, server থেকে client (তুমি) বা client থেকে server (server) – ডেটা আদান-প্রদানের জন্য JSON ব্যবহার হয়।

JSON দেখতে কেমন?

দেখতে অনেকটা JavaScript object এর মতো

কিন্তু আসলে এটা string

উদাহরণ:
{
  "name": "Selim",
  "id": 123,
  "isRegular": true
}

JSON এর নিয়ম

Key সবসময় double quotes (" ") এর মধ্যে থাকবে

{ "name": "Selim" }


Value হতে পারে —

String → "selim"

Number → 123

Boolean → true / false

Object → { "x": 1, "y": 2 }

Array → [1, 2, 3]

Null → null


JavaScript এর সাথে JSON এর সম্পর্ক

JavaScript object কে JSON এ রূপান্তর → JSON.stringify()

JSON কে আবার object এ রূপান্তর → JSON.parse()

কেন JSON ব্যবহার করা হয়?

হালকা (lightweight)

মানুষ এবং মেশিন দুইজনের জন্যই সহজবোধ্য

প্রায় সব প্রোগ্রামিং ভাষায় JSON সাপোর্ট করে

API ডেটা শেয়ার করার জন্য স্ট্যান্ডার্ড

<!-- ------------------------------- -->

fetch হলো JavaScript এর একটা built-in function, যেটা দিয়ে আমরা API থেকে data আনতে বা পাঠাতে পারি।

fetch কীভাবে কাজ করে?

👉 fetch একটা Promise রিটার্ন করে।
মানে request পাঠানো হয় server এ → server data ফেরত দেয় → তারপর আমরা সেটা .then() বা async/await দিয়ে হ্যান্ডেল করি।