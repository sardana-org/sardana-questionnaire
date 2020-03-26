function createForm() {
    var ss = SpreadsheetApp.create('Sardana Users Questionnaire Answers');
    var form = FormApp.create("Sardana Users Questionnaire");
    form.setDescription('This questionnaire is addressed to the managers of the laboratories using Sardana.\n\
In the questionnaire you will be asked which features of Sardana do you use and to give feedback about them.\n\
We plan to use this information to assign priorities to the bugs and enhancements.\n\
You will need approx. 30 min to fill this form.\n\
It is highly recommanded to fill it together with the control system engineer working in the lab (if any).\n\
Thank you in advance for dedicating your time to that!')
        .setConfirmationMessage('Thanks for responding!')
        .setAllowResponseEdits(true)
        .setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

    form.addPageBreakItem()
        .setTitle('Getting to know you!');

    item = "Name(s)";
    form.addTextItem()
        .setTitle(item)
        .setHelpText("Who you are?")
        .setRequired(false);

    item = "Organization";
    form.addTextItem()
        .setTitle(item)
        .setHelpText("e.g. DESY Synchrotron")
        .setRequired(false);

    item = "Laboratory (or Sub-System)";
    form.addTextItem()
        .setTitle(item)
        .setHelpText("e.g. CLAESS beamline")
        .setRequired(false);

    item = "Contact email";
    form.addTextItem()
        .setTitle(item)
        .setRequired(false);

    form.addPageBreakItem()
        .setTitle('Spock');

    item = "Do you use Spock?"
    help = "Spock is a Command Line Interface (CLI) to Sardana"
    var spock = form.addMultipleChoiceItem();
    spock.setTitle(item)
        .setHelpText(help)

    spock_questions = form.addPageBreakItem()
        .setTitle('Spock questions');

    item = "Do you use square brackets syntax to pass repeat parameters";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macrodata available in Spock?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you edit macros from Spock using edmac?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use ViewOptions?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var spock_questions_new = form.addPageBreakItem()
        .setTitle('Spock questions');

    item = "Would you prefer to have Python based syntax to execute macros e.g. mv('mot01', 100) instead of mv mot01 100?";
    var choices = ["Yes, I would directly switch to it whenever available",
        "If available I would still use the spock syntax but maybe at some point in the future I would switch to the python based syntax.",
        "No, I think I would stick to the spock syntax even if the python based syntax was available",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you use Spock in Qt application if this was possible";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you edit controllers from Spock using edctrl if it was possible?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    spock_comments = form.addPageBreakItem()
        .setTitle('Spock comments');

    item = "Do you have any comments about the Spock?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    spock.setChoices([
        spock.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        spock.createChoice("No", spock_questions_new),
    ])

    var macroexecutor_page = form.addPageBreakItem()
        .setTitle('MacroExecutor');

    item = "Do you use MacroExecutor?"
    help = "MacroExecutor is one of the Graphical User Interfaces (GUI) to execute macros"
    var macroexecutor = form.addMultipleChoiceItem();
    macroexecutor.setTitle(item)
        .setHelpText(help)

    macroexecutor_questions = form.addPageBreakItem()
        .setTitle('MacroExecutor questions');

    item = "Do you use favourites?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use history?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use duplication of repeat parameters?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you pause macro executor?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you edit macro parameters manually in the yellow Spock line?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var macroexecutor_questions_new = form.addPageBreakItem()
        .setTitle('MacroExecutor questions');

    item = "Would you use custom widgets for editing macro parameters?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var macroexecutor_comments = form.addPageBreakItem()
        .setTitle('MacroExecutor comments');

    item = "Do you have any comments about the macroexecutor?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    macroexecutor.setChoices([
        macroexecutor.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        macroexecutor.createChoice("Not now but I may use it in the future", macroexecutor_questions_new),
        macroexecutor.createChoice("Not now and I doubt I will use it in the future", macroexecutor_comments),
        macroexecutor.createChoice("No and this feature does not have sense to me", macroexecutor_comments),
    ])

    var macrobutton_page = form.addPageBreakItem()
        .setTitle('MacroButton');

    item = "Do you use MacroButton/any GUI that uses MacroButton?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    macrobutton = form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    macrobutton_comments = form.addPageBreakItem()
        .setTitle('MacroButton comments');

    item = "Do you have any comments about the MacroButton?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var sequencer_page = form.addPageBreakItem()
        .setTitle('Sequencer');

    item = "Do you use Sequencer?"
    help = "Sequencer is the Graphical User Interfaces (GUI) to compose and execute macro sequences"
    var sequencer = form.addMultipleChoiceItem();
    sequencer.setTitle(item)
        .setHelpText(help)

    sequencer_questions = form.addPageBreakItem()
        .setTitle('Sequencer questions');

    item = "Do you save/load XML sequences?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var sequencer_questions_new = form.addPageBreakItem()
        .setTitle('Sequencer questions');

    item = "Would you like to edit the sequence while running?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setHelpText("For example add new macros to the sequence or modify macro parameters")
        .setRequired(true);

    item = "Would you use custom widgets for editing macro parameters?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var sequencer_comments = form.addPageBreakItem()
        .setTitle('Sequencer');

    item = "Do you have any comments about the sequencer?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    sequencer.setChoices([
        sequencer.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        sequencer.createChoice("Not now but I may use it in the future", sequencer_questions_new),
        sequencer.createChoice("Not now and I doubt I will use it in the future", sequencer_comments),
        sequencer.createChoice("No and this feature does not have sense to me", sequencer_comments),
    ])

    var expconf_page = form.addPageBreakItem()
        .setTitle('Experiment configuration');

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure measurement group?')
        .setHelpText("By configuring measurement group we mean: defining measurement group, \
adding/removing/organizing channels, configuring channels e.g enabled, timer, synchronizer, etc.")
        .setChoices([
            item.createChoice('expconf'),
            item.createChoice('defmeas, senv ActiveMnrGrp ...'),
            item.createChoice('I would use macros e.g. meas_set_enabled, meas_get_enabled, \
meas_set_synchronizer, etc. if these were existing'),
            item.createChoice('I don\'t use measurement groups')
        ])
        .showOtherOption(true)
        .setRequired(true);

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure scan data storage?')
        .setChoices([
            item.createChoice('expconf'),
            item.createChoice('newfile'),
            item.createChoice('senv ScanFile ...; senv ScanDir ...'),
            item.createChoice('I don\'t use scan data storage'),
        ])
        .showOtherOption(true)
        .setRequired(true);

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure snapshot?')
        .setChoices([
            item.createChoice('expconf'),
            item.createChoice('snap macros e.g. defsnap, udefsnap, ...'),
            item.createChoice('I don\'t use scan snapshot')
        ])
        .showOtherOption(true)
        .setRequired(true);

    var expconf_comments = form.addPageBreakItem()
        .setTitle('Experiment configuration comments');

    item = "Comments about experiment configuration";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var showscanonline_page = form.addPageBreakItem()
        .setTitle('Online scan plotting');

    item = "Do you use the online scan plotting a.k.a. showscan online?";
    showscan_online = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    var showscanonline_questions_new = form.addPageBreakItem()
        .setTitle('Online scan plotting questions');

    item = "Would you like to plot online 1D exp. channel data i.e. spectrum data?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to have a live view of 2D exp. channel data i.e. image data?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var showscanonline_comments = form.addPageBreakItem()
        .setTitle('Online scan plotting comments');

    item = "Comments about the online scan plotting";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    showscan_online.setChoices([
        showscan_online.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        showscan_online.createChoice("Not now but I may use it in the future", showscanonline_questions_new),
        showscan_online.createChoice("Not now and I doubt I will use it in the future", showscanonline_comments),
        showscan_online.createChoice("No and this feature does not have sense to me", showscanonline_comments),
    ])

    var showscanoffline_page = form.addPageBreakItem()
        .setTitle('Offline scan plotting');

    item = "Do you use the offline scan plotting a.k.a. showscan?";
    showscanoffline = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    var showscanoffline_questions_new = form.addPageBreakItem()
        .setTitle('Offline scan plotting');

    item = "Would you use a tool to compare the data from the online plot (current scan) \
with the data from the offline plot (previous scans) if these, now separated tools, \
were merged to faciliate the data comparison?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var showscanoffline_comments = form.addPageBreakItem()
        .setTitle('Offline scan plotting comments');

    item = "Comments about the offline scan plotting";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    showscanoffline.setChoices([
        showscanoffline.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        showscanoffline.createChoice("Not now but I may use it in the future", showscanoffline_questions_new),
        showscanoffline.createChoice("Not now and I doubt I will use it in the future", showscanoffline_comments),
        showscanoffline.createChoice("No and this feature does not have sense to me", showscanoffline_comments),
    ])

    var taurusformmoveable_page = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool moveables');

    item = "Do you use the Taurus form with the Pool moveables a.k.a Pool Motor Taurus Value (PMTV)?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    taurusformmoveable = form.addMultipleChoiceItem()
        .setChoiceValues(choices)
        .setTitle(item)
        .setRequired(true);

    var taurusformmoveable_comments = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool moveables');

    item = "Comments about the Taurus form with the Pool moveables";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var taurusformchannel_page = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool experimental channel');

    item = "Do you use the Taurus form with the Pool experimental channels \
(now it is even possible to start acquisition from this widget)?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    taurusformchannel = form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var taurusformchannel_questions = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool experimental channel');

    item = "Comments about the Taurus form with the Pool experimental channels";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var taurusformior_page = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool IO (input/output) register');

    item = "Do you use the Taurus form with the Pool IO register?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    taurusformior = form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var taurusformior_questions = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool IO (input/output) register');

    item = "Comments about the Taurus form with the Pool IO register";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var taurusformother_page = form.addPageBreakItem()
        .setTitle('Taurus form with the other Sardana elements');

    var item = form.addCheckboxItem();
    item.setTitle('Would you use dedicated Taurus form widgets \
(TaurusValue\'s) for other Sardana elements?')
        .setChoices([
            item.createChoice('trigger/gate'),
            item.createChoice('measurement group'),
            item.createChoice('motor group'),
            item.createChoice('door')
        ])
        .showOtherOption(true);

    var sardanaeditor_page = form.addPageBreakItem()
        .setTitle('Sardana editor');

    item = "Would you use Sardana editor for editing \
macros/cotrollers/recorders if this one was finished?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    sardanaeditor = form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    sardanaeditor_comments = form.addPageBreakItem()
        .setTitle('Sardana editor questions');

    item = "Comments about the Sardana editor";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var userinterfaces_page = form.addPageBreakItem()
        .setTitle('User interfaces summary');

    item = "What is your main interface to Sardana?";
    var choices = ["Spock",
        "TaurusGUI",
        "I use equally Spock and Taurus GUI",
        "Other GUI application",
        "Other"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "General comments about the Sardana user interfaces \
e.g. I miss interface for... , I don't like the current look-and-feel because..., etc.";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var macros_page = form.addPageBreakItem()
        .setTitle('Macros');

    item = "Do you develop macros?";
    macros = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    macros_questions = form.addPageBreakItem()
        .setTitle('Macro features questions');

    item = "Do you develop macros with parameter(s)?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with optional parameter(s)?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with result(s)?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which call other macros?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which add programatic hooks to other macros?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop hookable macros i.e. macros which accept attaching hooks to them?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which use custom environment variables?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro logging feature?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro report feature?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with on_stop/on_abort methods?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro plotting feature?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which report progress?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which execute simultaneous actions \
e.g. while moving motors do other things?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which override standard macros \
e.g.: mv, ct, lsm, etc.";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var macros_comments = form.addPageBreakItem()
        .setTitle('Macros comments');

    item = "Comments about developing macros";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    macros.setChoices([
        sardanaeditor.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        sardanaeditor.createChoice("Not now but I may do in the future", macros_comments),
        sardanaeditor.createChoice("Not now and I doubt I will do in the future", macros_comments)
    ])

    var generalhooks_page = form.addPageBreakItem()
        .setTitle('General hooks');

    item = "Do you use general hooks?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"]
    general_hooks = form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var generalhooks_comments = form.addPageBreakItem()
        .setTitle('General hooks');

    item = "Comments about general hooks";

    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var scans_page = form.addPageBreakItem()
        .setTitle('Scans');

    item = "Do you use Sardana scans (or Generic Scan Framework)?";
    scans = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    scans_questions = form.addPageBreakItem()
        .setTitle('Scans questions');

    item = "Do you execute turn-key step scans: ascans: ascan, a2scan, a3scan,\
a4scan dscans: dscan, ... mesh, fscan?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you program and execute custom step scans (using scan point generator)";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you execute timescan?";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var contscans_page = form.addPageBreakItem()
        .setTitle('Continuous scans');

    item = "Do you execute Sardana continuous scans?";
    contscans = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    contscans_questions = form.addPageBreakItem()
        .setTitle('Continuous scans questions');

    var item = form.addCheckboxItem();
    item.setTitle('Which continuous scans do you use?')
        .setChoices([
            item.createChoice('ascanc, dscanc, etc. (also for multiple motors)'),
            item.createChoice('ascanct, dscanct, etc. (also for multiple motors)'),
            item.createChoice('meshct'),
        ])
        .showOtherOption(true)
        .setRequired(true);

    item = "Do you use data interpolation/extrapolation in continuous scans?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo counters in continuous scans?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var contscans_questions_new = form.addPageBreakItem()
        .setTitle('Continuous scans questions');

    item = "Would you program and run custom continuous scans if these were possible \
i.e. with waypoint generator?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like that external channels e.g. Tango attributes were supported \
by continuous scans (not requiring to define a controller/channel)?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like that pseudo counters not based on any experimental channels \
were supported by continuous scans?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Are you interested in fixing the motor's theoretical position in continuous scans?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to decouple software synchronized experimental channels \
so the slower ones does not block the faster ones??";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    var scans_comments = form.addPageBreakItem()
        .setTitle('Scans comments');

    item = "Comments about scans";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    contscans.setChoices([
        contscans.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        contscans.createChoice("Not now but I may use them in the future", contscans_questions_new),
        contscans.createChoice("Not now and I doubt I will use them in the future", scans_comments)
    ])

    scans.setChoices([
        scans.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        scans.createChoice("Not now but I may use them in the future", scans_comments),
        scans.createChoice("Not now and I doubt I will use them in the future", scans_comments)
    ])

    var datastorage_page = form.addPageBreakItem()
        .setTitle('Data storage');

    item = "Do you store data in Sardana scans?";
    datastorage = form.addMultipleChoiceItem()
        .setTitle(item)
        .setRequired(true);

    datastorage_questions = form.addPageBreakItem()
        .setTitle('Data storage questions');

    var item = form.addCheckboxItem();
    item.setTitle('Which destinations do you use?')
        .setHelpText("Destination examples: file in a give format, database, etc.")
        .setChoices([
            item.createChoice('HDF5 (using Sardana built-in recorder implemented with h5py module)'),
            item.createChoice('HDF5 (using Sardana built-in recorder implemented with nxs module)'),
            item.createChoice('SPEC (using Sardana built-in recorder)'),
            item.createChoice('FIO (using Sardana built-in recorder)'),
            item.createChoice('SPS (using Sardana built-in recorder)'),
            item.createChoice('TANGO events with JSON format (using Sardana built-in recorder),\
but outside of the `showscan online` feature'),
            item.createChoice('SharedMemory (using Sardana built-in recorder)')
        ])
        .showOtherOption(true)
        .setRequired(true);

    item = "How do you store 1D data?";
    var choices = ["I don't store 1D data",
        "1D values (data) directly in the destination",
        "References to the 1D values (data) in the destination"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .showOtherOption(true)
        .setRequired(true);

    item = "How do you store 2D data?";
    var choices = ["I don't store 2D data",
        "2D values (data) directly in the destination",
        "References to the 2D values (data) in the destination"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .showOtherOption(true)
        .setRequired(true);

    var datastorage_comments = form.addPageBreakItem()
        .setTitle('Data storage comments');

    item = "Comments about data storage";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    datastorage.setChoices([
        datastorage.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        datastorage.createChoice("Not now but I may use it in the future", datastorage_comments),
        datastorage.createChoice("Not now and I doubt I will use it in the future", datastorage_comments)
    ])

    var acquisition_page = form.addPageBreakItem()
        .setTitle('Data acquisition');

    item = "Do you use data acquisition natively integrated in Sardana?";
    acquisition = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By natively integrated in Sardana we mean provided by the Device Pool \
e.g. experimental channels, measurement group, etc.")
        .setRequired(true);

    var acquisition_questions_timerable = form.addPageBreakItem()
        .setTitle('Data acquisition questions');

    item = "Do you use timerable experimental channels?";
    timerable = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Timerable experimental channels includes: counter/timer, 1D and 2D")
        .setRequired(true);

    timerable_questions = form.addPageBreakItem()
        .setTitle('Timerable experimental channels');

    var item = form.addCheckboxItem();
    item.setTitle('Which timerable channels do you use?')
        .setChoices([
            item.createChoice('counter/timer'),
            item.createChoice('1D'),
            item.createChoice('2D'),
        ])
        .setRequired(true);

    item = "Do you use different timer channel for a controller in different applications \
i.e. in different measurement groups?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use count to monitor acquisition mode?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use per measurement preparation?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Per measurement preparation is executed once at the beginning of a measurement \
e.g. at the beginning of a scan, it uses `PrepareOne` controller's method")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use per acquisition preparation?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Per acquisition preparation is executed once at the beginning of each acquisition \
e.g. at the beginning of a step, it uses `LoadOne` controller's method")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use hardware synchronization?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By hardware synchronization we mean that an external hardware \
controls the acquisition of the experimental channel controller")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use single acquisition?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By single acquisition we mean that the channel is direclty commanded \
to acquire without the need to define a measurement group")
        .setChoiceValues(choices)
        .setRequired(true);

    var acquisition_questions_other = form.addPageBreakItem()
        .setTitle('Data acquisition questions');

    timerable.setChoices([
        timerable.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        timerable.createChoice("Not now but I may use them the future", acquisition_questions_other),
        timerable.createChoice("Not now and I doubt I will use them in the future", acquisition_questions_other)
    ])

    item = "Do you use 0D experimental channels?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    timerable = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("0D experimental channels reads values as fast as possible during the integration time, \
buffers them and finally calculate the result")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to have more calculation options available to apply on the 0D experimental channel's buffer, \
or maybe even be able to easily add new calculations as plugins?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to execute single acquisition on 0D experimental channels?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo counter experimental channels?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    timerable = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Pseudo counters allow you to execute calculations using the acquisition values")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to execute single acquisition on pseudo counter experimental channels?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to define generic pseudo counter controllers i.e. having dynamic roles?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("For example different instances of the 'average pseudo counter controller' could have \
different number of physical channels: one be an average of two channels and the other of six channels")
        .setChoiceValues(choices)
        .setRequired(true);

    var item = form.addCheckboxItem();
    item.setTitle('Which measurement group configuration parameters do you use?')
        .setChoices([
            item.createChoice('enabled'),
            item.createChoice('output'),
            item.createChoice('shape'),
            item.createChoice('data type'),
            item.createChoice('plot type'),
            item.createChoice('plot axes'),
            item.createChoice('timer'),
            item.createChoice('monitor'),
            item.createChoice('synchronizer'),
            item.createChoice('synchronization'),
            item.createChoice('nexus path')
        ])
        .showOtherOption(true)
        .setRequired(true);

    var acquisition_comments = form.addPageBreakItem()
        .setTitle('Data acquisition comments');

    item = "Comments about data acquisition";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    acquisition.setChoices([
        acquisition.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        acquisition.createChoice("Not now but I may use it in the future", acquisition_comments),
        acquisition.createChoice("Not now and I doubt I will use it in the future", acquisition_comments)
    ])

    var motion_page = form.addPageBreakItem()
        .setTitle('Motion control');

    item = "Do you use motion control natively integrated in Sardana?";
    motion = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By natively integrated in Sardana we mean provided by the Device Pool \
