---
title: Sardana Questionnaire 2020 Results
tags: Talk
description: View the slide with "Slide Mode".
---

# Sardana Questionnaire 2020 Results

<!-- Put the link to this slide here so people can follow -->
slide: [https://hackmd.io/@reszelaz/Bk53UScj_](https://hackmd.io/@reszelaz/Bk53UScj_)

---

## Introductory Questions

----

### Institutes Participation

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/institutes_participation.png)

----

### Installation Type

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/installation_type.png)

---

### How to interpret the results?

----

#### How to interpret the results?

- Questions were asked in the order from the top to the bottom components. Starting with the client applications (Spock and Taurus GUI) and ending with the action's control (acquisition and motion)
- Results are presented accoring to the component's popularity. Starting with the most popular components and ending with the least popular components.
- Most of the results contain: count graphs, score graphs and comments.

----


#### Counts graphs

Most of the questions were formed in a way to respond either:

0. **I don't use** *\<a feature\>* now and **this feature doesn't have sense** to me (blue color).
1. **I don't use** *\<a feature\>* now and **I doubt I'll use it in the future** (yellow).
2. **I don't use** *\<a feature\>* now but **I may use it in the future** (orange).
3. **I use** *\<a feature\>* or I would use *\<a feature\>* if available (red). 


----

#### Score graphs

Count graphs and score graphs are ordered according to the following score:
answers 1 * 1 + answers 2 * 2 + answers 3 * 4 (the score is beneficial for this features which are used today).

Score graphs basically contain the score result.

---

## Main Questions

----

## Main Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/main_questions_counts.png)

----

## Main Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/main_questions_score.png)

---

### Motion questions

----

### Motion Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/motion_questions_counts.png)

----

### Motion Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/motion_questions_score.png)

----

#### Motion Comments

Ah teh famous set_lm and set_lim which affects soft limits to user and dial positions but are not synchronized though user and dial postions are through teh offsets. I remeber having complained about it it long time ago. I would hve expected tha dial and us soft limits to be synchronized by teh offset. What is funny now is that one can settle limits so that user position is within soft limts but not dial...

---

### Spock questions

----

### Spock Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/spock_questions_counts.png)

----

### Spock Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/spock_questions_score.png)

----

#### Spock Comments

----

##### Comment #1

Spock has been inspried by proprietary software SPEC, sorry that some - good and useful - features of SPEC  have not been retained 3 main problems detected: 
- 2 control+C can crash the system
- big delay between the data acquired and showed
- big consuming of memory.

----

##### Comment #2

Often it is tricky to trace back the source of an error. e.g. when errors like "measurement group ended in fault" occur it is basically impossible from the error message to trace back the faulty device. It would be very much appreciated if the error messages could state more clearly, a) which device is causing an error and b) which (sub) macro is the one where there error occurred and where the corresponding macro file is stored

----

##### Comment #3

The user interface in Spock emulates to a large extent the the one of speck. It would be nice to get more speck features, e.g. the possibility to print sevral command in one line. ( I am aware that I can write my own  script that emulates whatever I like )

----

##### Comment #4

Qt spock has very limited options for highlighting. This should be improved. It is easy to make own terminal highlighting in spock, but more general macros would be benificial. CTRL+C issues should be very carefully checked and resolved with a more vigilant outlook to the beamline staff who may not be experienced in programming/debugging.


----

##### Comment #5 - part 1

The Sardana environment should be stable in the qtspock. To simplify commands similar for the spec session (timescan, loopscan, instead of using seq command: seq "ct" "wa" ... it would be simpler to have syntax like in spec: ct; wa; ...). It would be helpful to apply the enable/disable feature like in spec for the motors. Then we may configure all motors and by simple command disable some motors for users from spock session but still motors are configured and ready for use. 

----

##### Comment #5 - part 2

Second beneficial feature would be to configure the motor sequence to display for the “wa” command not noly alphabetic order. It would need to be connected with the enable/disable command.

----

##### Other comments

