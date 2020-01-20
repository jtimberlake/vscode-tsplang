/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ShebangName = string

/**
 * Configures the current directory as a TSPLang extension plugin.
 */
export interface TsplangPluginSettings {
    /**
     * The name of this TSPLang plugin. Must not contain the characters `@ [ ] , ;` or whitespace.
     */
    name: string
    /**
     * Alternative names for this plugin.
     */
    aliases?: string[]
    /**
     * The license that applies to this plugin.
     */
    license?: string
    /**
     * One or more existing plugins that should be loaded with this plugin.
     */
    extends?: (ShebangName | PluginExtensionObject)[]
    /**
     * An array of reserved words for this plugin.
     */
    keywords?: string[]
}
/**
 * Contains rules to conditionally extend the given plugin.
 */
export interface PluginExtensionObject {
    /**
     * The plugin to extend.
     */
    plugin: string
    /**
     * An array of symbols to include. Includes all symbols if left empty.
     */
    include?: string[]
    /**
     * An array of symbols to exclude. Excludes no symbols if left empty.
     */
    exclude?: string[]
}