e.g. motor, psuedo motors, etc.")
        .setRequired(true);

    motion_questions = form.addPageBreakItem()
        .setTitle('Motion control questions');

    item = "Do you use backlash correction done by Sardana?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Backlash correcion compensate backlash errors typical to stepper motors")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use software limits protection?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Backlash correcion compensate backlash errors typical to stepper motors")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you benefit from limits protection propagated from motors to pseudo motors?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By propagation from motors to pseudo motors we mean that when moving motors, \
before starting the move Sardana will check if the final position won't be out of the pseudo motor limits.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use user position transformation?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By user position transformation we mean that Sardana calculates user \
position using the steps_per_unit, offset and sign.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use dial position attribute?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this attribute does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By user position transformation we mean that Sardana calculates user \
position using the steps_per_unit, offset and sign.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use base rate attribute?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this attribute does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Base rate is the starting frequency at which stepper motor will be started to move.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Are you happy with the emergency break feature?";
    var choices = ["Yes",
        "I would change it but, it make sense",
        "No and this feature does not have sense to me, "];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Emergency break protects the grouped motion, for example, when one motor \
gets into ALARM state, the resta of the motors are stopped.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo motors?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use discrete pseudo motors?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Discrete pseudo motors can be moved only to the discrete positions e.g. IN, OUT")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use HKL pseudo motors?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("HKL allows perform motion with the diffractometers in the reciprocal space.")
        .setChoiceValues(choices)
        .setRequired(true);

    var motion_comments = form.addPageBreakItem()
        .setTitle('Motion control comments');

    item = "Comments about motion control";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    motion.setChoices([
        motion.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        motion.createChoice("Not now but I may use it in the future", motion_comments),
        motion.createChoice("Not now and I doubt I will use it in the future", motion_comments)
    ])

    var general = form.addPageBreakItem()
        .setTitle('General questions/comments');

    item = "What do you think about the Sardana documentation?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    item = "What do you think about the Sardana Community help/response?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    item = "What do you think about the current release cycle (2 releases per year)?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    item = "Other comments";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    thankyou_page = form.addPageBreakItem()
        .setTitle('Thank you!');

    item = "What do you think about the detail lavel of the questionnaire";
    var choices = ["It was too detailed",
        "It was OK",
        "It was not enough detailed"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Comments about the questionnaire";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

}
