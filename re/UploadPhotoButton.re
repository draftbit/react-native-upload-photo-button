open BsReactNative;

let styles =
  StyleSheet.create(
    Style.(
      {
        "wrapper": style([ width(Pt(60.)) ]),
        "circle": style([
          width(Pt(60.)),
          height(Pt(60.)),
          borderRadius(30.0),
          marginBottom(Pt(5.)),
          backgroundColor("#eee")
        ]),
        "label": style([
           fontSize(Float(12.))
        ])
      }
    )
  );

let component = ReasonReact.statelessComponent("UploadPhotoButton");
let make = (~label, ~circleBackgroundColor="#eee", ~labelColor="#eee", _children) => {
  ...component,
  render: (_) =>
    <TouchableOpacity>
      <View style=Style.(style([
            width(Pt(60.)),
            height(Pt(60.)),
            borderRadius(30.0),
            marginBottom(Pt(5.)),
            backgroundColor(circleBackgroundColor),
      ]))>
        <View style=styles##circle />
        <Text
          value=label
          style=Style.(style([
            fontSize(Float(12.)),
            color(labelColor)
          ]))
        />
      </View>
    </TouchableOpacity>
};
