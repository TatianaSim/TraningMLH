import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function () {
            browser.url('');
        })

        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
            expect(title).toEqual(exp.title);
        });

        // it('TC-001 Title is correct ', function () {
        //     browser.url('https://qa-apps.netlify.app/hero');
        //     let title = browser.getTitle();
        //     browser.pause(2000);
        //     expect(title).toEqual(exp.title);
        // });

    });

    describe('Elements exist', function () {

        // it('TC-002 Header is present ', function () {
        //     let header = $('h3').isDisplayed();
        //     expect(header).toEqual(true);
        // });

        it('TC-002 Header is present ', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });


        // it('TC-003 Instruction is present ', function () {
        //     let instruction = $('p').isDisplayed();
        //     expect(instruction).toEqual(true);
        // });

        it('TC-003 Instruction is present ', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        // it('TC-004 Name field label is present', function () {
        //     let label = $$('.ant-form-item-required')[0].isDisplayed();
        //     expect(label).toEqual(true);
        // });

        it('TC-004 Name field label is present', function () {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        // it('TC-005 Name field is present', function () {
        //     let name = $('#name')[0].isDisplayed();
        //     expect(name).toEqual(true);
        // });

        it('TC-005 Name field is present', function () {
            let name = $$(sel.name)[0].isDisplayed();
            expect(name).toEqual(true);
        });

        // it('TC-006 Gender radio buttons  label is present', function () {
        //     let label = $$('.ant-form-item-required')[1].isDisplayed();
        //     expect(label).toEqual(true);
        // });

        it('TC-006 Gender radio buttons  label is present', function () {
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        // it('TC-007.a Gender radio button he is present', function () {
        //     let buttonHe = $$('.ant-radio-inner')[0].isDisplayed();
        //     expect(buttonHe).toEqual(true);
        // });

        it('TC-007.a Gender radio button he is present', function () {
            let buttonHe = $$(sel.radioButton)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        // it('TC-007.b Gender radio button she is present', function () {
        //     let buttonShe = $$('.ant-radio-inner')[1].isDisplayed();
        //     expect(buttonShe).toEqual(true);
        // });

        it('TC-007.b Gender radio button she is present', function () {
            let buttonShe = $$(sel.radioButton)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        // it('TC-007.c Gender radio button it is present', function () {
        //     let buttonIt = $$('.ant-radio-inner')[2].isDisplayed();
        //     expect(buttonIt).toEqual(true);
        // });

        it('TC-007.c Gender radio button it is present', function () {
            let buttonIt = $$(sel.radioButton)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        // it('TC-008 Age field  label is present', function () {
        //         let age = $('#age').isDisplayed();
        //         expect(age).toEqual(true);
        //     });

        it('TC-008 Age field  label is present', function () {
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        // it('TC-009 Age field  is present', function () {
        //     let label = $$('.ant-form-item-control-input')[2].isDisplayed();
        //     expect(label).toEqual(true);
        // });

        it('TC-009 Age field  is present', function () {
            let label = $$(sel.fieldName)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-010 Story Type dropdown label is present', function () {
            browser.url('');
            let requiredLabel = $$(sel.requiredLabel)[3].isDisplayed();
            expect(requiredLabel).toEqual(true);
        });

        // it('TC-010 Story Type dropdown label is present', function () {
        //     browser.url('');
        //     let requiredLabel = $$('.ant-form-item-required')[3].isDisplayed();
        //     expect(requiredLabel).toEqual(true);
        // });

        // it('TC-011 Story Type dropdown is present', function () {
        //     browser.url('');
        //     let dropdownStory = $$('.ant-select')[0].isDisplayed();
        //     expect(dropdownStory).toEqual(true);
        // });

        it('TC-011 Story Type dropdown is present', function () {
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        // it('TC-012 Image field label is present', function () {
        //     let imageLabel = $$('.ant-form-item-label')[4].isDisplayed();
        //     expect(imageLabel).toEqual(true);
        // });

        it('TC-012 Image field label is present', function () {
            let imageLabel = $$(sel.imageLabel)[4].isDisplayed();
            expect(imageLabel).toEqual(true);
        });

        // it('TC-013 Image field  is present', function () {
        //     browser.url('');
        //     let imageField = $$('.ant-upload-select-picture-card')[0].isDisplayed();
        //     expect(imageField).toEqual(true);
        // });

        it('TC-013 Image field  is present', function () {
            let imageField = $$(sel.imageLabel)[0].isDisplayed();
            expect(imageField).toEqual(true);
        });

        // it('TC-014 Submit button  is present', function () {
        //     browser.url('');
        //     let submitButton = $$('.ant-btn')[0].isDisplayed();
        //     expect(submitButton).toEqual(true);
        // });

        it('TC-014 Submit button  is present', function () {
            let submit = $$(sel.submit)[0].isDisplayed();
            expect(submit).toEqual(true);
        });
    });
});