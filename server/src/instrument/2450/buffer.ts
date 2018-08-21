'use strict'

import { CompletionItem, CompletionItemKind, MarkupKind, ParameterInformation, SignatureInformation } from 'vscode-languageserver'

const bufferCompletions: Array<CompletionItem> = [
    {
        kind: CompletionItemKind.Module,
        label: 'buffer'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction clearstats(bufferVar)\n```\n\nbuffer.clearstats([bufferVar])\n\
\n\
Clear the statistical information associated with the specified buffer without clearing the readings.'
        },
        kind: CompletionItemKind.Function,
        label: 'clearstats'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction delete(bufferName)\n```\n\nbuffer.delete(bufferName)\n\
\n\
Delete the specified, user-defined reading buffer.\n\
\n\
You cannot delete the default reading buffers, defbuffer1 and defbuffer2.'
        },
        kind: CompletionItemKind.Function,
        label: 'delete'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction getstats(bufferVar)\n```\n\
\n\
buffer.getstats([bufferVar]) -> {max, mean, min, n, stddev}\n\
\n\
Returns a statistics table from the specified reading buffer.\n\
\n\
The stats table always has the entry "n" (number of data points).\n\
\n\
If n is greater than 0, then the stats table has the entries \
"mean" (average reading), \
"max" (subtable containing max value data), and \
"min" (subtable containing min value data).\n\
\n\
The max and min subtables contain the entries "reading", "timestamp", "seconds", and "fractionalseconds".\n\
\n\
If n is greater than 1, then the stats table has the entry "stddev" (standard deviation).\n\
\n\
When the reading buffer is configured to fill continuously and overwrite older data with new data, the buffer \
statistics include the data that was overwritten.'
        },
        kind: CompletionItemKind.Function,
        label: 'getstats'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction make(bufferSize, style)\n```\n\
\n\
buffer.make(bufferSize[, buffer.STYLE_\\*]) -> bufferVar\n\
\n\
Create a user-defined reading buffer and set it as the active buffer.\n\
\n\
Newly created user-defined buffers have a default fill mode of FILL_ONCE.\n\
\n\
If you create a reading buffer that has the same name as an existing user-defined buffer, the existing buffer is \
overwritten by the new buffer. Any data in the existing buffer is lost.\n\
\n\
You cannot assign user-defined reading buffers the name defbuffer1 and defbuffer2.'
        },
        kind: CompletionItemKind.Function,
        label: 'make'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction save(bufferVar, fileName, timeFormat, start, end)\n```\n\
\n\
buffer.save(bufferVar, fileName[, buffer.SAVE_\\*][, start, end])\n\
\n\
Save data from the specified reading buffer to a USB flash drive.\n\
\n\
The filename must specify the full path (including /usb1/). If included, the file extension must be set to .csv (if \
no file extension is specified, .csv is added).\n\
\n\
Verify that you are using a unique name to avoid overwriting any existing .csv files on the flash drive.'
        },
        kind: CompletionItemKind.Function,
        label: 'save'
    },
    {
        data: ['buffer'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction saveappend(bufferVar, fileName, timeFormat, start, end)\n```\n\
\n\
buffer.saveappend(bufferVar, fileName[, buffer.SAVE_\\*][, start, end])\n\
\n\
Append data from the specified reading buffer to a file on the USB flash drive or create the file if it does not \
exist.\n\
\n\
The index column entry in the .csv file starts at 1 for each append operation.'
        },
        kind: CompletionItemKind.Function,
        label: 'saveappend'
    },
]

