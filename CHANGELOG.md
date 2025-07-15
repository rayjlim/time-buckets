# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.11.2](https://github.com/rayjlim/time-buckets/compare/v2.11.1...v2.11.2) (2025-07-15)


### Bug Fixes

* **frontend:** [#106](https://github.com/rayjlim/time-buckets/issues/106)💄 adjust layout and styling across components ([cd0c9cb](https://github.com/rayjlim/time-buckets/commit/cd0c9cb899a320e238c4aba1f7f1325e7700f9cd))
* **timeline:** 💄[#106](https://github.com/rayjlim/time-buckets/issues/106)  extract inline styles to css file for TimelineView ([92345f5](https://github.com/rayjlim/time-buckets/commit/92345f5f3a4636fe2a61a09e012d36b51000c6a1))

### [2.11.1](https://github.com/rayjlim/time-buckets/compare/v2.11.0...v2.11.1) (2025-05-07)

## [2.11.0](https://github.com/rayjlim/time-buckets/compare/v2.10.0...v2.11.0) (2025-05-07)


### Features

* **SearchForm:** ✨[#92](https://github.com/rayjlim/time-buckets/issues/92) add rows per page selection for pagination ([dc5e259](https://github.com/rayjlim/time-buckets/commit/dc5e259b94c2ee86ba2f9e1a8298c9a02e0694ea))


### Bug Fixes

* **types:** update react-visjs-timeline type definitions ([cbd038f](https://github.com/rayjlim/time-buckets/commit/cbd038f8d0ed83ff85bdf8986613bfed969efded))

## [2.10.0](https://github.com/rayjlim/time-buckets/compare/v2.9.0...v2.10.0) (2025-04-17)


### Features

* 🚧 [#18](https://github.com/rayjlim/time-buckets/issues/18) add react-visjs-timeline and vis dependencies ([3df0791](https://github.com/rayjlim/time-buckets/commit/3df0791ea2333c8763f789597b46d7b837ff7eab))
* **GoalController:** ✨ [#18](https://github.com/rayjlim/time-buckets/issues/18) update pagination logic to use dynamic pageSize ([fc65aad](https://github.com/rayjlim/time-buckets/commit/fc65aad4dd8772c9b213bae2ab1d70d33d4d5ae5))
* **GoalController:** 🚧 [#18](https://github.com/rayjlim/time-buckets/issues/18) add updateTimeframe method to handle goal timeframe updates ([7764fb3](https://github.com/rayjlim/time-buckets/commit/7764fb3544ee1399ee2ceeeec42f68670a243e0c))
* **navigation:** [#18](https://github.com/rayjlim/time-buckets/issues/18) add timeline link and route ([22643a2](https://github.com/rayjlim/time-buckets/commit/22643a273cee38ad1fe13698b1d41dc7b404802e))
* **TimelineView:** ✨ [#18](https://github.com/rayjlim/time-buckets/issues/18) add support for filtering incomplete goals and improve timeline interaction ([d8cd100](https://github.com/rayjlim/time-buckets/commit/d8cd1005da22b32f4ebce2f940ffe9414e4a38e8))
* **TimelineView:** ✨ [#18](https://github.com/rayjlim/time-buckets/issues/18) add toast notifications and improve timeline interactions ([6c41c1e](https://github.com/rayjlim/time-buckets/commit/6c41c1ea273f3845dd589f19d611569237ec756b))

## [2.9.0](https://github.com/rayjlim/time-buckets/compare/v2.8.0...v2.9.0) (2025-04-15)


### Features

* 🐛 add BASENAME env variable and update SearchForm ([200f7b6](https://github.com/rayjlim/time-buckets/commit/200f7b628f234b022004c570a9bd4c84905cc057))
* **markdown:** ✨ [#33](https://github.com/rayjlim/time-buckets/issues/33) add MarkdownDisplay component and integrate it into Goal components ([7c5f47a](https://github.com/rayjlim/time-buckets/commit/7c5f47adfc553997edb45f6280781f59d24a6c9f))
* **views:** ✨ [#13](https://github.com/rayjlim/time-buckets/issues/13) add print format toggle to CompletedGoalsView ([88254f7](https://github.com/rayjlim/time-buckets/commit/88254f70879d7a0400c9ab9d4ff44f20339c4226))


### Bug Fixes

* 🐛 update GoalController query and TreeDrawer anchor position ([4de62f9](https://github.com/rayjlim/time-buckets/commit/4de62f91b46a27f8905964e57a31312dcab1f9b1))
* 🚑 add custom marker icon and improve pagination logic for completed ([f302d36](https://github.com/rayjlim/time-buckets/commit/f302d366b4c557b10ce571f1c89dcac822832fc6))
* **Goal:** ♻️ migrate inline styles to CSS classes and clean up code ([f373fe5](https://github.com/rayjlim/time-buckets/commit/f373fe567756cbdffd07ac0d6b67f089b7f6725d))
* redo add LocalizationProvider for date handling ([572a3d7](https://github.com/rayjlim/time-buckets/commit/572a3d79c81524b7fc90278d9d783b5e7ae67830))

## [2.8.0](https://github.com/rayjlim/time-buckets/compare/v2.7.1...v2.8.0) (2025-04-09)


### Features

* **goals:** ✨ [#4](https://github.com/rayjlim/time-buckets/issues/4) add functionality to filter and display completed goals ([7a267a3](https://github.com/rayjlim/time-buckets/commit/7a267a3c508b67a2baea05ee6c24365815e9ee19))
* **routing:** ✨ [#4](https://github.com/rayjlim/time-buckets/issues/4) add react-router-dom and implement navigation ([bd93349](https://github.com/rayjlim/time-buckets/commit/bd933492bc42ee23ec32e13d6aca4097237a207a))

### [2.7.1](https://github.com/rayjlim/time-buckets/compare/v2.7.0...v2.7.1) (2025-04-08)


### Bug Fixes

* ✨ [#31](https://github.com/rayjlim/time-buckets/issues/31) clean up code and improve CSS consistency ([5b662d2](https://github.com/rayjlim/time-buckets/commit/5b662d26aa50a2dea0b9b65fd753acdbfe84d291))

## [2.7.0](https://github.com/rayjlim/time-buckets/compare/v2.6.2...v2.7.0) (2025-04-08)


### Features

* **frontend:** ✨ map marker clickable ([1825940](https://github.com/rayjlim/time-buckets/commit/18259404c50627197d513a4195a615daea1e70e7))

### [2.6.2](https://github.com/rayjlim/time-buckets/compare/v2.6.1...v2.6.2) (2025-04-07)

### [2.6.1](https://github.com/rayjlim/time-buckets/compare/v2.6.0...v2.6.1) (2025-03-31)


### Bug Fixes

* add build badge to readme ([c7ac394](https://github.com/rayjlim/time-buckets/commit/c7ac394fb18eb89d90751522b4633fcb4f3170aa))
* add Github build actions ([1df1a4b](https://github.com/rayjlim/time-buckets/commit/1df1a4be0c20d7ceee4744ec68927f37e81d4fe9))
* config issue ([95e8a70](https://github.com/rayjlim/time-buckets/commit/95e8a70792035ff261d7e6961bd58bff9fef60f9))
* get vitest running ([ea08740](https://github.com/rayjlim/time-buckets/commit/ea0874039b5a915119f8fd0bd999286d787234d9))
* install vitest ([4acc50b](https://github.com/rayjlim/time-buckets/commit/4acc50b6eff1423965c7a81712576429b74f462b))
* package.json react version issues ([da16c1a](https://github.com/rayjlim/time-buckets/commit/da16c1a2b7b9361f7e828f1b6a4ac7c4f55983c0))
* remove unused ([564dd90](https://github.com/rayjlim/time-buckets/commit/564dd9064e79dadb9fa4bcd405a1ca74e18fb547))
* vitest config ([91b48bb](https://github.com/rayjlim/time-buckets/commit/91b48bb7c304cc0a58ff6e6ae66d1adc77ecffef))
* vitest configs ([bc49eef](https://github.com/rayjlim/time-buckets/commit/bc49eef6c266f69478f6d66175e5923cba7d9027))

## [2.6.0](https://github.com/rayjlim/time-buckets/compare/v2.5.0...v2.6.0) (2025-03-17)


### Features

* [#36](https://github.com/rayjlim/time-buckets/issues/36) show green marker for locations completed ([a1d033e](https://github.com/rayjlim/time-buckets/commit/a1d033e0a1432c9ff6147a38576a930d562fc447))
* [#79](https://github.com/rayjlim/time-buckets/issues/79) validate gps_coords ([e14548f](https://github.com/rayjlim/time-buckets/commit/e14548f55e83e8aa7b4c52c1424bd26d8c332da5))
* [#89](https://github.com/rayjlim/time-buckets/issues/89) link to google in gps coords ([89ea955](https://github.com/rayjlim/time-buckets/commit/89ea955619055a10935e1fc8ac24f20c50994dbc))

## [2.5.0](https://github.com/rayjlim/time-buckets/compare/v2.4.2...v2.5.0) (2025-03-16)


### Features

* [#17](https://github.com/rayjlim/time-buckets/issues/17) make date_added a date picker ([f91e9ba](https://github.com/rayjlim/time-buckets/commit/f91e9bada4ac2f5c6de54005c738fa4bfd59a209))
* [#80](https://github.com/rayjlim/time-buckets/issues/80) pass the new goal up through callers ([0f98c94](https://github.com/rayjlim/time-buckets/commit/0f98c94ca9f921800ef273d375a56084e1a352d6))
* [#80](https://github.com/rayjlim/time-buckets/issues/80) return parent info for newly added ([74302ed](https://github.com/rayjlim/time-buckets/commit/74302edaccb7e5908e327d57aa77d07de0971600))


### Bug Fixes

* [#86](https://github.com/rayjlim/time-buckets/issues/86) default added_at to today, clean up param passing ([0bc6e8c](https://github.com/rayjlim/time-buckets/commit/0bc6e8c9bd8d9091e872f72642573e041218cf0c))
* add 'national park' ([ae97154](https://github.com/rayjlim/time-buckets/commit/ae97154dd46fd6e3007ad2a34eadb536352ca1a8))
* refactor addgoalform ([cdd68e1](https://github.com/rayjlim/time-buckets/commit/cdd68e1e2c9a8b109920a163d7bb775eff365712))

### [2.4.2](https://github.com/rayjlim/time-buckets/compare/v2.4.1...v2.4.2) (2025-02-02)


### Bug Fixes

* [#74](https://github.com/rayjlim/time-buckets/issues/74) search option for locations without coords ([c7529c8](https://github.com/rayjlim/time-buckets/commit/c7529c8843a9fe88dabc191f0c72c11bd2eb6475))
* [#85](https://github.com/rayjlim/time-buckets/issues/85) trigger drawer close ([dc81c7e](https://github.com/rayjlim/time-buckets/commit/dc81c7e49cb1c4d93a7f2bbb10bf7e61397f0f22))
* add push history ([d50a9db](https://github.com/rayjlim/time-buckets/commit/d50a9dbcbf23fed7b60c87445ce5a1521539efb3))
* default tree view to root ([338a3ab](https://github.com/rayjlim/time-buckets/commit/338a3abb786df721c015777bf7dcddf9ff9a23f2))
* show count total in pagination ([4a2e4fb](https://github.com/rayjlim/time-buckets/commit/4a2e4fb382348c0da89e75aa270f60917f913814))

### [2.4.1](https://github.com/rayjlim/time-buckets/compare/v2.4.0...v2.4.1) (2025-02-01)


### Bug Fixes

*  tree view toggle drawer close and submit on choice ([62ddaef](https://github.com/rayjlim/time-buckets/commit/62ddaef593a09f2960bdc763e482b0ca51d84c9c))
* [#75](https://github.com/rayjlim/time-buckets/issues/75) show CSV example ([42e97f0](https://github.com/rayjlim/time-buckets/commit/42e97f0e392fea7247a2088d313580b56ee2fd82))
* [#76](https://github.com/rayjlim/time-buckets/issues/76) order tree alphabetical ([61ff5ba](https://github.com/rayjlim/time-buckets/commit/61ff5bab126a2068d09fda0a759bb4c0a11bd9d9))
* add id field to search form ([07f329d](https://github.com/rayjlim/time-buckets/commit/07f329d0d3c5132b3a275aa9da0e6e19cb2a51f9))
* extract SearchForm to component ([882a13e](https://github.com/rayjlim/time-buckets/commit/882a13e98e0a966861c2fb37d4407b865df50c6e))
* sort of results; clear search form button; move tags to constants ([a47e5b1](https://github.com/rayjlim/time-buckets/commit/a47e5b1bca986c5ffe7d2cb367bea3f4304ae540))

## [2.4.0](https://github.com/rayjlim/time-buckets/compare/v2.3.0...v2.4.0) (2025-01-29)


### Features

* [#88](https://github.com/rayjlim/time-buckets/issues/88) pagination for search ([c1a401e](https://github.com/rayjlim/time-buckets/commit/c1a401ea4e7022e1e7b5e2347990af9afaf99886))


### Bug Fixes

* icons for ios homescreen ([c08db7c](https://github.com/rayjlim/time-buckets/commit/c08db7c06a6a58e1ba4f31cae7ff94a963ba0b7a))

## [2.3.0](https://github.com/rayjlim/time-buckets/compare/v2.2.0...v2.3.0) (2025-01-29)


### Features

* [#3](https://github.com/rayjlim/time-buckets/issues/3) show child count ([7c81a40](https://github.com/rayjlim/time-buckets/commit/7c81a40504bfa28436f13024cfc7bfa9dde8a7d1))


### Bug Fixes

* search by type ([f96d8d7](https://github.com/rayjlim/time-buckets/commit/f96d8d7bb2a3da9c4b2e307b92f36be17ce5ef6a))

## [2.2.0](https://github.com/rayjlim/time-buckets/compare/v2.1.0...v2.2.0) (2025-01-28)


### Features

* [#87](https://github.com/rayjlim/time-buckets/issues/87) impl nuqs for search form state management ([2bc2931](https://github.com/rayjlim/time-buckets/commit/2bc2931ebacec8ab7ad00d176e1fdaec0acbae2d))


### Bug Fixes

* lint error ([1f3c724](https://github.com/rayjlim/time-buckets/commit/1f3c7249559147f129e935fa0f21884e8f11c3a1))

## [2.1.0](https://github.com/rayjlim/time-buckets/compare/v2.0.1...v2.1.0) (2025-01-28)


### Features

* [#72](https://github.com/rayjlim/time-buckets/issues/72) show custom marker for primary ([b84c041](https://github.com/rayjlim/time-buckets/commit/b84c041b3f696b4b3aee8b0115874b04aafe4ed2))


### Bug Fixes

* missed image ([69828bd](https://github.com/rayjlim/time-buckets/commit/69828bd300f91d8ab86a81d50a05a58388451510))
* update db rows ([75966f6](https://github.com/rayjlim/time-buckets/commit/75966f6463f45ef38f3a91339a767b8fe0cb6725))

### [2.0.1](https://github.com/rayjlim/time-buckets/compare/v2.0.0...v2.0.1) (2025-01-28)

## [2.0.0](https://github.com/rayjlim/time-buckets/compare/v1.9.4...v2.0.0) (2025-01-28)

### [1.9.4](https://github.com/rayjlim/time-buckets/compare/v1.9.3...v1.9.4) (2025-01-28)

### [1.9.3](https://github.com/rayjlim/time-buckets/compare/v1.9.2...v1.9.3) (2025-01-28)


### Features

* [#55](https://github.com/rayjlim/time-buckets/issues/55) show parent name in display ([2bb33b1](https://github.com/rayjlim/time-buckets/commit/2bb33b1acde1850c8b348af421d63f299019b3e8))
* [#81](https://github.com/rayjlim/time-buckets/issues/81) add completed at date field ([111ef6a](https://github.com/rayjlim/time-buckets/commit/111ef6ae746b74ec94e1fdec713e8e9724613503))


### Bug Fixes

* [#41](https://github.com/rayjlim/time-buckets/issues/41) convert Type edits to radio buttons ([a264649](https://github.com/rayjlim/time-buckets/commit/a2646490fa50c502f35a9ad297d57f5e896a07e7))
* [#82](https://github.com/rayjlim/time-buckets/issues/82) horizontal inline add form ([cfb6b3e](https://github.com/rayjlim/time-buckets/commit/cfb6b3e0f8b24f87cc03fcd742d0f5ed3b21208f))
* new favicon image ([8e7655d](https://github.com/rayjlim/time-buckets/commit/8e7655d9622756a5cc00336dc382b76ca2e62546))

## [1.10.0](https://github.com/rayjlim/time-buckets/compare/v1.9.2...v1.10.0) (2025-01-28)


### Features

* [#55](https://github.com/rayjlim/time-buckets/issues/55) show parent name in display ([2bb33b1](https://github.com/rayjlim/time-buckets/commit/2bb33b1acde1850c8b348af421d63f299019b3e8))
* [#81](https://github.com/rayjlim/time-buckets/issues/81) add completed at date field ([111ef6a](https://github.com/rayjlim/time-buckets/commit/111ef6ae746b74ec94e1fdec713e8e9724613503))


### Bug Fixes

* [#41](https://github.com/rayjlim/time-buckets/issues/41) convert Type edits to radio buttons ([a264649](https://github.com/rayjlim/time-buckets/commit/a2646490fa50c502f35a9ad297d57f5e896a07e7))
* [#82](https://github.com/rayjlim/time-buckets/issues/82) horizontal inline add form ([cfb6b3e](https://github.com/rayjlim/time-buckets/commit/cfb6b3e0f8b24f87cc03fcd742d0f5ed3b21208f))
* new favicon image ([8e7655d](https://github.com/rayjlim/time-buckets/commit/8e7655d9622756a5cc00336dc382b76ca2e62546))

## [1.10.0](https://github.com/rayjlim/time-buckets/compare/v1.9.2...v1.10.0) (2025-01-27)


### Features

* [#55](https://github.com/rayjlim/time-buckets/issues/55) show parent name in display ([2bb33b1](https://github.com/rayjlim/time-buckets/commit/2bb33b1acde1850c8b348af421d63f299019b3e8))


### Bug Fixes

* [#41](https://github.com/rayjlim/time-buckets/issues/41) convert Type edits to radio buttons ([a264649](https://github.com/rayjlim/time-buckets/commit/a2646490fa50c502f35a9ad297d57f5e896a07e7))
* [#82](https://github.com/rayjlim/time-buckets/issues/82) horizontal inline add form ([cfb6b3e](https://github.com/rayjlim/time-buckets/commit/cfb6b3e0f8b24f87cc03fcd742d0f5ed3b21208f))
* new favicon image ([8e7655d](https://github.com/rayjlim/time-buckets/commit/8e7655d9622756a5cc00336dc382b76ca2e62546))

### [1.9.2](https://github.com/rayjlim/time-buckets/compare/v1.9.1...v1.9.2) (2025-01-22)


### Bug Fixes

* csvparse to take parent id ([7418037](https://github.com/rayjlim/time-buckets/commit/7418037b2b537ec607809dbed6b8f274fd5894d4))
* put type defs in one place ([cdc1b09](https://github.com/rayjlim/time-buckets/commit/cdc1b09164deda9e8bead04e336a26c853d40627))

### [1.9.1](https://github.com/rayjlim/time-buckets/compare/v1.9.0...v1.9.1) (2025-01-22)


### Features

* ✨ convert to vite to support leaflet ([5e65bab](https://github.com/rayjlim/time-buckets/commit/5e65babf18edb13f858f917ef0cc442e93e53a1d))
* add CsvQuickParser ([ae95237](https://github.com/rayjlim/time-buckets/commit/ae95237c97cbe505c3ca5fd7554e83d824e31f78))
* add theme and dev ribbon ([b87c738](https://github.com/rayjlim/time-buckets/commit/b87c738f3f15f0ee798ba04cd892b86d064d37bb))
* add treedrawer ([db5f6e7](https://github.com/rayjlim/time-buckets/commit/db5f6e7134a47ecb228a6b4e73459f6e1b0eaa55))
* db query for children of location ([bf98162](https://github.com/rayjlim/time-buckets/commit/bf9816235fa95eed52504ae24aff72b32df33401))
* dynamic tree by parent ([67a2144](https://github.com/rayjlim/time-buckets/commit/67a2144a312e0fc5b172af6793d9e3f10298673d))
* get goal list page to show goals ([14744a0](https://github.com/rayjlim/time-buckets/commit/14744a0ca7835c1a04aecdbe7286ff37202b0715))
* onClick in tree, update view ([35f2c83](https://github.com/rayjlim/time-buckets/commit/35f2c83aee61c70e5842667e57fac237cf718ae2))
* show map with children of current id ([7eda07e](https://github.com/rayjlim/time-buckets/commit/7eda07e082cb8b856451ac191e64ae9156172786))


### Bug Fixes

* [#61](https://github.com/rayjlim/time-buckets/issues/61) search by id logic ([2bac4c1](https://github.com/rayjlim/time-buckets/commit/2bac4c17a8a43448d9ff6c292f30f3069b62e10e))
* remove unused ([f77285c](https://github.com/rayjlim/time-buckets/commit/f77285c8b8311e716c42186da759a51d0e5a667c))
* typescript errors ([465c801](https://github.com/rayjlim/time-buckets/commit/465c8017dd080815e01b6fa5a90cf845bb1ff51e))
* typescript fixes ([ff09f9a](https://github.com/rayjlim/time-buckets/commit/ff09f9a80d8e54b654ee06861388fe7414d913df))

## [1.10.0](https://github.com/rayjlim/time-buckets/compare/v1.9.0...v1.10.0) (2025-01-22)


### Features

* ✨ convert to vite to support leaflet ([5e65bab](https://github.com/rayjlim/time-buckets/commit/5e65babf18edb13f858f917ef0cc442e93e53a1d))
* add CsvQuickParser ([ae95237](https://github.com/rayjlim/time-buckets/commit/ae95237c97cbe505c3ca5fd7554e83d824e31f78))
* add theme and dev ribbon ([b87c738](https://github.com/rayjlim/time-buckets/commit/b87c738f3f15f0ee798ba04cd892b86d064d37bb))
* add treedrawer ([db5f6e7](https://github.com/rayjlim/time-buckets/commit/db5f6e7134a47ecb228a6b4e73459f6e1b0eaa55))
* db query for children of location ([bf98162](https://github.com/rayjlim/time-buckets/commit/bf9816235fa95eed52504ae24aff72b32df33401))
* dynamic tree by parent ([67a2144](https://github.com/rayjlim/time-buckets/commit/67a2144a312e0fc5b172af6793d9e3f10298673d))
* get goal list page to show goals ([14744a0](https://github.com/rayjlim/time-buckets/commit/14744a0ca7835c1a04aecdbe7286ff37202b0715))
* onClick in tree, update view ([35f2c83](https://github.com/rayjlim/time-buckets/commit/35f2c83aee61c70e5842667e57fac237cf718ae2))
* show map with children of current id ([7eda07e](https://github.com/rayjlim/time-buckets/commit/7eda07e082cb8b856451ac191e64ae9156172786))


### Bug Fixes

* [#61](https://github.com/rayjlim/time-buckets/issues/61) search by id logic ([2bac4c1](https://github.com/rayjlim/time-buckets/commit/2bac4c17a8a43448d9ff6c292f30f3069b62e10e))
* remove unused ([f77285c](https://github.com/rayjlim/time-buckets/commit/f77285c8b8311e716c42186da759a51d0e5a667c))
* typescript errors ([465c801](https://github.com/rayjlim/time-buckets/commit/465c8017dd080815e01b6fa5a90cf845bb1ff51e))
* typescript fixes ([ff09f9a](https://github.com/rayjlim/time-buckets/commit/ff09f9a80d8e54b654ee06861388fe7414d913df))

## [1.10.0](https://github.com/rayjlim/time-buckets/compare/v1.9.0...v1.10.0) (2025-01-21)


### Features

* ✨ convert to vite to support leaflet ([5e65bab](https://github.com/rayjlim/time-buckets/commit/5e65babf18edb13f858f917ef0cc442e93e53a1d))
* add CsvQuickParser ([ae95237](https://github.com/rayjlim/time-buckets/commit/ae95237c97cbe505c3ca5fd7554e83d824e31f78))
* add theme and dev ribbon ([b87c738](https://github.com/rayjlim/time-buckets/commit/b87c738f3f15f0ee798ba04cd892b86d064d37bb))
* add treedrawer ([db5f6e7](https://github.com/rayjlim/time-buckets/commit/db5f6e7134a47ecb228a6b4e73459f6e1b0eaa55))
* db query for children of location ([bf98162](https://github.com/rayjlim/time-buckets/commit/bf9816235fa95eed52504ae24aff72b32df33401))
* dynamic tree by parent ([67a2144](https://github.com/rayjlim/time-buckets/commit/67a2144a312e0fc5b172af6793d9e3f10298673d))
* get goal list page to show goals ([14744a0](https://github.com/rayjlim/time-buckets/commit/14744a0ca7835c1a04aecdbe7286ff37202b0715))
* onClick in tree, update view ([35f2c83](https://github.com/rayjlim/time-buckets/commit/35f2c83aee61c70e5842667e57fac237cf718ae2))
* show map with children of current id ([7eda07e](https://github.com/rayjlim/time-buckets/commit/7eda07e082cb8b856451ac191e64ae9156172786))


### Bug Fixes

* [#61](https://github.com/rayjlim/time-buckets/issues/61) search by id logic ([2bac4c1](https://github.com/rayjlim/time-buckets/commit/2bac4c17a8a43448d9ff6c292f30f3069b62e10e))
* remove unused ([f77285c](https://github.com/rayjlim/time-buckets/commit/f77285c8b8311e716c42186da759a51d0e5a667c))
* typescript errors ([465c801](https://github.com/rayjlim/time-buckets/commit/465c8017dd080815e01b6fa5a90cf845bb1ff51e))
* typescript fixes ([ff09f9a](https://github.com/rayjlim/time-buckets/commit/ff09f9a80d8e54b654ee06861388fe7414d913df))

## [1.10.0](https://github.com/rayjlim/time-buckets/compare/v1.9.0...v1.10.0) (2025-01-17)


### Features

* ✨ convert to vite to support leaflet ([5e65bab](https://github.com/rayjlim/time-buckets/commit/5e65babf18edb13f858f917ef0cc442e93e53a1d))
* add CsvQuickParser ([ae95237](https://github.com/rayjlim/time-buckets/commit/ae95237c97cbe505c3ca5fd7554e83d824e31f78))
* add theme and dev ribbon ([b87c738](https://github.com/rayjlim/time-buckets/commit/b87c738f3f15f0ee798ba04cd892b86d064d37bb))
* get goal list page to show goals ([14744a0](https://github.com/rayjlim/time-buckets/commit/14744a0ca7835c1a04aecdbe7286ff37202b0715))


### Bug Fixes

* typescript errors ([465c801](https://github.com/rayjlim/time-buckets/commit/465c8017dd080815e01b6fa5a90cf845bb1ff51e))
* typescript fixes ([ff09f9a](https://github.com/rayjlim/time-buckets/commit/ff09f9a80d8e54b654ee06861388fe7414d913df))

## [1.9.0](https://github.com/rayjlim/time-buckets/compare/v1.8.0...v1.9.0) (2025-01-13)


### Features

* ✨new component for csvquickparser ([6fd37f7](https://github.com/rayjlim/time-buckets/commit/6fd37f73b0b139e145eb511550043141dd9a6d9d))


### Bug Fixes

* clear title for child search ([d634862](https://github.com/rayjlim/time-buckets/commit/d6348627622063a7cb9cef0bebc4a557c7ff63d2))

## [1.8.0](https://github.com/rayjlim/time-buckets/compare/v1.7.0...v1.8.0) (2025-01-08)


### Features

* store gps coords and zoom level ([f3d5ebe](https://github.com/rayjlim/time-buckets/commit/f3d5ebeb3030e0a18a49e762aa55f2eae220ac16))


### Bug Fixes

* simplify goal display and search by ([4df2aee](https://github.com/rayjlim/time-buckets/commit/4df2aeef2ee62e4856cba8df91583187439f8991))

## [1.7.0](https://github.com/rayjlim/time-buckets/compare/v1.6.2...v1.7.0) (2025-01-07)


### Features

* [#46](https://github.com/rayjlim/time-buckets/issues/46) child add form option in goal view ([80865a7](https://github.com/rayjlim/time-buckets/commit/80865a7de1e9273d8ab8a59f58df976d9bb72ac2))
* link location to query children ([52d60b3](https://github.com/rayjlim/time-buckets/commit/52d60b336921311c26d79af43b2795fea0d5fecd))

### [1.6.2](https://github.com/rayjlim/time-buckets/compare/v1.6.1...v1.6.2) (2024-12-27)

### [1.6.1](https://github.com/rayjlim/time-buckets/compare/v1.6.0...v1.6.1) (2024-12-27)


### Bug Fixes

* [#14](https://github.com/rayjlim/time-buckets/issues/14) add Marked package ([148e6ac](https://github.com/rayjlim/time-buckets/commit/148e6acd4ec2ad594767b04ce5bfbfb04e8d0266))
* [#14](https://github.com/rayjlim/time-buckets/issues/14) display note support for markdown format ([eea78db](https://github.com/rayjlim/time-buckets/commit/eea78dbff7571df619745235d01b5a3756c1a750))
* version-update script for windows ([90ae204](https://github.com/rayjlim/time-buckets/commit/90ae204e306c5cca33dc3d6c470ed48cfd88d542))

## [1.6.0](https://github.com/rayjlim/time-buckets/compare/v1.5.0...v1.6.0) (2024-12-26)


### Features

* [#1](https://github.com/rayjlim/time-buckets/issues/1) basic heirarchy of locations ([32acf39](https://github.com/rayjlim/time-buckets/commit/32acf395c4d32f3a95c5fcf925956397d6fd3250))
* [#21](https://github.com/rayjlim/time-buckets/issues/21) basic search by title, type, tags ([07f5460](https://github.com/rayjlim/time-buckets/commit/07f5460dccc7d8c8869c731b6a3d89a51894dd90))
* Goal files setup ([231f9b1](https://github.com/rayjlim/time-buckets/commit/231f9b159ef4187e01fd86922b1f982cee666f75))


### Bug Fixes

* [#1](https://github.com/rayjlim/time-buckets/issues/1) change type to int in db ([4cad9a8](https://github.com/rayjlim/time-buckets/commit/4cad9a8d35cb49620c73ce9f07779f9d8d05e18e))
* [#1](https://github.com/rayjlim/time-buckets/issues/1) update sql ([cf09b6d](https://github.com/rayjlim/time-buckets/commit/cf09b6db241cfe82dfed41ee51de58e223bc5833))
* [#22](https://github.com/rayjlim/time-buckets/issues/22) backend and frontend for add simple goal ([7c4f2cd](https://github.com/rayjlim/time-buckets/commit/7c4f2cd6992ecbf44f47d926c43766b5573bd025))
* [#23](https://github.com/rayjlim/time-buckets/issues/23) delete items ([96522c2](https://github.com/rayjlim/time-buckets/commit/96522c2951e6765982a0fd8516138726c137e317))
* add meta data to search results ([72c0f97](https://github.com/rayjlim/time-buckets/commit/72c0f97aa3e62917c7aa7165c7f1ec8ce36bd3a9))
* article date parser format error ([acf42ea](https://github.com/rayjlim/time-buckets/commit/acf42eafcf63db4d1f0a0893f2e4445343008a01))
* base item is Goal ([2607edc](https://github.com/rayjlim/time-buckets/commit/2607edc0412ab806def750ecac1e3c22dd96f661))
* base project setup ([ebaeae3](https://github.com/rayjlim/time-buckets/commit/ebaeae3e0a4f228fa6c486aea24c638d6eb4793e))
* carriage returns and page title ([d3086bc](https://github.com/rayjlim/time-buckets/commit/d3086bc4ac96712af8f475461a48cdb50aed4469))
* creation of goal needed default fields ([6b8dd21](https://github.com/rayjlim/time-buckets/commit/6b8dd211dad3cef4c0920cdf9c1b55854725a687))
* logo and favicon ([88e2ab8](https://github.com/rayjlim/time-buckets/commit/88e2ab8f2203be660942c1b44c2f7d21e111c6dc))
* move logic to custom hook pattern ([2f22edc](https://github.com/rayjlim/time-buckets/commit/2f22edce96c78c966eb0f91b48d5420526bd88f5))
* remove unused, change carriage returns ([4a6e503](https://github.com/rayjlim/time-buckets/commit/4a6e50343df4ebed41e56fc894530dca4db992e3))
* save updates ([5ad25bd](https://github.com/rayjlim/time-buckets/commit/5ad25bdf41aaa15ab5da5accecdd5ee3ca03b6f6))
* show single goal by id ([7af8e91](https://github.com/rayjlim/time-buckets/commit/7af8e910b6142530dfad62b9081c86dd6960f0ef))
* update test for date format ([ed967bd](https://github.com/rayjlim/time-buckets/commit/ed967bd904b7df3e40bf1a970d767636e67d1c0f))
