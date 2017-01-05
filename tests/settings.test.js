import { toggleSettingsUi, setLoadErrorInSettings } from '../actions/index.js'
import settings from '../reducers/settings'

const defaultState = {
	hiddenUi: true, 
	loadArchiveErrorMsg: undefined
}

test('default settings state', () => {
	expect(settings(undefined, {type: undefined})).toEqual(defaultState)
})

test('toggleSettingsUi flips hiddenUi', () => {
	expect(settings({hiddenUi: true}, toggleSettingsUi())).toEqual({hiddenUi: false})
	expect(settings({hiddenUi: false}, toggleSettingsUi())).toEqual({hiddenUi: true})
})

test('toggleSettingsUi doesnt change error msg', () => {
	expect(settings({loadArchiveErrorMsg: 'hello'}, toggleSettingsUi()).loadArchiveErrorMsg).toEqual('hello')
})

test('setLoadErrorInSettings sets error msg', () => {
	expect(settings(undefined, setLoadErrorInSettings('new msg')).loadArchiveErrorMsg).toEqual('new msg')
})