- Please remove the changing ANSI colors... can be distracting
- Very powerful and convenient tool. However, difficult to trace bugs
- Like to have back the possibility to paste multiple lines
- It would be great if things that run in ipython also run in SPOCK and vice versa

---

### Scan Questions

----

#### Scan Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/scan_questions_counts.png)

----

#### Scan Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/scan_questions_score.png)

----

#### Continuous Scans Type

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/contscan_type.png)

----

#### What do you use to configure pre-scan snapshot group?

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/snapshot_conf.png)

----

#### Scan comments

----

##### Comment #1 - part 1

Well we are not using pseudocounter but so called attribute counters. to my knowledge mspd was teh first to request and have it deployed continuous scan, so callad madscan. Now exist ascanct which we are using but whaih has severla drwabacks.

The way of feeding the continuous scan (start stop number of points integertaion time) might lead to unrealistic speed fro teh motor.

----

##### Comment #1 - part 2

In the wish of making step scan and continuous scan uniform, sardna developpers missed that in the former   case one spake of data collection points, in the latter case of data colecction intervals. And the numlber of mpoints and intervals in segment can NEVER be teh same value. A 4 intervals segment is defined by 5 points, there is no way in ending up with 5 data collection points   when integrating over 4 intervals. 

----

##### Comment #1 - part 3

Well sardan devloppers have cerated a 5ths interval outside of teh range which is to my opn ion non sense since a) teh user do nat expct is movable to go outside the start and end values 5decelaartion expceted). I am citing as en axample on can have a collision or go in teh dirct beam. Moroever, presently a continuous scan has a data collection point teh start of the integrated interval and not the middle point. This makes that scaniing form one direction or the other might differ;

----

##### Other Comments

- To high dead time for configuring continuous scans and saving date, at the moment is comparable with the actual measurement time.
- Scans with different steps, but in one file.
- scan_repeat must be implemented; data format must be so that the repeated dataset is added as a column rather than as new line; 
- Would be nice to have scan macro that can use intervals rather than steps

---

### Acquisition Questions

----

### Acquisition Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/acquisition_questions_counts.png)

----

### Acquisition Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/acquisition_questions_score.png)

----

### Timerable channels

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/timerable_type.png)

----

### Measurement Group Configuration

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/meas_config.png)

----

### Measurement Group Configutation Parameters

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/meas_config_param.png)

----

#### Acquisition Comments

----

- deadtime is an issue

---

### Data Storage Questions

----

#### Data Storage Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/datastorage_counts.png)

----

#### Data Storage Destination

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/datastorage_dest.png)

----

#### Data Storage 1D

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/datastorage_1d.png)

----

#### Data Storage 2D

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/datastorage_2d.png)


----

#### What do you use to configure scan data storage?

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/datastorage_conf.png)

----

#### Data Storage Comments

----

##### Comment #1

No reason to go towards binary data storage for 1D data
ascii file are easy to understand (preferable and used) but less performant. The user community looks to use better ascii files. A problem have been detected with the h5, conflict in reading while registering.

----

##### Other comments

- Not refernce image in Nexus file… and compressed numpy files
- Destination should be defined in spock; right now depends on HasyUtils which causes troubles often

---

### Macros Questions

----

#### Macros Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/macros_questions_counts.png)

----

####  Macros Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/macros_questions_score.png)


----

#### Macros Comments

----

##### Comment #1

It is great to see progress in the macros developing - more macros which we did ourselves, because they were not present at the start are available now. At a point it shows that there is a lack of communication between the professional developing community and the beamline staff - who should learn sardana, but may not have time to learn because of different duties. We probably should work on that together with our IT department - on the learning things - organize more schools with them.

----

##### Other Comments

- The report feature never worked though I devlopped macro including this
- many new interesting features that we will try and use in the near future;
- We need to have an option to plot something (some processed scan results with fits) and to ask for the user input in the interactive macro. Now the graphical output is not showing up until the macro finished.

---

### General Hooks

----

#### General Hooks Comments

