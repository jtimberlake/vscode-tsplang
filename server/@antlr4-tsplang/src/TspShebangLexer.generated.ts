// Generated from ./TspShebangLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TspShebangLexer extends Lexer {
	public static readonly OPEN = 1;
	public static readonly CLOSE = 2;
	public static readonly DELIMITER = 3;
	public static readonly HORIZONTAL_WS = 4;
	public static readonly PLUGIN_FIRMWARE_START = 5;
	public static readonly PLUGIN = 6;
	public static readonly FIRMWARE = 7;
	public static readonly NODE_EQUALS = 8;
	public static readonly NODE = 9;
	public static readonly NODE_INDEX_OPEN = 10;
	public static readonly NODE_INDEX_CLOSE = 11;
	public static readonly NODE_NUMBER = 12;
	public static readonly PLUGIN_MODE = 1;
	public static readonly FIRMWARE_MODE = 2;
	public static readonly NODE_MODE = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "PLUGIN_MODE", "FIRMWARE_MODE", "NODE_MODE",
	];

	public static readonly ruleNames: string[] = [
		"HorizontalWhitespace", "OPEN", "CLOSE", "DELIMITER", "HORIZONTAL_WS", 
		"PLUGIN_SEMICOLON", "PLUGIN_CLOSE", "PLUGIN_FIRMWARE_START", "PLUGIN", 
		"PLUGIN_HORIZONTAL_WS", "FIRMWARE", "FIRMWARE_HORIZONTAL_WS", "NODE_CLOSE", 
		"NODE_EQUALS", "NODE", "NODE_INDEX_OPEN", "NODE_INDEX_CLOSE", "NODE_NUMBER", 
		"NODE_HORIZONTAL_WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#!'", undefined, undefined, undefined, "'@'", undefined, 
		undefined, "'='", undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN", "CLOSE", "DELIMITER", "HORIZONTAL_WS", "PLUGIN_FIRMWARE_START", 
		"PLUGIN", "FIRMWARE", "NODE_EQUALS", "NODE", "NODE_INDEX_OPEN", "NODE_INDEX_CLOSE", 
		"NODE_NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TspShebangLexer._LITERAL_NAMES, TspShebangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TspShebangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TspShebangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TspShebangLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return TspShebangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TspShebangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TspShebangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TspShebangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E\x99\b\x01" +
		"\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t" +
		"\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t" +
		"\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11" +
		"\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x047\n\x04" +
		"\x03\x05\x03\x05\x03\x06\x06\x06<\n\x06\r\x06\x0E\x06=\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x06\nQ\n\n\r\n\x0E\nR\x03\v\x06\vV\n\v" +
		"\r\v\x0E\vW\x03\v\x03\v\x03\v\x03\f\x06\f^\n\f\r\f\x0E\f_\x03\f\x03\f" +
		"\x06\fd\n\f\r\f\x0E\fe\x03\f\x03\f\x06\fj\n\f\r\f\x0E\fk\x03\f\x03\f\x03" +
		"\r\x06\rq\n\r\r\r\x0E\rr\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x05\x13\x8B\n\x13" +
		"\x03\x13\x06\x13\x8E\n\x13\r\x13\x0E\x13\x8F\x03\x14\x06\x14\x93\n\x14" +
		"\r\x14\x0E\x14\x94\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x06\x02\x02" +
		"\b\x02\x03\n\x02\x04\f\x02\x05\x0E\x02\x06\x10\x02\x02\x12\x02\x02\x14" +
		"\x02\x07\x16\x02\b\x18\x02\x02\x1A\x02\t\x1C\x02\x02\x1E\x02\x02 \x02" +
		"\n\"\x02\v$\x02\f&\x02\r(\x02\x0E*\x02\x02\x06\x02\x03\x04\x05\f\x05\x02" +
		"\v\v\x0E\x0E\"\"\x04\x02\f\f\x0F\x0F\x04\x02..==\n\x02\v\f\x0E\x0F\"\"" +
		"..==BB]]__\x03\x022;\x04\x02PPpp\x04\x02QQqq\x04\x02FFff\x04\x02GGgg\x04" +
		"\x02--//\x02\x9F\x02\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\f\x03" +
		"\x02\x02\x02\x02\x0E\x03\x02\x02\x02\x03\x10\x03\x02\x02\x02\x03\x12\x03" +
		"\x02\x02\x02\x03\x14\x03\x02\x02\x02\x03\x16\x03\x02\x02\x02\x03\x18\x03" +
		"\x02\x02\x02\x04\x1A\x03\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x05\x1E\x03" +
		"\x02\x02\x02\x05 \x03\x02\x02\x02\x05\"\x03\x02\x02\x02\x05$\x03\x02\x02" +
		"\x02\x05&\x03\x02\x02\x02\x05(\x03\x02\x02\x02\x05*\x03\x02\x02\x02\x06" +
		",\x03\x02\x02\x02\b.\x03\x02\x02\x02\n6\x03\x02\x02\x02\f8\x03\x02\x02" +
		"\x02\x0E;\x03\x02\x02\x02\x10A\x03\x02\x02\x02\x12F\x03\x02\x02\x02\x14" +
		"K\x03\x02\x02\x02\x16P\x03\x02\x02\x02\x18U\x03\x02\x02\x02\x1A]\x03\x02" +
		"\x02\x02\x1Cp\x03\x02\x02\x02\x1Ew\x03\x02\x02\x02 |\x03\x02\x02\x02\"" +
		"\x80\x03\x02\x02\x02$\x85\x03\x02\x02\x02&\x87\x03\x02\x02\x02(\x8A\x03" +
		"\x02\x02\x02*\x92\x03\x02\x02\x02,-\t\x02\x02\x02-\x07\x03\x02\x02\x02" +
		"./\x07%\x02\x02/0\x07#\x02\x0201\x03\x02\x02\x0212\b\x03\x02\x022\t\x03" +
		"\x02\x02\x0234\x07\x0F\x02\x0247\x07\f\x02\x0257\t\x03\x02\x0263\x03\x02" +
		"\x02\x0265\x03\x02\x02\x027\v\x03\x02\x02\x0289\t\x04\x02\x029\r\x03\x02" +
		"\x02\x02:<\x05\x06\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02" +
		"\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\b\x06\x03\x02@\x0F\x03" +
		"\x02\x02\x02AB\x05\f\x05\x02BC\x03\x02\x02\x02CD\b\x07\x04\x02DE\b\x07" +
		"\x05\x02E\x11\x03\x02\x02\x02FG\x05\n\x04\x02GH\x03\x02\x02\x02HI\b\b" +
		"\x06\x02IJ\b\b\x07\x02J\x13\x03\x02\x02\x02KL\x07B\x02\x02LM\x03\x02\x02" +
		"\x02MN\b\t\b\x02N\x15\x03\x02\x02\x02OQ\n\x05\x02\x02PO\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x17\x03\x02\x02" +
		"\x02TV\x05\x06\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\b\v\t\x02Z[\b\v\x03\x02[\x19" +
		"\x03\x02\x02\x02\\^\t\x06\x02\x02]\\\x03\x02\x02\x02^_\x03\x02\x02\x02" +
		"_]\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x070\x02\x02" +
		"bd\t\x06\x02\x02cb\x03\x02\x02\x02de\x03\x02\x02\x02ec\x03\x02\x02\x02" +
		"ef\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x070\x02\x02hj\t\x06\x02\x02ih" +
		"\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"lm\x03\x02\x02\x02mn\b\f\x07\x02n\x1B\x03\x02\x02\x02oq\x05\x06\x02\x02" +
		"po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tu\b\r\t\x02uv\b\r\x03\x02v\x1D\x03\x02\x02\x02wx\x05" +
		"\n\x04\x02xy\x03\x02\x02\x02yz\b\x0E\x06\x02z{\b\x0E\x07\x02{\x1F\x03" +
		"\x02\x02\x02|}\x07?\x02\x02}~\x03\x02\x02\x02~\x7F\b\x0F\x07\x02\x7F!" +
		"\x03\x02\x02\x02\x80\x81\t\x07\x02\x02\x81\x82\t\b\x02\x02\x82\x83\t\t" +
		"\x02\x02\x83\x84\t\n\x02\x02\x84#\x03\x02\x02\x02\x85\x86\x07]\x02\x02" +
		"\x86%\x03\x02\x02\x02\x87\x88\x07_\x02\x02\x88\'\x03\x02\x02\x02\x89\x8B" +
		"\t\v\x02\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03" +
		"\x02\x02\x02\x8C\x8E\t\x06\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90)\x03" +
		"\x02\x02\x02\x91\x93\x05\x06\x02\x02\x92\x91\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03" +
		"\x02\x02\x02\x96\x97\b\x14\t\x02\x97\x98\b\x14\x03\x02\x98+\x03\x02\x02" +
		"\x02\x11\x02\x03\x04\x056=RW_ekr\x8A\x8F\x94\n\x07\x03\x02\x02\x03\x02" +
		"\t\x05\x02\x07\x05\x02\t\x04\x02\x06\x02\x02\x07\x04\x02\t\x06\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TspShebangLexer.__ATN) {
			TspShebangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TspShebangLexer._serializedATN));
		}

		return TspShebangLexer.__ATN;
	}

}