const bufferSignatures: Array<SignatureInformation> = [
    SignatureInformation.create(
        'buffer.clearstats([bufferVar])',
        undefined,
        ParameterInformation.create(
            'bufferVar',
            'The name of the reading buffer, which may be a default buffer (defbuffer1 or defbuffer2) or a \
user‑defined buffer; defaults to defbuffer1 if not specified.'
        ),
    ),
    SignatureInformation.create(
        'buffer.delete(bufferName)',
        undefined,
        ParameterInformation.create(
            'bufferName',
            'The name of a user‑defined reading buffer.'
        ),
    ),
    SignatureInformation.create(
        'buffer.getstats([bufferVar])',
        undefined,
        ParameterInformation.create(
            'bufferVar',
            'The name of the reading buffer, which may be a default buffer (defbuffer1 or defbuffer2) or a \
user‑defined buffer; defaults to defbuffer1 if not specified.'
        ),
    ),
    SignatureInformation.create(
        'buffer.make(bufferSize[, style])',
        undefined,
        ParameterInformation.create(
            'bufferSize',
            'The maximum number of readings that can be stored in bufferVar; minimum is 10.'
        ),
        ParameterInformation.create(
            'style',
            'The type of reading buffer to create. One of:\n\
buffer.STYLE_STANDARD (default)\n\
buffer.STYLE_COMPACT\n\
buffer.STYLE_FULL\n\
buffer.STYLE_WRITABLE\n\
buffer.STYLE_WRITABLE_FULL\n\
\n\
Once the first reading is stored in a COMPACT buffer, its range, display digits, and units cannot be changed.\n\
\n\
WRITABLE buffers are used to import external data and cannot be used to collect readings from the instrument.'
        ),
    ),
    SignatureInformation.create(
        'buffer.save(bufferVar, fileName[, timeFormat][, start, end])',
        undefined,
        ParameterInformation.create(
            'bufferVar',
            'The name of the reading buffer, which may be a default buffer (defbuffer1 or defbuffer2) or a \
user‑defined buffer.'
        ),
        ParameterInformation.create(
            'fileName',
            'A string that indicates the name of the file on the USB flash drive in which to save the reading buffer.'
        ),
        ParameterInformation.create(
            'timeFormat',
            'Defines how date and time information from the buffer is saved in the file on the USB flash drive; \
one of:\n\
buffer.SAVE_FORMAT_TIME (dates, times, and fractional seconds)\n\
buffer.SAVE_RAW_TIME (seconds and fractional seconds)\n\
buffer.SAVE_RELATIVE_TIME (relative timestamps)\n\
buffer.SAVE_TIMESTAMP_TIME (timestamps).'
        ),
        ParameterInformation.create(
            'start',
            'Defines the starting point in the buffer to start saving data.'
        ),
        ParameterInformation.create(
            'end',
            'Defines the ending point in the buffer to stop saving data.'
        ),
    ),
    SignatureInformation.create(
        'buffer.saveappend(bufferVar, fileName[, timeFormat][, start, end])',
        undefined,
        ParameterInformation.create(
            'bufferVar',
            'The name of the reading buffer, which may be a default buffer (defbuffer1 or defbuffer2) or a \
user‑defined buffer.'
        ),
        ParameterInformation.create(
            'fileName',
            'A string that indicates the name of the file on the USB flash drive in which to save the reading buffer.'
        ),
        ParameterInformation.create(
            'timeFormat',
            'Defines how date and time information from the buffer is saved in the file on the USB flash drive; \
one of:\n\
buffer.SAVE_FORMAT_TIME (dates, times, and fractional seconds)\n\
buffer.SAVE_RAW_TIME (seconds and fractional seconds)\n\
buffer.SAVE_RELATIVE_TIME (relative timestamps)\n\
buffer.SAVE_TIMESTAMP_TIME (timestamps).'
        ),
        ParameterInformation.create(
            'start',
            'Defines the starting point in the buffer to start saving data.'
        ),
        ParameterInformation.create(
            'end',
            'Defines the ending point in the buffer to stop saving data.'
        ),
    ),
]

export async function getBufferCompletions(): Promise<Array<CompletionItem>> {
    return new Promise<Array<CompletionItem>>((
        resolve: (value?: Array<CompletionItem>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(bufferCompletions)
        } catch (e) {
            reject(new Error(e.toString()))
        }
    })
}

export async function getBufferSignatures(): Promise<Array<SignatureInformation>> {
    return new Promise<Array<SignatureInformation>>((
        resolve: (value?: Array<SignatureInformation>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(bufferSignatures)
        } catch (e) {
            reject(new Error(e.toString()))
        }
    })
}
