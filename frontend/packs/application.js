/* eslint no-console:0 */

import { Application } from "stimulus"
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()

import { definitionsFromContext } from "stimulus/webpack-helpers"
require("stylesheets/application.scss")

const application = Application.start()
const context = require.context("controllers", true, /.js$/)
application.load(definitionsFromContext(context))

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)
