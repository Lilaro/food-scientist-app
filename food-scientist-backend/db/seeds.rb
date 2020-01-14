# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


yeast = Topic.create(name: 'Yeast', photo: 'https://cdn.pixabay.com/photo/2016/03/05/22/21/baked-1239259_960_720.jpg', lesson: 'Yeast is alive! 
<br>In bread making, yeast eats sugars from the starch in wheat flour, and then it 
<br>releases gas as it digests it! This gas creates air pockets in the dough, and 
<br>causes the dough to rise before and during baking.
<p></p>
<br>A Basic Bread Recipe:
<br>3 cups Bread Flour
<br>1/4 teaspoon dry yeast
<br>1 1/2 teaspoon salt 
<br>1 1/2 cups warm water
<p></p>
<br>1. Mix the flour, yeast and salt in a bowl. Mix in the warm water and, 
<br>as the dough comes together, begin to knead by hand for 5 minutes.
<br>2. Leave dough in the bowl, cover with a damp towel and leave in a warm 
<br>place for 2 hours. 
<br>3. Look at your beatiful risen dough! Now, punch that gas out and shape 
<br>the dough into a ball. Cover again, and let it sit for 45 minutes.
<br>4. Put your dough on a floured sheet pan. Lightly brush or spray it with 
<br>water and gently score the top of it with a knife 3 times. Bake at 400 
<br>degrees F for 35 to 45 minutes until golden brown.'.html_safe)

fat_crystals = Topic.create(name: 'Fat Crystalization', photo: 'https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_960_720.jpg', lesson: 'Did you know that fat crystallizes? This is clearly illustrated in chocolate! 
<br>There are six forms of fat crystallization in chocolate. The most undesireable 
<br>of these cause "bloom", which is what you see when your chocolate has icky 
<br>looking white spots on it. Form V, or beta crystals, are the only ones that give 
<br>chocolate the shine and snap you expect in a chocolate bar. The process of getting 
<br>chocolate to this state is called tempering. 
<br>Give it a try!
<p></p>
<br>1. Put 8 ounces of dark chocolate into a small stainless steel bowl. Keep 3 ounces 
<br>of dark chocolate to the side. 
<br>Stir over a small pot of simmering water.
<br>2. Keep track of the temper constantly. Mix and melt the chocolate 
<br>until it reaches 116 degrees Farenheit.
<br>3. Remove the bowl from the pot and continue stirring while gradually 
<br>adding the seed chocolate. Keep doing this until the temperature goes 
<br>down to 82 degrees.
<br>4. Return the bowl to the pot and continue mixing until the temperature 
<br>reaches 90 degrees. 
<br>Do not let it get warmer than 91 degrees!
<br>5. Pour chocolate onto parchment paper and the pan of your choice. 
<br>Allow to set and cool.'.html_safe)

caramelization = Topic.create(name: 'Caramelization', photo: 'https://cdn.pixabay.com/photo/2018/01/21/17/17/onions-3097053__340.jpg', lesson: 
'When a sugar is exposed to enough heat, it releases certain compounds that give the 
<br>food it is in a brown color and a new flavor. This is the delicious flavor of 
<br>caramelization! 
<br>When applied to straight sugar, we get straight caramel. When applied to onions, yes, 
<br>we get caramelized onions! Try it out!
<p></p>
<br>1. Slice 3 large onions.
<br>2. Coat the bottom of a pan with olive oil or butter,or both! Why not. 
<br>Add onion.
<br>3. Stir occasionally over the course of at least 30 minutes over medium 
<br>heat. When dark brown in color, remove and let cool.'.html_safe)

lisa = User.create(username: 'LisaLisa', email: 'lisa@email.com')
joann = User.create(username: 'JoJo', email: 'jojo@email.com')
gina = User.create(username: 'GinGin', email: 'gingin@email.com')
deanna = User.create(username: 'DeaDea', email: 'deadea@email.com')
