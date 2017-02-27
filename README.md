
# Places you've been website

#### 27 Feb., 2017, v.1.0.0

#### By Janek Brandt and Mark Fisher

## Description

Places you've been website. Showcases object use.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Get input text for location, landmark, time of year and notes from the user and save each as a string variable in front end|"evil User123!!!?"|`var usrInput = "evil Usersz123!!!?"`|
|Instantiate a new object with user input variables | dest = new Destination(location, landmark, timeOfYear, notes) | {location: "location", landmark: "landmark", timeOfYear: "timeOfYear", notes: "notes"} |
|Object method to return string for each landmark at location| destination.getLandmarks() | location + ": " + landmark + " (" + timeOfYear +")"|


## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/placesYouveBeen).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/placesYouveBeen.git`
* Download
  * Click [here](https://github.com/Atticus29/placesYouveBeen/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the placesYouveBeen folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Janek Brandt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