- Not aware about these features
- it could be time consuming
- Works so far, let's hope that they will not break.
- OK; but complex for a non-expert; will talk with Teresa;
- Limiting with lack of documentation

---

### PMTV Comments

----

#### Comment #1

Useful GUI interface. We are using it without dispalying the apply button which is a by far too dangerous options. Indeed, it is confusing and might move all the motors where only one is expected to move. Note that this feedback is based on accidental and effctive experiences with users 
some detected problems: (i) delays; (ii) the need to send twice (or more) the enter; (iii) the apply bottom can be very dangerous

----

#### Comment #2

Every beamline uses their own implementation. For example we like to have buttons for positive and negative movement in a more compact way - which does save space for users and beamline stuff. Indicator of the state; label of the motor; lineedit controlling position; 4 buttons for movement with a step: -10*step, -1* step, +1* step, +10step; stop button. Configuration of the motor can be called by using a pop menu activated with a right click on the label. We find this useful as it takes much less space that the current form.

----

#### Other Comments

- Taurus form is integrated in our GUI; to turn on/off motors we use icepapcms
- I would prefer that the defect view is in relative, rather than in absolute, because moving a motor in absolute by mistake can produce damage to our equipment 
- Annoying to not be able to set formatting of values (to scientific for pressures etc)

---

### Macroexecutor Questions

----

#### Macroexcutor Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/macroexecutor_questions_counts.png)

----

####  Macroexecutor Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/macroexecutor_questions_score.png)

----

### Macroexecutor Comments

- Not been offered so far. To be very carful in which state the station is left after anj abort
- not sure if I use it. If this is the function that is build into our GUI for the macroexecutor, than it would be very nice to have, but it is working so bad that we treat it as MS internet explorer.
- It would be nice, if the macrobutton text changes when a macro is running or not.

---

### Sequencer Questions

----

#### Sequencer Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/sequencer_questions_counts.png)

----

#### Sequencer Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/sequencer_questions_score.png)

----

### Sequencer Comments

----

#### Comment #1

Sorry that we have to pass through xml. The sequencer is the simplest tool to execute a long run (eg overnight) and is easily accessible to users when using teh spock syntax. Possibility to modify or at least embedd another sequence 5at teh end) would be welcome. One drawback is to stop/abort a sequence when not on site, for this a abortcurrentmacro script has been created at ALBA.

----

#### Comment #2

take into account that at MIstral, the end station is not controlled by Sardana. All sequences are only used for BL alignment, which is quite standard

----

#### Comment #3

I would be nice to be able to send commands from the command line to the sequencer to use it kind of like a queue for commands, which are executed as soon as the previous commands have finished. the executed commands should automatically disappear from the sequence list afterwards in this case.

Maybe the sequencer is not the right thing to allow for this feature and a separate dedicated queue feature would be the better choice

----

#### Other Comments - part 1

- not easy to handle and not sufficiently flexible
- Copy-Paste Option is missing and makes things time-consuming 
- For the most tasks which we use - ipython macroses in a form of functions is much more convinient option
- Again, we use 'run_seq'. We do everything from the command line.

----

#### Other Comments - part 2

- I am using the command run_seq (simply executes all commands in a plain text file) frequently
- looks very interesting; might soon use
- Time consuming to build complex sequencer
- The hooks feature could have better documentation, and what moving blocks to the right etc does. Pausing often freezes macros.

---

### Showscan Online Questions

----

#### Showscan Online Questions Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/showscan_online_questions_counts.png)

----

#### Showscan Online Questions Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/showscan_online_questions_score.png)

----

### Showscan Online Comments

----

#### Comment #1

showscan online has been recently upgraded and we rae happy with it. The selction of the live plmot channels is made by an ad hoc spock macro named select_plot (which avoids using expconf) An extra feature has been requested, it is in sepcific cases to have th possibilities to overplot two successive scans 5used for alignment of eg DAC cells)  

----

#### Comment #2

comment regarding 2D channel ploting: at DESY we have a very nice tool called LaVue for 2D detector live viewing which is well suited for our needs. Further integration into Sardana/Spock is probably not needed

