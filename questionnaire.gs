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
    help = "Spock is a Command Line Interface (CLI) to Sardana.\n\
More info on Spock: www.sardana-controls.org/users/spock.html ."
    var spock = form.addMultipleChoiceItem();
    spock.setTitle(item)
        .setHelpText(help)

    spock_questions = form.addPageBreakItem()
        .setTitle('Spock questions');

    item = "Do you use square brackets syntax to pass repeat parameters?"
    help = "More info on Spock syntax: www.sardana-controls.org/users/spock.html#spock-syntax .";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macrodata available in Spock?";
    help = "The command macrodata allows to access to the last executed \
macro data e.g. scan records.\n\
More info on macrodata: www.sardana-controls.org/users/spock.html#accessing-macro-data ."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you edit macros from Spock using edmac?";
    help = "The command edmac allows to edit the macros directly from Spock."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use ViewOptions?";
    help = "The ViewOptions allows to customize the output displayed by certain macros.\n\
More info on ViewOptions: www.sardana-controls.org/users/spock.html#changing-appearance-with-view-options"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var spock_questions_new = form.addPageBreakItem()
        .setTitle('Spock questions');

    item = "Would you prefer to have Python based syntax to execute macros e.g. mv('mot01', 100) instead of mv mot01 100?";
    var choices = ["Yes, I would directly switch to it whenever available",
        "If available I would still use the spock syntax but maybe at some point in the future I would switch to the python based syntax.",
        "No, I think I would stick to the spock syntax even if the python based syntax was available",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use QtSpock?";
    help = "QtSpock is a Qt widget which allows to embed Spock in Qt application.\n\
More info on QtSpock: www.sardana-controls.org/users/taurus/qtspock.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you execute macros in Jupyter (IPython) Notebook if this was possible?";
    help = "The Jupyter Notebook allows you to create and share documents that contain live code, equations, " +
        "visualizations and narrative text. In case of Spock notebook cells could e.g., execute macros with Python syntax or widgets, " +
        "offer macro execution control with widgets, visualize macro results with online plots, have easy access to macro data, etc.\n\
        More info on Jupyter Notebook: www.jupyter.org"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you edit controllers from Spock using edctrl if it was possible?";
    help = "edctrl command would be an equivalent to edmac command but for editing controller plugins at runtime from Spock"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
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
        .setTitle('macroexecutor');

    item = "Do you use macroexecutor?"
    help = "macroexecutor is one of the Graphical User Interfaces (GUI) to execute macros.\n" +
        "More info on macroexecutor: www.sardana-controls.org/users/taurus/macroexecutor.html"
    var macroexecutor = form.addMultipleChoiceItem();
    macroexecutor.setTitle(item)
        .setHelpText(help)

    macroexecutor_questions = form.addPageBreakItem()
        .setTitle('macroexecutor questions');

    item = "Do you use favourites?";
    help = "Favourites allow to save macros together with the parameter values for later execution.\n" +
        "More info on macroexecutor favourites: www.sardana-controls.org/users/taurus/macroexecutor.html#editing-favourites-list"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use history?";
    help = "History saves already executed macros together with the parameter values for later execution.\n"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use duplication of repeat parameters?";
    help = "Editing very complex repeat parameters, when one repetition " +
        "differs from the other just by some values, can be simplified with the " +
        "duplicate repetition feature."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you pause macro executor?";
    help = "Some macros e.g. step scans can be paused in the middle of execution " +
        "and later resumed. macroexecutor allows to pause and resume macros."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you edit macro parameters manually in the yellow Spock line?";
    help = "Yellow Spock line is a sub-widget of macroexeuctor. It provides " +
        "minimum functionality of Spock in graphical application."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var macroexecutor_questions_new = form.addPageBreakItem()
        .setTitle('macroexecutor questions');

    item = "Would you use custom widgets for editing macro parameters if these " +
        "were possible?";
    help = "macroexecutor provides generic widget for editing macros. It is able " +
        "to visualize any parameters definition thanks to the tree view, however " +
        "may not be as user friendly as a custom widget tailored for the needs " +
        "of a given macro. Custom widgets for editing macro parameters would be " +
        "plugins to the macroexecutor."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var macroexecutor_comments = form.addPageBreakItem()
        .setTitle('macroexecutor comments');

    item = "Do you have any comments about the macroexecutor?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    macroexecutor.setChoices([
        macroexecutor.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        macroexecutor.createChoice("Not now but I may use it in the future", macroexecutor_questions_new),
        macroexecutor.createChoice("Not now and I doubt I will use it in the future", macroexecutor_comments),
        macroexecutor.createChoice("No and this feature does not make sense to me", macroexecutor_comments),
    ])

    var macrobutton_page = form.addPageBreakItem()
        .setTitle('MacroButton');

    item = "Do you use MacroButton/any GUI that uses MacroButton?";
    help = "MacroButton is a very powerful widget for executing macros which " +
        "provides features like start/pause/resume/stop macro execution, macro " +
        "status and progress in a very reduced space.\n" +
        "More info on MacroButton: www.sardana-controls.org/users/taurus/macrobutton.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    macrobutton = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    macrobutton_comments = form.addPageBreakItem()
        .setTitle('MacroButton comments');

    item = "Do you have any comments about the MacroButton?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    var sequencer_page = form.addPageBreakItem()
        .setTitle('sequencer');

    item = "Do you use sequencer?"
    help = "sequencer is the Graphical User Interfaces (GUI) to compose and execute macro sequences. \n" +
        "More info on sequencer: www.sardana-controls.org/users/taurus/sequencer.html"
    var sequencer = form.addMultipleChoiceItem();
    sequencer.setTitle(item)
        .setHelpText(help)

    sequencer_questions = form.addPageBreakItem()
        .setTitle('sequencer questions');

    item = "Do you save/load XML sequences?";
    help = "Sequences can be saved into a file and later on (even after " +
        "the application restart) loaded."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you load spock syntax sequences?";
    help = "Sequences can be loaded from a text file written in spock syntax " +
        "(one macro per line)."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var sequencer_questions_new = form.addPageBreakItem()
        .setTitle('sequencer questions');

    item = "Would you like to edit the sequence while running?";
    help = "Only the part of the sequence which was not yet executed. " +
      "For example add new macros to the sequence or modify macro parameters."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setHelpText(help)
        .setRequired(true);

    item = "Would you use custom widgets for editing macro parameters?";
    help = "sequencer provides generic widget for editing macros. It is able " +
        "to visualize any parameters definition thanks to the tree view, however " +
        "may not be as user friendly as a custom widget tailored for the needs " +
        "of a given macro. Custom widgets for editing macro parameters would be " +
        "plugins to the sequencer."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var sequencer_comments = form.addPageBreakItem()
        .setTitle('sequencer');

    item = "Do you have any comments about the sequencer?";
    form.addParagraphTextItem()
        .setTitle(item)
        .setRequired(false);

    sequencer.setChoices([
        sequencer.createChoice("Yes", FormApp.PageNavigationType.CONTINUE),
        sequencer.createChoice("Not now but I may use it in the future", sequencer_questions_new),
        sequencer.createChoice("Not now and I doubt I will use it in the future", sequencer_comments),
        sequencer.createChoice("No and this feature does not make sense to me", sequencer_comments),
    ])

    var expconf_page = form.addPageBreakItem()
        .setTitle('Experiment configuration');

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure measurement group?')
        .setHelpText("By configuring measurement group we mean: defining measurement group, " +
            "adding/removing/organizing channels, configuring channels " +
            "e.g enabled, timer, synchronizer, etc.\n" +
            "More info on expconf: www.sardana-controls.org/users/taurus/experimentconfiguration.html")
        .setChoices([
            item.createChoice('expconf'),
            item.createChoice('defmeas, senv ActiveMnrGrp ...'),
            item.createChoice('I will use macros set_meas_conf and get_meas_conf\
available from Sardana v3.'),
            item.createChoice('I don\'t use measurement groups')
        ])
        .showOtherOption(true)
        .setRequired(true);

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure scan data storage?')
        .setHelpText("Scans can save data in files (or other destinations) in different formats.\n" +
            "More info on expconf: www.sardana-controls.org/users/taurus/experimentconfiguration.html")
        .setChoices([
            item.createChoice('expconf'),
            item.createChoice('newfile'),
            item.createChoice('senv ScanFile ...; senv ScanDir ...'),
            item.createChoice('I don\'t use scan data storage'),
        ])
        .showOtherOption(true)
        .setRequired(true);

    var item = form.addCheckboxItem();
    item.setTitle('What do you use to configure pre-scan snapshot group?')
        .setHelpText("Pre-scan snapshot is a one-time readout of the " +
            "elements/attributes configured in the pre-scan snapshot group.\n" +
            "More info on expconf: www.sardana-controls.org/users/taurus/experimentconfiguration.html")
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
    help = "More info on showscan online: www.sardana-controls.org/users/taurus/showscan.html#showscan-online"
    showscan_online = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setRequired(true);

    var showscanonline_questions_new = form.addPageBreakItem()
        .setTitle('Online scan plotting questions');

    item = "Would you like to plot online 1D exp. channel data i.e. spectrum data?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to have a live view of 2D exp. channel data i.e. image data?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
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
        showscan_online.createChoice("No and this feature does not make sense to me", showscanonline_comments),
    ])

    var showscanoffline_page = form.addPageBreakItem()
        .setTitle('Offline scan plotting');

    item = "Do you use the offline scan plotting a.k.a. showscan?";
    help = "More info on showscan: www.sardana-controls.org/users/taurus/showscan.html#showscan-offline"
    showscanoffline = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setRequired(true);

    var showscanoffline_questions_new = form.addPageBreakItem()
        .setTitle('Offline scan plotting');

    item = "Would you use a tool to compare the data from the online plot (current scan) \
with the data from the offline plot (previous scans) if these, now separated tools, \
were merged to faciliate the data comparison?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
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
        showscanoffline.createChoice("No and this feature does not make sense to me", showscanoffline_comments),
    ])

    var taurusformmoveable_page = form.addPageBreakItem()
        .setTitle('Taurus form with the Pool moveables');

    item = "Do you use the Taurus form with the Pool moveables a.k.a Pool Motor Taurus Value (PMTV)?";
    help = "More info on PMTV: www.sardana-controls.org/users/taurus/poolmotortv.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    taurusformmoveable = form.addMultipleChoiceItem()
        .setChoiceValues(choices)
        .setTitle(item)
        .setHelpText(help)
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
        "No and this feature does not make sense to me"];
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
        "No and this feature does not make sense to me"];
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
    help = "More info on Sardana editor: www.sardana-controls.org/users/taurus/sardanaeditor.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    sardanaeditor = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
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
    help = "More info on macro parameters: www.sardana-controls.org/devel/howto_macros/macros_general.html#adding-parameters-to-your-macro"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with optional parameter(s)?";
    help = "More info on optional parameters: www.sardana-controls.org/devel/howto_macros/macros_general.html#optional-parameters"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with result(s)?";
    help = "More info on macro result: www.sardana-controls.org/devel/howto_macros/macros_general.html#returning-a-macro-result"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which call other macros?";
    help = "More info on calling other macros: www.sardana-controls.org/devel/howto_macros/macros_general.html#sardana-macro-calling"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which add programatic hooks to other macros?";
    help = "More info on adding macro hooks programmatically: www.sardana-controls.org/devel/howto_macros/macros_general.html#adding-hooks-support"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop hookable macros i.e. macros which accept attaching hooks to them?";
    help = "More info on developing hookable macros: www.sardana-controls.org/devel/howto_macros/macros_general.html#adding-hooks-support"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which use custom environment variables?";
    help = "More info on accessing environment: www.sardana-controls.org/devel/howto_macros/macros_general.html#accessing-environment"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro logging feature?";
    help = "More info on macro logging: www.sardana-controls.org/users/macro_logging_and_reports.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro report feature?";
    help = "More info on macro report: www.sardana-controls.org/users/macro_logging_and_reports.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros with on_stop/on_abort methods?";
    help = "More info on on_stop/on_abort methods: www.sardana-controls.org/devel/howto_macros/macros_general.html#handling-macro-stop-and-abort"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use macro plotting feature?";
    help = "More info on macro plotting: www.sardana-controls.org/devel/howto_macros/macros_general.html#plotting"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which report progress?";
    help = "More info on reporting macro progress: www.sardana-controls.org/devel/howto_macros/macros_general.html#showing-progress-in-long-macros"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which execute simultaneous actions \
