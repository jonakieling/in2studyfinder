<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'In2studyfinder',
    'Pi1',
    [\In2code\In2studyfinder\Controller\StudyCourseController::class => 'filter, getCoursesJson'],
    [\In2code\In2studyfinder\Controller\StudyCourseController::class => 'filter, getCoursesJson']
);

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'In2studyfinder',
    'FastSearch',
    [\In2code\In2studyfinder\Controller\StudyCourseController::class => 'fastSearch'],
    []
);

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'In2studyfinder',
    'Pi2',
    [\In2code\In2studyfinder\Controller\StudyCourseController::class => 'detail'],
    []
);

/*
Adds the Language Files from in2studyfinder_extend
*/
if (In2code\In2studyfinder\Utility\ExtensionUtility::isIn2studycoursesExtendLoaded()) {
    // Backend
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['EXT:in2studyfinder/Resources/Private/Language/locallang_db.xlf'][] =
        'EXT:in2studyfinder_extend/Resources/Private/Language/locallang_db.xlf';

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['de']['EXT:in2studyfinder/Resources/Private/Language/de.locallang_db.xlf'][] =
        'EXT:in2studyfinder_extend/Resources/Private/Language/de.locallang_db.xlf';

    // Frontend
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['EXT:in2studyfinder/Resources/Private/Language/locallang.xlf'][] =
        'EXT:in2studyfinder_extend/Resources/Private/Language/locallang.xlf';

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['de']['EXT:in2studyfinder/Resources/Private/Language/de.locallang.xlf'][] =
        'EXT:in2studyfinder_extend/Resources/Private/Language/de.locallang.xlf';
}

/**
 * Hook to show PluginInformation under a tt_content element in page module of type in2studyfinder
 */
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['in2studyfinder']
    = \In2code\In2studyfinder\Hooks\PluginPreview::class;

if (\In2code\In2studyfinder\Utility\ConfigurationUtility::isCachingEnabled()) {
    if (!is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder'])) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder'] = [];
    }
    if (!isset($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder']['frontend'])) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder']['frontend'] =
            \TYPO3\CMS\Core\Cache\Frontend\VariableFrontend::class;
    }
    if (!isset($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder']['groups'])) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['in2studyfinder']['groups'] =
            ['pages'];
    }
}