----

#### Comment #3 - part 1

We use our own solution + solutions from FS-EC of DESY. Our requirenments are simlple: interactivity in the most advanced way. Looking at the scan is not enough, we need statistics (peak position, min, max, width of the shape by derivative, center of mass, distance measurement and etc.). Motor live position, if it is a single motor movement must be shown. Values must be passed between the macro server environment and the visualizing program (e.g. 3 position centering, etc.). 

----

#### Comment #4 - part 2

Program visualizing scan data must be compact, be able to show individual channels and a group of channels marked as visible on a same outlook. Program must contain a buffer of at least 50 last scans and a capability to overlay them with the current scan, and use simple functions of - calculate derivative, normalize channels, invert data in y axis.

----

#### Other Comments

- 2D exp. channel data is what we always have in LOREA.
- preview embedded into ctbl24macro
- We do use it, but embedded as a TaurusPlot in a PyQt widget/GUI (fluoscan)
- We use the SardanaMonitor or the pyspMonitor
- Taurus is a bit unfriendly; Right now we use lavue for 2D
- Scan GUI provides wider functionality, no need to use showscan online

---

### MacroButton

----

#### MacroButton Comments

- Not been offered so far. To be very carful in which state the station is left after anj abort
- not sure if I use it. If this is the function that is build into our GUI for the macroexecutor, than it would be very nice to have, but it is working so bad that we treat it as MS internet explorer.
- It would be nice, if the macrobutton text changes when a macro is running or not.

---

### PIORTV

----

#### Comment #1 - part 1


At the moment it is more convinient to work with registers from tango. Most of the time the registers we use - are a part of a bigger interface and there we need more than the taurus component - we need need to create our own (with gui indicators - what is what - laser mirror, where on the path, how does it affect the path, does the element of the beamline block the X-rays, and etc), 

----

#### Comment #2 - part 2

Thus we use custom solutions, more relying on PyTango, which sometimes saves memory footprint to a certain degree, in comparison with Taurus. Newer solutions use custom Taurus components. Still, for quick outlook at the prototyping stage, Pool IO modules are helpful.

----

#### Other Comments

- Indirectly used. It is annoying to don't see the movement.
- need urgently to be improved
- Associate the discrete number with a label and show the label in Taurus Form

---

### PCTV

----

#### PCTV Comments

- We do not use it, but we are using specific GUIs for the same scope
- At the moment for us is very convinient to start aquisition from the command line.
- More options for the size of the taurus form would be appreciated (font size, section size change, etc).

---

### Other TV Widgets

----

#### Other TV Widgets?

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/other_tv_widgets.png)

----

#### Other TV Widgets? Comments

Multimotor in combination with various hardware does require custom modules. Taurus form widgets are useful, but often we need more flexibility on customization and more compact interfaces. Beamline has too many components and taurusforms are quick to build, but overcrowd user working space.

---

### Showscan Offline

----

#### Showscan Offline Comments - part 1

- Here I am confused, it seems that what is named offline scan plotting is what we are using for online plotting...
- at the moment we are using pymca
- Please don't waste time on it
- we use usually pymca
- We use PyMCA
- comparing current and previous scan would be extremely helpful. Now we usually use PyMCA for that, but the manual reloading of new scans is quite annoying.

----

#### Showscan Offline Comments - part 2

- We would like to overlay last scans with current. We already have such tool for the last 50 - scans in a compact way, but it needs to be updated as it is many years old. Opening and overlaying data is a very helpful option.
- Using out of spock code for this
- For us PyMCA gives more options for offline scan plotting and works great. Don't spend time on this.
- We use PyMCA for offline scans
- we usually use PyMCA for that

---

### Sardana Editor

----

#### Sardana Editor Comments - part 1

- Not at BL scientist level to my opinion
- We are evolving in minimizing the new macros edition. 
- I did not know its presence, at the moment I am using directly spyder3. 
- we use Kate

----

#### Sardana Editor Comments - part 2

