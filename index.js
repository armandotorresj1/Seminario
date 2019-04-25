 var visualization = d3plus.viz()
  .container("#viz1")
  .data([{"Pais": "01 CHINA", "name":"CHINA", "Ventas Millones": 25},
  {"Pais": "02 USA", "name":"USA", "Ventas Millones": 6.1},
  {"Pais": "03 JAPAN", "name":"JAPAN", "Ventas Millones": 4.3},
  {"Pais": "04 GERMANY", "name":"GERMANY", "Ventas Millones": 3.4},
  {"Pais": "05 INDIA", "name":"INDIA", "Ventas Millones": 3.2},
  {"Pais": "06 UNITED KINGDOM", "name":"UNITED KINGDOM", "Ventas Millones": 2.5},
  {"Pais": "07 FRANCE", "name":"FRANCE", "Ventas Millones": 2.1},
  {"Pais": "08 ITALY", "name":"ITALY", "Ventas Millones": 1.9},
  {"Pais": "09 BRAZIL", "name":"BRAZIL", "Ventas Millones": 1.8},
  {"Pais": "10 IRAN", "name":"IRAN", "Ventas Millones": 1.6},
  {"Pais": "11 SOUTH KOREA", "name":"SOUTH KOREA", "Ventas Millones": 1.5},
  {"Pais": "12 RUSSIA", "name":"RUSSIA", "Ventas Millones": 1.4},
  {"Pais": "13 SPAIN", "name":"SPAIN", "Ventas Millones": 1.2},
  {"Pais": "14 MEXICO", "name":"MEXICO", "Ventas Millones": 1},
  {"Pais": "15 AUSTRALIA", "name":"AUSTRALIA", "Ventas Millones": 0.9},])
  .type("bar")
  .id("name")
  .x("Pais")
  .y("Ventas Millones")
  .draw()