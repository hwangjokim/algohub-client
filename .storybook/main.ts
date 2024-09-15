import type { StorybookConfig } from "@storybook/nextjs";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";

const config: StorybookConfig = {
	// src폴더 내 모든 stories.ts|tsx 파일 적용
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-styling-webpack",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: ["../public"],
	webpackFinal(config) {
		// Vanilla Extract 로더 추가
		config!.module!.rules!.push({
			test: /\.css\.ts$/,
			use: [
				"style-loader",
				{
					loader: "css-loader",
					options: { modules: true },
				},
				"vanilla-extract-loader",
			],
			include: path.resolve(__dirname, "./"),
		});
		// Vanilla-Extract, MiniCssExtract 플러그인 추가
		config.plugins?.push(
			new VanillaExtractPlugin(),
			new MiniCssExtractPlugin(),
		);
		if (config.resolve) {
			config.resolve.alias!["@"] = path.resolve(__dirname, "../src/");
		}

		return config;
	},
};
export default config;