- We might also use pycharm
- It is a good thing to build, but one needs to explain better in the community the advantages. At the moment the only advantage I can see - is work with hooks. Otherwise - IDE like Pycharm could be more suitable for most of the things we do.
- We don't see any use for it. There is a huge number of editors for any taste around, people use their preference.

---

### Sardana User Interfaces

----

#### Sardana User Interfaces

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/main_ui.png)

----

### Sardana User Interfaces Comments

----

#### Comment #1 - part 1

On MSPD (but many other BL's) we are collecting data by launching a series of macros for a long period (eg Temperature ramps, long data aqusition,...) so all commands should be able to be send through a batch file..;which is not necessarily the case with GUI's

----

#### Comment #1 - part 2

I have used 10 years long SPEC at ESRF and then experienced teh frist steps of sardana at ALBA. 
At the beginning  I felt a clear will to differentiate form SPEC  which led to even refuse taking the benfit of good apsects of SPEC afeter long experience.

----

#### Comment #1 - part 3

Typically, sardane is still not abl to deliver a C-plot like library, an integrated system to refine and send to postion afetr a gab or edge scan.  Scientists had to develop  their own macro to do this (I have been said to use PyMCA by teh way, which is not intercating with the controls system)

----

#### Comment #1 - part 4

More concertation between BL scintist and sardana developers is desired. Contrary to scintist acting as local contact evry day with external users, developers do not necessary know what the final unexperinced  user are expecting. user wnat automatization, somthing simple and at the extreme teh BL running by itsel; most of external users only know MicroSoft/Windows or Apple OS operating systems and are completly out of linux commands and philosophy. 

----

#### Comment #1 - part 4

Offering GUI is nice but if it means external users have to stay on teh BL, they prefer learning or asking local contact to program overnight batches.

Finally, I could point out as an extreme example of controls software and survey whta has been developped at ILL Grenoble (neutron facility) where one can follow teh status of teh BL  through an andorid application 

----

#### Comment #2

Theming seems incomplete - when I change the window manager settigns to a dark theme, taurus window background use the darker color, but the text stays black.

----

#### Comment #3

ideally, we would need a widget to select a file (in our case it will be an image) for the macro reading image information (motor positions of TXM: sample X, Y, Z, detector Z, zone plate Z, exposeru time)

----

#### Comment #4

It would be nice to have a more responsive interface, less memory consumption of the TaurusGUI and of some TaurusWidgets. I also miss some flexibility in changing the color-schemes, elements' sizes and icons. And a more clear API with many examples would be also nice to have.

----

#### Comment #5 - part 1

More compact interfaces are of preference. Taurus GUI had many issues at start and we don't have much time to debug, it was easier to make own interface which was faster, showing the data we need in the way we need, much faster than debug all issues and inconviniences of the Taurus GUI.


----

#### Comment #5 - part 2

It is very hard to make a program which guides a user through a certain workflow (step1 - find the sample, step2 - measure sample, step3 - use interlock to change the sample, step4 - use tools for troubleshooting). We use spock in a terminal and qtspock, for which we use a interface which prepares user input (user does not need to remember macronames, helps to follow protocols, saves user from typos).

----

#### Other Comments

- we are used to spock so we like it, but the users doesn't like it so much
- Everything must be accessible by command line tools
- I like a command line interface. Missing feature - sign to add multiple commands in a single line
- It is hard to figure how to call a macro outside of Spock (e.g. from a generic python script)

---

### Enhancements Ranking

----

### Enhancements Ranking Counts

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/enhancements_questions_counts.png)

----

### Enhancements Ranking Score

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/enhancements_questions_score.png)

---

## Final Questions

---

### Sardana Documentation (open question)

----

#### Answer #1 - part 1

I need more documentation, maybe more precise, more like a Tutorial of a full system. Something where the user is just a developer who does not know what is acquisition. The examples use your words (like CounterTimer) but I did not manage to understand what it is. I miss like a graphic that explain the relation of all what is needed to make a measure 2D.

----

#### Answer #1 - part 2

