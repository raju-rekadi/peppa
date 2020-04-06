$(document).ready(function(){

  // Admin new restaurant form
  $(".restaurant_btn").click(function(){
    $(".new_restaurant").validate({
      // errorPlacement: function(){
      //   return false;  // suppresses error message text
      // }
    });

    $("#restaurant_name").rules("add", {
      required:true,
        minlength:3,
        lettersonly: true,
         messages: {
              required: "Please enter name."
      }
    });

    $("#restaurant_email").rules("add", {
      required:true,
        laxEmail: true,
         messages: {
              required: "Please enter email."
      }
    });


    $("#restaurant_phone").rules("add", {
      required:true,
      numeric: true,
        minlength:10,
        maxlength:10,
         messages: {
              required: "Please enter mobile."
      }
    });

    $("#restaurant_pictures_attributes_0_image").rules("add", {
      required:true,
         messages: {
              required: "Please select image."
      }
    });

    $("#restaurant_locations_attributes_0_street").rules("add", {
      required:true,
       
         messages: {
              required: "Please enter street."
      }
    });
    $("#restaurant_locations_attributes_0_city").rules("add", {
      required:true,
         messages: {
              required: "Please enter city."
      }
    });
   
  
    $("#restaurant_locations_attributes_0_state").rules("add", {
      required:true,
         messages: {
              required: "Please enter state."
      }
    });

    $("#restaurant_locations_attributes_0_pincode").rules("add", {
      required:true,
      numeric: true,
       minlength:6,
        maxlength:6,
         messages: {
              required: "Please enter pincode."
      }
    });

    $("#restaurant_locations_attributes_0_latitude").rules("add", {
      required:true,
        float: true,
         messages: {
              required: "Please enter latitude."
      }
    });

    $("#restaurant_locations_attributes_0_longitude").rules("add", {
      required:true,
        float: true,
         messages: {
              required: "Please enter longitude."
      }
    });
   

  })
  // End-----Admin new restaurant form


  // Admin Restaurant edit form validation
  $(".restaurant_update").click(function(){
      $(".edit_restaurant").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });
  
      $("#restaurant_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });

      $("#restaurant_email").rules("add", {
        required:true,
          laxEmail: true,
           messages: {
                required: "Please enter email."
        }
      });

      $("#restaurant_phone").rules("add", {
        required:true,
        numeric: true,
          minlength:10,
          maxlength:10,
          
           messages: {
                required: "Please enter mobile."
        }
      });

      $("#restaurant_pictures_attributes_0_image").rules("add", {
        
           messages: {
                required: "Please select image."
        }
      });

      $("#restaurant_locations_attributes_0_street").rules("add", {
        required:true,
         
           messages: {
                required: "Please enter street."
        }
      });
      $("#restaurant_locations_attributes_0_city").rules("add", {
        required:true,
           messages: {
                required: "Please enter city."
        }
      });
     
    
      $("#restaurant_locations_attributes_0_state").rules("add", {
        required:true,
           messages: {
                required: "Please enter state."
        }
      });

      $("#restaurant_locations_attributes_0_pincode").rules("add", {
        required:true,
        numeric: true,
         minlength:6,
          maxlength:6,
           messages: {
                required: "Please enter pincode."
        }
      });

    

      $("#restaurant_locations_attributes_0_latitude").rules("add", {
        required:true,
          float:true,
           messages: {
                required: "Please enter latitude."
        }
      });

      $("#restaurant_locations_attributes_0_longitude").rules("add", {
        required:true,
        float:true,
        
           messages: {
                required: "Please enter longitude."
        }
      });
     

    })
  //---End  Admin Restaurant edit form validation

  // Admin/dish/new
  $(".dish_new").click(function(){
  
      $(".new_dish").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });

      $("#dish_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });


      $("#dish_price").rules("add", {
        required:true,
        numeric: true,
          maxlength:10,
          
           messages: {
                required: "Please enter price."
        }
      });

      $("#dish_pictures_attributes_0_image").rules("add", {
        required:true,
           messages: {
                required: "Please select image."
        }
      });

      $("#dish_category_id").rules("add", {
        required:true,
         
           messages: {
                required: "Please select category."
        }
      });
     
    })
    // End----- Admin/dish/new ----------



  // -----Admin/dish/edit ----------
  $(".dish_edit").click(function(){
      $(".edit_dish").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });

      $("#dish_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });


      $("#dish_price").rules("add", {
        required:true,
        numeric: true,
          maxlength:10,
          
           messages: {
                required: "Please enter price."
        }
      });

      $("#dish_category_id").rules("add", {
        required:true,
           messages: {
                required: "Please select category."
        }
      }); 

    })
    // End-----ADmin/dish/edit ----------

    // Preview image Restaurant
    var preview = $(".upload-preview img");

    $(".file").change(function(event){
       var input = $(event.currentTarget);
       var file = input[0].files[0];
       var reader = new FileReader();
       reader.onload = function(e){
           image_base64 = e.target.result;
           preview.attr("src", image_base64);
       };
       reader.readAsDataURL(file);
       // Edit form
       $('.db_image').css({"display":"none"});
       $('.load_image').css({"display":"block"});
       
       // Restaurant New form
       $('#file_column').addClass('col-md-5');
       $('#file_column').removeClass('col-md-6');
       $('#image_column').css({"display":"block"});


       // Dish New form
       $('#dish_image_column').css({"display":"block"})        
    });
  


      // // -----------Onload state & cities dropdowns for admin/restaurant/new and edit forms
    $(function(){
      var states = {
        "India": { 
          "Andhra Pradesh":["Adoni","Amalapuram","Anakapalle","Anantapur","Bapatla","Bheemunipatnam","Bhimavaram","Bobbili","Chilakaluripet","Chirala","Chittoor","Dharmavaram","Eluru","Gooty","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Jaggaiahpet","Jammalamadugu","Kadapa","Kadiri","Kakinada","Kandukur","Kavali","Kovvur","Kurnool","Macherla","Machilipatnam","Madanapalle","Mandapeta","Markapur","Nagari","Naidupet","Nandyal","Narasapuram","Narasaraopet","Narsipatnam","Nellore","Nidadavole","Nuzvid","Ongole","Palacole","Palasa Kasibugga","Parvathipuram","Pedana","Peddapuram","Pithapuram","Ponnur","Proddatur","Punganur","Puttur","Rajahmundry","Rajam","Rajampet","Ramachandrapuram","Rayachoti","Rayadurg","Renigunta","Repalle","Salur","Samalkot","Sattenapalle","Srikakulam","Srikalahasti","Srisailam Project (Right Flank Colony) Township","Sullurpeta","Tadepalligudem","Tadpatri","Tanuku","Tenali","Tirupati","Tiruvuru","Tuni","Uravakonda","Venkatagiri","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram","Yemmiganur","Yerraguntla"],
          "Arunachal Pradesh":["Naharlagun","Pasighat"],
          "Assam":["Barpeta","Bongaigaon City","Dhubri","Dibrugarh","Diphu","Goalpara","Guwahati","Jorhat","Karimganj","Lanka","Lumding","Mangaldoi","Mankachar","Margherita","Mariani","Marigaon","Nagaon","Nalbari","North Lakhimpur","Rangia","Sibsagar","Silapathar","Silchar","Tezpur","Tinsukia"],
          "Bihar":["Araria","Arrah","Arwal","Asarganj","Aurangabad","Bagaha","Barh","Begusarai","Bettiah","Bhabua","Bhagalpur","Buxar","Chhapra","Darbhanga","Dehri-on-Sone","Dumraon","Forbesganj","Gaya","Gopalganj","Hajipur","Jamalpur","Jamui","Jehanabad","Katihar","Kishanganj","Lakhisarai","Lalganj","Madhepura","Madhubani","Maharajganj","Mahnar Bazar","Makhdumpur","Maner","Manihari","Marhaura","Masaurhi","Mirganj","Mokameh","Motihari","Motipur","Munger","Murliganj","Muzaffarpur","Narkatiaganj","Naugachhia","Nawada","Nokha","Patna*","Piro","Purnia","Rafiganj","Rajgir","Ramnagar","Raxaul Bazar","Revelganj","Rosera","Saharsa","Samastipur","Sasaram","Sheikhpura","Sheohar","Sherghati","Silao","Sitamarhi","Siwan","Sonepur","Sugauli","Sultanganj","Supaul","Warisaliganj"],
          "Chandigarh":["Chandigarh*"],
          "Chhattisgarh":["Ambikapur","Bhatapara","Bhilai Nagar","Bilaspur","Chirmiri","Dalli-Rajhara","Dhamtari","Durg","Jagdalpur","Korba","Mahasamund","Manendragarh","Mungeli","Naila Janjgir","Raigarh","Raipur*","Rajnandgaon","Sakti","Tilda Newra"],
          "Dadra and Nagar Haveli":["Silvassa*"],
          "Delhi":["Delhi","New Delhi*"],
          "Goa":["Mapusa","Margao","Marmagao","Panaji*"],"Gujarat":["Adalaj","Ahmedabad","Amreli","Anand","Anjar","Ankleshwar","Bharuch","Bhavnagar","Bhuj","Chhapra","Deesa","Dhoraji","Godhra","Jamnagar","Kadi","Kapadvanj","Keshod","Khambhat","Lathi","Limbdi","Lunawada","Mahesana","Mahuva","Manavadar","Mandvi","Mangrol","Mansa","Mahemdabad","Modasa","Morvi","Nadiad","Navsari","Padra","Palanpur","Palitana","Pardi","Patan","Petlad","Porbandar","Radhanpur","Rajkot","Rajpipla","Rajula","Ranavav","Rapar","Salaya","Sanand","Savarkundla","Sidhpur","Sihor","Songadh","Surat","Talaja","Thangadh","Tharad","Umbergaon","Umreth","Una","Unjha","Upleta","Vadnagar","Vadodara","Valsad","Vapi","Vapi","Veraval","Vijapur","Viramgam","Visnagar","Vyara","Wadhwan","Wankaner"],"Haryana":["Bahadurgarh","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gohana","Gurgaon","Hansi","Hisar","Jind","Kaithal","Karnal","Ladwa","Mahendragarh","Mandi Dabwali","Narnaul","Narwana","Palwal","Panchkula","Panipat","Pehowa","Pinjore","Rania","Ratia","Rewari","Rohtak","Safidon","Samalkha","Sarsod","Shahbad","Sirsa","Sohna","Sonipat","Taraori","Thanesar","Tohana","Yamunanagar"],"Himachal Pradesh":["Mandi","Nahan","Palampur","Shimla*","Solan","Sundarnagar"],"Jammu and Kashmir":["Anantnag","Baramula","Jammu","Kathua","Punch","Rajauri","Sopore","Srinagar*","Udhampur"],"Jharkhand":["Adityapur","Bokaro Steel City","Chaibasa","Chatra","Chirkunda","Medininagar (Daltonganj)","Deoghar","Dhanbad","Dumka","Giridih","Gumia","Hazaribag","Jamshedpur","Jhumri Tilaiya","Lohardaga","Madhupur","Mihijam","Musabani","Pakaur","Patratu","Phusro","Ramgarh","Ranchi*","Sahibganj","Saunda","Simdega","Tenu dam-cum-Kathhara"],"Karnataka":["Adyar","Afzalpur","Arsikere","Athni","Bengaluru","Belagavi","Ballari","Chikkamagaluru","Davanagere","Gokak","Hubli-Dharwad","Karwar","Kolar","Lakshmeshwar","Lingsugur","Maddur","Madhugiri","Madikeri","Magadi","Mahalingapura","Malavalli","Malur","Mandya","Mangaluru","Manvi","Mudalagi","Mudabidri","Muddebihal","Mudhol","Mulbagal","Mundargi","Nanjangud","Nargund","Navalgund","Nelamangala","Pavagada","Piriyapatna","Puttur","Rabkavi Banhatti","Raayachuru","Ranebennuru","Ramanagaram","Ramdurg","Ranibennur","Robertson Pet","Ron","Sadalagi","Sagara","Sakaleshapura","Sindagi","Sanduru","Sankeshwara","Saundatti-Yellamma","Savanur","Sedam","Shahabad","Shahpur","Shiggaon","Shikaripur","Shivamogga","Surapura","Shrirangapattana","Sidlaghatta","Sindhagi","Sindhnur","Sira","Sirsi","Siruguppa","Srinivaspur","Tarikere","Tekkalakote","Terdal","Talikota","Tiptur","Tumkur","Udupi","Vijayapura","Wadi","Yadgir"],"Karnatka":["Mysore"],"Kerala":["Adoor","Alappuzha","Attingal","Chalakudy","Changanassery","Cherthala","Chittur-Thathamangalam","Guruvayoor","Kanhangad","Kannur","Kasaragod","Kayamkulam","Kochi","Kodungallur","Kollam","Kottayam","Kozhikode","Kunnamkulam","Malappuram","Mattannur","Mavelikkara","Mavoor","Muvattupuzha","Nedumangad","Neyyattinkara","Nilambur","Ottappalam","Palai","Palakkad","Panamattom","Panniyannur","Pappinisseri","Paravoor","Pathanamthitta","Peringathur","Perinthalmanna","Perumbavoor","Ponnani","Punalur","Puthuppally","Koyilandy","Shoranur","Taliparamba","Thiruvalla","Thiruvananthapuram","Thodupuzha","Thrissur","Tirur","Vaikom","Varkala","Vatakara"],"Madhya Pradesh":["Alirajpur","Ashok Nagar","Balaghat","Bhopal","Ganjbasoda","Gwalior","Indore","Itarsi","Jabalpur","Lahar","Maharajpur","Mahidpur","Maihar","Malaj Khand","Manasa","Manawar","Mandideep","Mandla","Mandsaur","Mauganj","Mhow Cantonment","Mhowgaon","Morena","Multai","Mundi","Murwara (Katni)","Nagda","Nainpur","Narsinghgarh","Narsinghgarh","Neemuch","Nepanagar","Niwari","Nowgong","Nowrozabad (Khodargama)","Pachore","Pali","Panagar","Pandhurna","Panna","Pasan","Pipariya","Pithampur","Porsa","Prithvipur","Raghogarh-Vijaypur","Rahatgarh","Raisen","Rajgarh","Ratlam","Rau","Rehli","Rewa","Sabalgarh","Sagar","Sanawad","Sarangpur","Sarni","Satna","Sausar","Sehore","Sendhwa","Seoni","Seoni-Malwa","Shahdol","Shajapur","Shamgarh","Sheopur","Shivpuri","Shujalpur","Sidhi","Sihora","Singrauli","Sironj","Sohagpur","Tarana","Tikamgarh","Ujjain","Umaria","Vidisha","Vijaypur","Wara Seoni"],"Maharashtra":["[[]]","Ahmednagar","Akola","Akot","Amalner","Ambejogai","Amravati","Anjangaon","Arvi","Aurangabad","Bhiwandi","Dhule","Kalyan-Dombivali","Ichalkaranji","Kalyan-Dombivali","Karjat","Latur","Loha","Lonar","Lonavla","Mahad","Malegaon","Malkapur","Mangalvedhe","Mangrulpir","Manjlegaon","Manmad","Manwath","Mehkar","Mhaswad","Mira-Bhayandar","Morshi","Mukhed","Mul","Greater Mumbai*","Murtijapur","Nagpur","Nanded-Waghala","Nandgaon","Nandura","Nandurbar","Narkhed","Nashik","Navi Mumbai","Nawapur","Nilanga","Osmanabad","Ozar","Pachora","Paithan","Palghar","Pandharkaoda","Pandharpur","Panvel","Parbhani","Parli","Partur","Pathardi","Pathri","Patur","Pauni","Pen","Phaltan","Pulgaon","Pune","Purna","Pusad","Rahuri","Rajura","Ramtek","Ratnagiri","Raver","Risod","Sailu","Sangamner","Sangli","Sangole","Sasvad","Satana","Satara","Savner","Sawantwadi","Shahade","Shegaon","Shendurjana","Shirdi","Shirpur-Warwade","Shirur","Shrigonda","Shrirampur","Sillod","Sinnar","Solapur","Soyagaon","Talegaon Dabhade","Talode","Tasgaon","Thane","Tirora","Tuljapur","Tumsar","Uchgaon","Udgir","Umarga","Umarkhed","Umred","Uran","Uran Islampur","Vadgaon Kasba","Vaijapur","Vasai-Virar","Vita","Wadgaon Road","Wai","Wani","Wardha","Warora","Warud","Washim","Yavatmal","Yawal","Yevla"],"Manipur":["Imphal*","Lilong","Mayang Imphal","Thoubal"],"Meghalaya":["Nongstoin","Shillong*","Tura"],"Mizoram":["Aizawl","Lunglei","Saiha"],"Nagaland":["Dimapur","Kohima*","Mokokchung","Tuensang","Wokha","Zunheboto"],"Odisha":["Balangir","Baleshwar Town","Barbil","Bargarh","Baripada Town","Bhadrak","Bhawanipatna","Bhubaneswar*","Brahmapur","Byasanagar","Cuttack","Dhenkanal","Jatani","Jharsuguda","Kendrapara","Kendujhar","Malkangiri","Nabarangapur","Paradip","Parlakhemundi","Pattamundai","Phulabani","Puri","Rairangpur","Rajagangapur","Raurkela","Rayagada","Sambalpur","Soro","Sunabeda","Sundargarh","Talcher","Tarbha","Titlagarh"],"Puducherry":["Karaikal","Mahe","Pondicherry*","Yanam"],"Punjab":["Amritsar","Barnala","Batala","Bathinda","Dhuri","Faridkot","Fazilka","Firozpur","Firozpur Cantt.","Gobindgarh","Gurdaspur","Hoshiarpur","Jagraon","Jalandhar Cantt.","Jalandhar","Kapurthala","Khanna","Kharar","Kot Kapura","Longowal","Ludhiana","Malerkotla","Malout","Mansa","Moga","Mohali","Morinda, India","Mukerian","Muktsar","Nabha","Nakodar","Nangal","Nawanshahr","Pathankot","Patiala","Pattran","Patti","Phagwara","Phillaur","Qadian","Raikot","Rajpura","Rampura Phul","Rupnagar","Samana","Sangrur","Sirhind Fatehgarh Sahib","Sujanpur","Sunam","Talwara","Tarn Taran","Urmar Tanda","Zira","Zirakpur"],"Rajasthan":["Ajmer","Alwar","Bikaner","Bharatpur","Bhilwara","Jaipur*","Jodhpur","Lachhmangarh","Ladnu","Lakheri","Lalsot","Losal","Makrana","Malpura","Mandalgarh","Mandawa","Mangrol","Merta City","Mount Abu","Nadbai","Nagar","Nagaur","Nasirabad","Nathdwara","Neem-Ka-Thana","Nimbahera","Nohar","Nokha","Pali","Phalodi","Phulera","Pilani","Pilibanga","Pindwara","Pipar City","Prantij","Pratapgarh","Raisinghnagar","Rajakhera","Rajaldesar","Rajgarh (Alwar)","Rajgarh (Churu)","Rajsamand","Ramganj Mandi","Ramngarh","Ratangarh","Rawatbhata","Rawatsar","Reengus","Sadri","Sadulshahar","Sadulpur","Sagwara","Sambhar","Sanchore","Sangaria","Sardarshahar","Sawai Madhopur","Shahpura","Shahpura","Sheoganj","Sikar","Sirohi","Sojat","Sri Madhopur","Sujangarh","Sumerpur","Suratgarh","Taranagar","Todabhim","Todaraisingh","Tonk","Udaipur","Udaipurwati","Vijainagar, Ajmer"],"Tamil Nadu":["Arakkonam","Aruppukkottai","Chennai*","Coimbatore","Erode","Gobichettipalayam","Kancheepuram","Karur","Lalgudi","Madurai","Manachanallur","Nagapattinam","Nagercoil","Namagiripettai","Namakkal","Nandivaram-Guduvancheri","Nanjikottai","Natham","Nellikuppam","Neyveli (TS)","O' Valley","Oddanchatram","P.N.Patti","Pacode","Padmanabhapuram","Palani","Palladam","Pallapatti","Pallikonda","Panagudi","Panruti","Paramakudi","Parangipettai","Pattukkottai","Perambalur","Peravurani","Periyakulam","Periyasemur","Pernampattu","Pollachi","Polur","Ponneri","Pudukkottai","Pudupattinam","Puliyankudi","Punjaipugalur","Ranipet","Rajapalayam","Ramanathapuram","Rameshwaram","Rasipuram","Salem","Sankarankoil","Sankari","Sathyamangalam","Sattur","Shenkottai","Sholavandan","Sholingur","Sirkali","Sivaganga","Sivagiri","Sivakasi","Srivilliputhur","Surandai","Suriyampalayam","Tenkasi","Thammampatti","Thanjavur","Tharamangalam","Tharangambadi","Theni Allinagaram","Thirumangalam","Thirupuvanam","Thiruthuraipoondi","Thiruvallur","Thiruvarur","Thuraiyur","Tindivanam","Tiruchendur","Tiruchengode","Tiruchirappalli","Tirukalukundram","Tirukkoyilur","Tirunelveli","Tirupathur","Tirupathur","Tiruppur","Tiruttani","Tiruvannamalai","Tiruvethipuram","Tittakudi","Udhagamandalam","Udumalaipettai","Unnamalaikadai","Usilampatti","Uthamapalayam","Uthiramerur","Vadakkuvalliyur","Vadalur","Vadipatti","Valparai","Vandavasi","Vaniyambadi","Vedaranyam","Vellakoil","Vellore","Vikramasingapuram","Viluppuram","Virudhachalam","Virudhunagar","Viswanatham"],"Telangana":["Adilabad","Bellampalle","Bhadrachalam","Bhainsa","Bhongir","Bodhan","Farooqnagar","Gadwal","Hyderabad*","Jagtial","Jangaon","Kagaznagar","Kamareddy","Karimnagar","Khammam","Koratla","Kothagudem","Kyathampalle","Mahbubnagar","Mancherial","Mandamarri","Manuguru","Medak","Miryalaguda","Nagarkurnool","Narayanpet","Nirmal","Nizamabad","Palwancha","Ramagundam","Sadasivpet","Sangareddy","Siddipet","Sircilla","Suryapet","Tandur","Vikarabad","Wanaparthy","Warangal","Yellandu"],"Tripura":["Agartala*","Belonia","Dharmanagar","Kailasahar","Khowai","Pratapgarh","Udaipur"],"Uttar Pradesh":["Achhnera","Agra","Aligarh","Allahabad","Amroha","Azamgarh","Bahraich","Chandausi","Etawah","Firozabad","Fatehpur Sikri","Hapur","Hardoi *","Jhansi","Kalpi","Kanpur","Khair","Laharpur","Lakhimpur","Lal Gopalganj Nindaura","Lalitpur","Lalganj","Lar","Loni","Lucknow*","Mathura","Meerut","Modinagar","Moradabad","Nagina","Najibabad","Nakur","Nanpara","Naraura","Naugawan Sadat","Nautanwa","Nawabganj","Nehtaur","Niwai","Noida","Noorpur","Obra","Orai","Padrauna","Palia Kalan","Parasi","Phulpur","Pihani","Pilibhit","Pilkhuwa","Powayan","Pukhrayan","Puranpur","Purquazi","Purwa","Rae Bareli","Rampur","Rampur Maniharan","Rampur Maniharan","Rasra","Rath","Renukoot","Reoti","Robertsganj","Rudauli","Rudrapur","Sadabad","Safipur","Saharanpur","Sahaspur","Sahaswan","Sahawar","Sahjanwa","Saidpur","Sambhal","Samdhan","Samthar","Sandi","Sandila","Sardhana","Seohara","Shahabad, Hardoi","Shahabad, Rampur","Shahganj","Shahjahanpur","Shamli","Shamsabad, Agra","Shamsabad, Farrukhabad","Sherkot","Shikarpur, Bulandshahr","Shikohabad","Shishgarh","Siana","Sikanderpur","Sikandra Rao","Sikandrabad","Sirsaganj","Sirsi","Sitapur","Soron","Suar","Sultanpur","Sumerpur","Tanda","Thakurdwara","Thana Bhawan","Tilhar","Tirwaganj","Tulsipur","Tundla","Ujhani","Unnao","Utraula","Varanasi","Vrindavan","Warhapur","Zaidpur","Zamania"],"Uttarakhand":["Bageshwar","Dehradun","Haldwani-cum-Kathgodam","Hardwar","Kashipur","Manglaur","Mussoorie","Nagla","Nainital","Pauri","Pithoragarh","Ramnagar","Rishikesh","Roorkee","Rudrapur","Sitarganj","Srinagar","Tehri"],"West Bengal":["Adra","Alipurduar","Arambagh","Asansol","Baharampur","Balurghat","Bankura","Darjiling","English Bazar","Gangarampur","Habra","Hugli-Chinsurah","Jalpaiguri","Jhargram","Kalimpong","Kharagpur","Kolkata","Mainaguri","Malda","Mathabhanga","Medinipur","Memari","Monoharpur","Murshidabad","Nabadwip","Naihati","Panchla","Pandua","Paschim Punropara","Purulia","Raghunathpur","Raghunathganj","Raiganj","Rampurhat","Ranaghat","Sainthia","Santipur","Siliguri","Sonamukhi","Srirampore","Suri","Taki","Tamluk","Tarakeswar"]
        }
      }
      
      var countySel1 = document.getElementById("countySel1"),
      stateSel1 = document.getElementById("restaurant_locations_attributes_0_state"),
      citySel1 = document.getElementById("restaurant_locations_attributes_0_city");

      for (var country in states) {
        countySel1.options[countySel1.options.length] = new Option(country, country);
      }
      $('#countySel1').val('India');

      countySel1.onchange = function () {
        stateSel1.length = 1; // remove all options bar first
        citySel1.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        for (var state in states[this.value]) {
          stateSel1.options[stateSel1.options.length] = new Option(state, state);
         
          // $('#get_state').val("change");
        }
      }
      countySel1.onchange(); // reset in case page is reloaded
      stateSel1.onchange = function () {
        citySel1.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        var city = states[countySel1.value][this.value];
        for (var i = 0; i < city.length; i++) {
        citySel1.options[citySel1.options.length] = new Option(city[i], city[i]);
        // $('#get_city').val("caaa");

        }
      }
        
      //  // Edit Address form values get and set in select box
      var a = $('#get_state1').val();
      var b = $('#get_city1').val();
      console.log(a,b);
      if(a != null && b != null){
        console.log("state & city present");
        $('#restaurant_locations_attributes_0_state').val(a).change();
        $('#restaurant_locations_attributes_0_city').val(b).change();
      }

      $('select[name="restaurant[locations_attributes][0][state]"]').change(function(e) {
        var input_state = $(this).val();
        console.log(input_state)
        $('input[name="restaurant[locations_attributes][0][state]"]').val(input_state);
      });

      $('select[name="restaurant[locations_attributes][0][city]"]').change(function(e) {
        var input_city = $(this).val();
        console.log(input_city)
        $('input[name="restaurant[locations_attributes][0][city]"]').val(input_city);
      });
    }) 
    // --End Onload state & cities dropdowns for admin/restaurant/new and edit forms
})