e.g. while moving motors do other things?";
    help = "More info on executing simultaneous actions in macros: www.sardana-controls.org/devel/howto_macros/macros_general.html#simultaneous-actions"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop interactive macros i.e. which ask for user input?";
    help = "More info on interactive macros: www.sardana-controls.org/devel/howto_macros/macros_general.html#asking-for-user-input"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you develop macros which override standard macros \
e.g.: mv, ct, lsm, etc.";
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this feature does not make sense to me"];
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
    help = "More info on general hooks: www.sardana-controls.org/users/macro_hooks.html#general-hooks"
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"]
    general_hooks = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
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
    help = "More info on scans: www.sardana-controls.org/users/scan.html#scans"
    scans = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setRequired(true);

    scans_questions = form.addPageBreakItem()
        .setTitle('Scans questions');

    item = "Do you execute turn-key step scans: ascans: ascan, a2scan, a3scan,\
a4scan dscans: dscan, ... mesh, fscan?";
    help = "More info on turn-key scan macros: www.sardana-controls.org/users/standard_macro_catalog.html#scan-macros"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you program and execute custom step scans (using Generic Scan Framework)";
    help = "More info on Generic Scan Framework: www.sardana-controls.org/devel/howto_macros/scan_framework.html#scan-framework"
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

        item = "Would you like that we put efforts to optimize step scans and eliminate dead times as much as possible?";
    var choices = ["Yes",
        "Not now but it may give me benefits in the future",
        "Not now and I doubt I will give me benefits in the future",
        "No and this optimization does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you execute timescan?";
    help = "timescan is a special type of a scan which does not involve any moveable " +
      "and performs a synchronized successive acquisitions with a given time period."
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
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
    help = "More info on turn-key scan macros: www.sardana-controls.org/users/standard_macro_catalog.html#scan-macros"
    item.setTitle('Which continuous scans do you use?')
        .setChoices([
            item.createChoice('ascanc, dscanc, etc. (also for multiple motors)'),
            item.createChoice('ascanct, dscanct, etc. (also for multiple motors)'),
            item.createChoice('meshct'),
        ])
        .setHelpText(help)
        .showOtherOption(true)
        .setRequired(true);

    item = "Do you use data interpolation/extrapolation in continuous scans?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo counters in continuous scans?";
    help = "More info on pseudo counters: www.sardana-controls.org/devel/overview/overview_pseudocounter.html"
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    var contscans_questions_new = form.addPageBreakItem()
        .setTitle('Continuous scans questions');

    item = "Would you program and run custom continuous scans if these were possible \
i.e. with waypoint generator?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like that external channels e.g. Tango attributes were supported \
by continuous scans"
    help = "Currently it is necessary to define an instance of the TangoAttrCTController controller and a channel.";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like that pseudo counters not based on any experimental channels \
were supported by continuous scans?";
    help = "Currently only pseudo counters based on other experimental channels are supported by continuous scans.\n" +
    "More info on pseudo counters: www.sardana-controls.org/devel/overview/overview_pseudocounter.html"
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Are you interested in fixing the motor's theoretical position in continuous scans?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    help = "Currently moveables' positions in continuous scans are theoretical values calculated a priori. " +
    "Furthermore non linear pseudo motors' positions are wrongly calculated."
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to decouple software synchronized experimental channels \
so the slower ones does not block the faster ones?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
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
    help = "More info on data storage: www.sardana-controls.org/devel/howto_recorders.html#writing-recorders"
    datastorage = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setRequired(true);

    datastorage_questions = form.addPageBreakItem()
        .setTitle('Data storage questions');

    var item = form.addCheckboxItem();
    item.setTitle('Which destinations do you use?')
        .setHelpText("Destination examples: file in a given format, database, etc.")
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
    help =
    acquisition = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By natively integrated in Sardana we mean provided by the Device Pool " +
        "e.g. experimental channels, measurement group, etc. \n" +
        "More info on data acquisition: www.sardana-controls.org/users/acquisition.html")
        .setRequired(true);

    var acquisition_questions_timerable = form.addPageBreakItem()
        .setTitle('Data acquisition questions');

    item = "Do you use timerable experimental channels?";
    timerable = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Timerable experimental channels includes: counter/timer, 1D and 2D.\n" +
            "More info on timerable channels: \n" +
            "www.sardana-controls.org/devel/overview/overview_countertimer.html \n" +
            "www.sardana-controls.org/devel/overview/overview_1D.html \n" +
            "www.sardana-controls.org/devel/overview/overview_2D.html" )
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
    help = "Timer channel in a controller is the one which controls when a single acquisition starts and ends " +
        " i.e. the one to be called the LoadOne method."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use count to monitor acquisition mode?";
    help = "In count to monitor acquisition mode the end of the acquisition happens when the monitor channel " +
        "reaches a given number of counts."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use per measurement preparation?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
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
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Per acquisition preparation is executed once at the beginning of each acquisition \
e.g. at the beginning of a step, it uses `LoadOne` controller's method.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use hardware synchronization?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By hardware synchronization we mean that an external hardware \
controls the acquisition of the experimental channel controller.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use experimental channel acquisition?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By experimental channel acquisition we mean that the channel is directly commanded \
to acquire without the need to define a measurement group.")
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
        .setHelpText("0D experimental channels read values as fast as possible during the integration time, " +
            "buffer them and finally calculate the result.\n " +
            "More info on 0D experimental channels: www.sardana-controls.org/devel/overview/overview_0D.html")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to have more calculation options available to apply on the 0D experimental channel's buffer, \
or maybe even be able to easily add new calculations as plugins?";
    help = "Currently the only available calculations are sum and average."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to execute experimental channel acquisition on 0D experimental channels?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By experimental channel acquisition we mean that the channel is directly commanded \
