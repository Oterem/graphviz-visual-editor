export const graphDot =`digraph "graph_apple_cake407_1_1_25_abbrsum.gv" {
	rankdir=LR ratio=auto
	{
		rank=source
		0
	}
	{
		rank=same
		3939
		4096
	}
	{
		rank=same
		4264
		4325
	}
	{
		rank=same
		4400
		4414
		3730
		3811
	}
	{
		rank=same
		4366
		4025
		4359
		4404
		4406
	}
	{
		rank=same
		4413
		4416
		3409
		3908
		4172
	}
	{
		rank=sink
		1
	}
	3409 [label=<<font point-size='18'><b>beat</b><br/>sugar (86.67%)<br/>butter (53.33%)<br/>shortening (33.33%)<br/>oil (6.67%)</font>> fillcolor="#fbfbfb" style=filled]
	3730 [label=<<font point-size='18'><b>sift</b><br/>flour (100%)<br/>salt (95.65%)<br/>cinnamon (73.91%)<br/>baking powder (60.87%)</font>> fillcolor="#f8f8f8" style=filled]
	3811 [label=<<font point-size='18'><b>mix</b><br/>cinnamon (85.71%)<br/>apple (85.71%)<br/>sugar (78.57%)<br/>brown sugar (21.43%)</font>> fillcolor="#fbfbfb" style=filled]
	3908 [label=<<font point-size='18'><b>beat</b><br/>butter (100%)<br/>white sugar (52.63%)<br/>brown sugar (31.58%)<br/>sugar (21.05%)</font>> fillcolor="#f9f9f9" style=filled]
	3939 [label=<<font point-size='18'><b>beat</b><br/>butter (93.75%)<br/>sugar (87.50%)<br/>egg (18.75%)<br/>water (12.50%)</font>> fillcolor="#fafafa" style=filled]
	4025 [label=<<font point-size='18'><b>mix</b><br/>apple (100%)<br/>walnut (50.00%)<br/>pecan (28.57%)<br/>raisin (21.43%)</font>> fillcolor="#fbfbfb" style=filled]
	4096 [label=<<font point-size='18'><b>preheat</b></font>> fillcolor="#f6f6f6" style=filled]
	4172 [label=<<font point-size='18'><b>mix</b><br/>egg (92.86%)<br/>sugar (35.71%)<br/>oil (28.57%)<br/>vanilla (28.57%)</font>> fillcolor="#fbfbfb" style=filled]
	4264 [label=<<font point-size='18'><b>add</b><br/>egg (97.62%)<br/>oil (11.90%)<br/>vanilla (9.52%)<br/>milk (7.14%)</font>> fillcolor="#f3f3f3" style=filled]
	4325 [label=<<font point-size='18'><b>flour</b></font>> fillcolor="#f2f2f2" style=filled]
	4359 [label=<<font point-size='18'><b>roll</b><br/>apple (100%)<br/>walnut (42.86%)<br/>raisin (14.29%)<br/>banana (5.71%)</font>> fillcolor="#f5f5f5" style=filled]
	4366 [label=<<font point-size='18'><b>bake</b></font>> fillcolor="#a4a4a4" style=filled]
	4400 [label=<<font point-size='18'><b>pour</b></font>> fillcolor="#dadada" style=filled]
	4404 [label=<<font point-size='18'><b>place</b></font>> fillcolor="#e2e2e2" style=filled]
	4406 [label=<<font point-size='18'><b>set</b></font>> fillcolor="#fcfcfc" style=filled]
	4413 [label=<<font point-size='18'><b>remove</b></font>> fillcolor="#f0f0f0" style=filled]
	4414 [label=<<font point-size='18'><b>mix</b></font>> fillcolor="#e4e4e4" style=filled]
	4416 [label=<<font point-size='18'><b>cool</b></font>> fillcolor="#cfcfcf" style=filled]
	0 [label=START fillcolor="#ffffff" style=filled]
	1 [label=END fillcolor="#ffffff" style=filled]
	0 [label=<<font point-size='18'><b>START</b></font>> shape=doublecircle style=bold]
	1 [label=<<font point-size='18'><b>END</b></font>> shape=doublecircle style=bold]
	3409 -> 4264 [penwidth=1.0]
	4406 -> 3409 [penwidth=1.2117647058823529]
	4325 -> 3730 [penwidth=1.388235294117647]
	3730 -> 4406 [penwidth=1.6]
	4325 -> 3811 [penwidth=1.0705882352941176]
	3811 -> 4406 [penwidth=1.1411764705882352]
	3908 -> 4264 [penwidth=1.1058823529411765]
	4406 -> 3908 [penwidth=1.1058823529411765]
	3939 -> 4264 [penwidth=1.035294117647059]
	4025 -> 4400 [penwidth=1.2117647058823529]
	4414 -> 4025 [penwidth=1.0705882352941176]
	4096 -> 4325 [penwidth=3.223529411764706]
	4406 -> 4172 [penwidth=1.0705882352941176]
	4172 -> 4414 [penwidth=1.0]
	4264 -> 4400 [penwidth=1.0]
	4264 -> 4414 [penwidth=1.3529411764705883]
	4359 -> 4400 [penwidth=1.7764705882352942]
	4359 -> 4404 [penwidth=1.1764705882352942]
	4414 -> 4359 [penwidth=1.1764705882352942]
	4400 -> 4366 [penwidth=3.3294117647058825]
	4404 -> 4366 [penwidth=1.7764705882352942]
	4366 -> 4413 [penwidth=1.2823529411764705]
	4366 -> 4416 [penwidth=3.4000000000000004]
	4414 -> 4400 [penwidth=1.1764705882352942]
	4414 -> 4404 [penwidth=1.1764705882352942]
	4413 -> 4416 [penwidth=1.1411764705882352]
	0 -> 3939 [penwidth=1.1411764705882352]
	0 -> 4096 [penwidth=7.0]
	4366 -> 1 [penwidth=1.811764705882353]
	4404 -> 1 [penwidth=1.1058823529411765]
	4416 -> 1 [penwidth=1.811764705882353]
	labelloc="t"
	label="Apple cake (12 servings)\n\n"
	fontsize=50
}
`
