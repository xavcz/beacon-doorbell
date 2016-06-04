import React from 'react';
import { mount } from 'react-mounter';

import Layout from '/imports/ui/layouts/Layout.jsx';
import { ButtonBlock } from '/imports/ui/components/ButtonBlock.jsx';

mount(Layout, { content: <ButtonBlock /> });