For the macros and motors I have problems to guess if the macro will wait or not the end of the action.
I use Taurus for some TangoDevices directly because I could not understand how to do what I want with MeasurementGroup or stuff like that.

----

#### Answer #2

Essential, but we need more schools with dedicated time and ideally - more staff (!!!). At the moment - the rules on the beamline - don't touch it if it does not break. It means that for the development the staff needs to be aware of the new developments and have time to test (!!!) and implement them. It is hard to give all work tasks the same priority.

----

#### Other Answers - part 1

- Difficult to get started. More concrete examples.
- As BL scientist we do not have time to follow up. moreover teh doc is to controls/devloppers oriented. 
- it is good for development but improvable for normal users

----

#### Other Answers - part 2

- The documentation is not complete. Sometimes it is difficult to find description of particular element. Especially, it is tricky for people who try to write their own macros.
- It is bad. More examples for non IT-experts required.
- Mostly suitable for insiders, but they probably do not need it.

---

### Sardana Cummunity Help (open question)

----

#### Answer #1

The responses are fast, for the install its perfect. For exploiting the full power of Sardana I really need a course where I can ask questions face to face (or video) and adjust the conversation to my level of understanding. 

----

#### Answer #2

I do not know about the sradan community but only on our local controls support. i finf however sometime a big gap between BL scintists expectation, need requirment and what developpers wnats. At the end, teh controls sofwtare should be devlopped  for end usesr who are not really interested  in all possible features and subtilites of controls. But BL scinetist remain the only spok person of these final users and feedback from BL scientist is only intended ot ease the life of  everybody

---- 

#### Answer #2

Our communication protocol goes through FS-EC department. I would say that certain issues take time to fix, but we greatly appreciate help of the community.

---

### Release cycle (2 per year)

----

### General Answers

- 2 are fine: 11
- 1 would be enough: 2
- more could be better: 1
- no opinion: 5
- no answer: rest

----

#### Answer #1

Every upgrade at the beamline makes our heart stop. Not all releases are really implemented.

----

#### Answer #2

Operation at our synchrotron facility relies on the summer (short) and winter shutdown (long). Any fresh untested updates which may break things are not very welcome for the summer shutdown (minor bug fix, probably ok, nothing major please). It is really hard to test all the environments, detectors during a short period of time which overlapps with holidays.

---

### Other Comments

- The Software is already very powerful. I would like to be able to use it at it's full potential. Very nice work.

- We need to improve the pipeline of the post processing. We need to optimize the many dead time in the system. We are experiencing instabilities which bring to crash which should be removed (EX: tango timeout)

---

### Questionnaire 

----

### Questionnaire Details

![](https://raw.githubusercontent.com/sardana-org/sardana-questionnaire/master/results/questionnaire_details.png)


---

#### Questionnaire Comments

----

#### Answer #1

The questionnaire was too far adressed to developers giving teh impression BL scinteist shoudl remain out of the loop ;-)

----

#### Answer #2

"Give weights to different users e.g. Laboratory - 1/2; Beamline - 1.
When making decissions on priorities also consider the requiremed effort."

---- 

#### Answer #3

I don't think this is appropriate for end user (scientists). I think most of them will most probably don't even know what you are asking in many of the questions

----

#### Answer #4

This is a great project and we greatly appreciate the help of the Sardana Community and our IT department working on it with us in order to improve user experience at the beamlines. Thank you very much! The questionnaire is a bit long, but I guess - it is fair given the complexity of the environment provided by Sardana

----

#### Answer #5

A bit too long; we had the need for an expert (Teresa) to help us answering most of the questions in a reasonable amount of time (1 hour) as many features are new to us; 

----

#### Other Anwers

- An option: "Does not matter to me at the moment, no opinion" was missing
- Some questions were not really aimed at the users, we needed the help from our controls engineers
- "Too detailed for end users. Ok for developers that use sardana"
- I do not see its utility
- Weight for BL/LAB and for the required effort
- it could be better to estimate 1-1.5h for completing the questionnaire 