to acquire without the need to define a measurement group")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo counter experimental channels?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    timerable = form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Pseudo counters allow you to execute calculations using the acquisition values.\n" +
            "More info on pseudo counters: www.sardana-controls.org/devel/overview/overview_pseudocounter.html")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to execute experimental channel acquisition on pseudo counters?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By experimental channel acquisition we mean that the channel is directly commanded \
to acquire without the need to define a measurement group")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you like to be able to define generic pseudo counter controllers i.e. having dynamic roles?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("For example different instances of the 'average pseudo counter controller' could have \
different number of physical channels: one be an average of two channels and the other of six channels.")
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
        .setHelpText("Backlash correction compensates backlash errors typical to stepper motors.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use software limits protection?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Software limits prevent motion from going beyond the safe range set by the user.")
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

    item = "Do you use the user position transformation?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("By user position transformation we mean that Sardana calculates user \
position using the hardware position, steps_per_unit, offset and sign.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use the dial position attribute?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this attribute does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Dial position is a result of transformation of the hardware position and the steps per unit factor.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use base rate attribute?";
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this attribute does not make sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Base rate is the starting frequency at which stepper motor will be started to move.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Are you happy with the emergency break feature?";
    var choices = ["Yes",
        "I would change it but, it make sense",
        "No and this feature does not make sense to me, "];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("Emergency break protects the grouped motion, for example, when one motor \
gets into ALARM state, the rest of the motors are stopped.")
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Do you use pseudo motors?";
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText("More info on pseudo motors: www.sardana-controls.org/devel/overview/overview_pseudomotor.html")
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
    help = "HKL allows perform motion with the diffractometers in the reciprocal space. \n" +
        "More info on difractometer control: www.sardana-controls.org/users/diffractometer.html"
    var choices = ["Yes",
        "Not now but I may use them in the future",
        "Not now and I doubt I will use them in the future"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
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

    item = "Would you use an official Sardana configuration tool/format that we plan to develop?";
    help = "Currently Sardana only provides configuration macros e.g. defctrl, defelem, " +
        " defmeas, etc. Other configuration tools were developed at DESY (XML based) " +
        "or MAXIV (JSON based) - dsconfig."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this tool does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "Would you benefit from being able to connect multiple Pools " +
            "to a MacroServer without the usability limitations.";
    help = "Currently MeasurementGroup can contain channels only from the same Pool." +
        "Also pseudo elements e.g. pseudo motors, can be based on elements from the same Pool."
    var choices = ["Yes",
        "Not now but I may use it in the future",
        "Not now and I doubt I will use it in the future",
        "No and this feature does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

    item = "If it was possible to use Sardana without Tango and this would" +
        " provide significant improvements would you switch to use it?";
    help = "Currently Sardana requires Tango control system to run."
    var choices = ["Yes",
        "Not now but I may do it in the future",
        "Not now and I doubt I will do it in the future",
        "No and this does not have sense to me"];
    form.addMultipleChoiceItem()
        .setTitle(item)
        .setHelpText(help)
        .setChoiceValues(choices)
        .setRequired(true);

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
