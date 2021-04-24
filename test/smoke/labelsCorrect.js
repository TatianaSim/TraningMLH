import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Labels are correct', function () {

    before("Open App",function (){
        browser.url("");
    });

        // it('TC-015 Header = My Little Hero', function () {
        //     let header = $('#h3').getText();
        //     expect(header).toEqual("My Little Hero");
        // });

        it('TC-015 Header = My Little Hero', function () {
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        // it('TC-016 Instruction = "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
        //     let header = $('p').getText();
        //     expect(header).toEqual("Let's create your own HERO! It's super easy with our application!");
        // });

        it('TC-016 Instruction = "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
            let instruction = $(sel.instruction).getText();
            expect(instruction).toEqual(exp.instruction);
        });

        // it('TC-017 Name field label = "1. What is your Hero\' s name?"', function () {
        //     let nameLabel = $$('.ant-form-item-required')[0].getText();
        //     expect(nameLabel).toEqual("1. What is your Hero\' s name?");
        // });

        it('TC-017 Name field label = "1. What is your Hero\' s name?"', function () {
            let nameLabel = $$(sel.requiredLabel)[0].getText();
            expect(nameLabel).toEqual(exp.nameLabel);
        });

        // it('TC-018 Gender field label = "2. Please choose a gender."', function () {
        //     let genderLabel = $$('.ant-form-item-required')[1].getText();
        //     expect(genderLabel).toEqual("2. Please choose a gender.");
        // });

        it('TC-018 Gender field label = "2. Please choose a gender."', function () {
            let label = $$(sel.requiredLabel)[1].getText();
            expect(label).toEqual(exp.genderLabel);
        });

        // it('TC-019 The first button label = "he"', function () {
        //     let buttonHe = $$('.ant-radio-wrapper')[0].getText();
        //     expect(buttonHe).toEqual("he");
        // });
    //
        it('TC-019 The first button label = "he"', function () {
            let buttonHe = $$(sel.radioButtonsLabels)[0].getText();
            expect(buttonHe).toEqual(exp.buttonHe);
        });
    //
    // it('TC-020 The first button label = "she"', function () {
    //     let buttonShe = $$('.ant-radio-wrapper')[1].getText();
    //     expect(buttonShe).toEqual("she");
    // });
    //
    it('TC-020 The first button label = "she"', function () {
        let buttonShe = $$(sel.radioButtonsLabels)[1].getText();
        expect(buttonShe).toEqual(exp.buttonShe);
    });

    // it('TC-021 The first button label = "it"', function () {
        //     let buttonIt = $$('.ant-radio-wrapper')[2].getText();
        //     expect(buttonIt).toEqual("it");
        // });
        //
        it('TC-021 The first button label = "it"', function () {
            let buttonIt = $$(sel.radioButtonsLabels)[2].getText();
            expect(buttonIt).toEqual(exp.buttonIt);
        });
        //
        // it('TC-022 Age field label = "3. How old is your Hero?"', function () {
        //     let ageLabel = $$('.ant-form-item-required')[2].getText();
        //     expect(ageLabel).toEqual('3. How old is your Hero?');
        //  });
        //
        it('TC-022 Age field label = "3. How old is your Hero?"', function () {
            let label = $$(sel.requiredLabel)[2].getText();
            expect(label).toEqual(exp.ageLabel);
        });
    //
    // it('TC-023 Story Type label = "4. What type of story would you like to read?"', function () {
    //     let storyLabel = $$('.ant-form-item-required')[3].getText();
    //     expect(storyLabel).toEqual('4. What type of story would you like to read?');
    // });
    //
    it('TC-023 Story Type label = "4. What type of story would you like to read?"', function () {
        let label = $$(sel.requiredLabel)[3].getText();
        expect(label).toEqual(exp.storyLabel);
    });
    //
    // it('TC-024 Image label = "5. Upload an image (optional)"', function () {
    //     let imageLabel = $$('.ant-form-item-label')[4].getText();
    //     expect(imageLabel).toEqual('5. Upload an image (optional)');
    // });
    //
    it('TC-024 Image label = "5. Upload an image (optional)"', function () {
        let label = $$(sel.imageLabel)[4].getText();
        expect(label).toEqual(exp.imageLabel);
    });
//
//     it('TC-025 Submit button  label = "Create!"', function () {
//         let submitText = $$('.ant-btn')[0].getText();
//         expect(submitText).toEqual('Create!');
//     });
//
    it('TC-025 Submit button  label = "Create!"', function () {
        let submit = $$(sel.submit)[0].getText();
        expect(submit).toEqual(exp.submitText);
    });
});
